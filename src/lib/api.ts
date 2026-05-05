import "server-only"

import { getCurrentUser } from "@/lib/auth"
import {
  activity,
  documents,
  generations,
  platformIncidents,
  projects,
  reviews,
  stats,
  tenants,
} from "@/lib/mock-data"

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL

export async function apiClient<T>(path: string, init?: RequestInit): Promise<T> {
  if (!apiBaseUrl) {
    throw new Error("API_BASE_URL is not configured")
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export async function getDashboardData() {
  const user = await getCurrentUser()

  return {
    user,
    stats,
    projects: projects.slice(0, 3),
    activity,
  }
}

export async function getProjects() {
  return projects
}

export async function getProject(projectId: string) {
  return projects.find((project) => project.id === projectId) ?? projects[0]
}

export async function getProjectDocuments(projectId: string) {
  return documents.filter((document) => document.projectId === projectId)
}

export async function getDocuments() {
  return documents
}

export async function getDocument(documentId: string) {
  return documents.find((document) => document.id === documentId) ?? documents[0]
}

export async function getGenerations(projectId?: string) {
  return projectId
    ? generations.filter((generation) => generation.projectId === projectId)
    : generations
}

export async function getGeneration(generationId: string) {
  return (
    generations.find((generation) => generation.id === generationId) ??
    generations[0]
  )
}

export async function getReviews() {
  return reviews
}

export async function getReview(reviewId: string) {
  return reviews.find((review) => review.id === reviewId) ?? reviews[0]
}

export async function getAdminUsage() {
  return {
    creditsUsed: 1842,
    apiCalls: 9831,
    storageGb: 84,
    activeUsers: 32,
    series: [62, 74, 55, 91, 68, 82],
  }
}

export async function getSuperadminCommandCentre() {
  const activeTenants = tenants.filter((tenant) => tenant.status !== "blocked")
  const credits = tenants.reduce((total, tenant) => total + tenant.monthlyCredits, 0)
  const storage = tenants.reduce((total, tenant) => total + tenant.storageGb, 0)
  const users = tenants.reduce((total, tenant) => total + tenant.users, 0)

  return {
    metrics: [
      { labelKey: "superadmin.metric.tenants", value: String(tenants.length), trend: "+2" },
      { labelKey: "superadmin.metric.active", value: String(activeTenants.length), trend: "99.4%" },
      { labelKey: "superadmin.metric.credits", value: credits.toLocaleString("en"), trend: "+18%" },
      { labelKey: "superadmin.metric.storage", value: `${storage} GB`, trend: "+11%" },
      { labelKey: "superadmin.metric.users", value: String(users), trend: "+24" },
      { labelKey: "superadmin.metric.incidents", value: String(platformIncidents.filter((incident) => incident.status !== "resolved").length), trend: "live" },
    ],
    tenants,
    incidents: platformIncidents,
  }
}
