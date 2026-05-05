export const supportedLocales = [
  "en",
  "ar",
  "es",
  "fr",
  "hi",
  "pt-BR",
  "zh-CN",
] as const

export type Locale = (typeof supportedLocales)[number]
export type Direction = "ltr" | "rtl"
export type Dictionary = Record<string, string>

export type UserRole =
  | "temporary"
  | "individual"
  | "enterprise_user"
  | "enterprise_admin"
  | "superadmin"

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  credits: number
  organization?: string
}

export type Stat = {
  labelKey: string
  value: string
  trend: string
  tone: "primary" | "success" | "warning" | "info"
}

export type Activity = {
  id: string
  actor: string
  actionKey: string
  target: string
  createdAt: string
}

export type Project = {
  id: string
  name: string
  description: string
  status: "active" | "review" | "draft"
  documentCount: number
  generatedCount: number
  updatedAt: string
}

export type DocumentStatus = "processing" | "ready" | "error" | "review"

export type DocumentItem = {
  id: string
  projectId: string
  name: string
  type: "pdf" | "docx" | "xlsx"
  status: DocumentStatus
  size: string
  version: string
  updatedAt: string
  owner: string
}

export type Generation = {
  id: string
  projectId: string
  title: string
  typeKey: string
  status: "draft" | "complete" | "review"
  updatedAt: string
  excerpt: string
}

export type Review = {
  id: string
  documentId: string
  title: string
  reviewer: string
  status: "pending" | "approved" | "changes"
  dueAt: string
}

export type TenantHealth = {
  id: string
  name: string
  plan: "temporary" | "individual" | "enterprise"
  status: "healthy" | "watch" | "blocked"
  users: number
  monthlyCredits: number
  storageGb: number
}

export type PlatformIncident = {
  id: string
  service: string
  severity: "low" | "medium" | "high"
  status: "monitoring" | "investigating" | "resolved"
  updatedAt: string
}
