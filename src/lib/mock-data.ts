import type {
  Activity,
  DocumentItem,
  Generation,
  Project,
  PlatformIncident,
  Review,
  Stat,
  TenantHealth,
  User,
} from "@/lib/types"

export const demoUser: User = {
  id: "usr_demo",
  name: "Nia Rao",
  email: "nia@doculense.ai",
  role: "superadmin",
  credits: 128,
  organization: "DocuLense Platform",
}

export const stats: Stat[] = [
  {
    labelKey: "dashboard.stats.projects",
    value: "18",
    trend: "+12%",
    tone: "primary",
  },
  {
    labelKey: "dashboard.stats.documents",
    value: "246",
    trend: "+31%",
    tone: "info",
  },
  {
    labelKey: "dashboard.stats.ready",
    value: "91%",
    trend: "+8%",
    tone: "success",
  },
  {
    labelKey: "dashboard.stats.credits",
    value: "128",
    trend: "-24",
    tone: "warning",
  },
]

export const projects: Project[] = [
  {
    id: "northwind-ma",
    name: "Northwind M&A Review",
    description: "Due diligence workspace for acquisition contracts.",
    status: "active",
    documentCount: 42,
    generatedCount: 9,
    updatedAt: "2026-05-02T09:30:00.000Z",
  },
  {
    id: "vendor-renewals",
    name: "Vendor Renewal Pack",
    description: "Renewal terms, change notices, and risk summaries.",
    status: "review",
    documentCount: 18,
    generatedCount: 5,
    updatedAt: "2026-05-01T14:12:00.000Z",
  },
  {
    id: "policy-refresh",
    name: "Policy Refresh 2026",
    description: "Internal policy revisions and approval evidence.",
    status: "draft",
    documentCount: 27,
    generatedCount: 3,
    updatedAt: "2026-04-30T12:00:00.000Z",
  },
]

export const documents: DocumentItem[] = [
  {
    id: "msa-2026",
    projectId: "northwind-ma",
    name: "Master Services Agreement.pdf",
    type: "pdf",
    status: "ready",
    size: "3.8 MB",
    version: "v4",
    updatedAt: "2026-05-02T10:14:00.000Z",
    owner: "Priya Shah",
  },
  {
    id: "risk-schedule",
    projectId: "northwind-ma",
    name: "Risk Allocation Schedule.docx",
    type: "docx",
    status: "processing",
    size: "640 KB",
    version: "v2",
    updatedAt: "2026-05-02T08:48:00.000Z",
    owner: "Omar Khan",
  },
  {
    id: "vendor-table",
    projectId: "vendor-renewals",
    name: "Renewal Pricing Matrix.xlsx",
    type: "xlsx",
    status: "review",
    size: "1.1 MB",
    version: "v1",
    updatedAt: "2026-05-01T15:05:00.000Z",
    owner: "Leah Carter",
  },
  {
    id: "privacy-addendum",
    projectId: "policy-refresh",
    name: "Privacy Addendum.pdf",
    type: "pdf",
    status: "error",
    size: "2.4 MB",
    version: "v3",
    updatedAt: "2026-04-29T16:21:00.000Z",
    owner: "Aarav Mehta",
  },
]

export const generations: Generation[] = [
  {
    id: "gen-executive-summary",
    projectId: "northwind-ma",
    title: "Executive Risk Summary",
    typeKey: "generation.type.summary",
    status: "complete",
    updatedAt: "2026-05-02T13:02:00.000Z",
    excerpt:
      "The reviewed agreements show moderate renewal exposure, strong confidentiality coverage, and three clauses requiring approval before close.",
  },
  {
    id: "gen-renewal-notice",
    projectId: "vendor-renewals",
    title: "Vendor Renewal Notice",
    typeKey: "generation.type.notice",
    status: "draft",
    updatedAt: "2026-05-01T11:18:00.000Z",
    excerpt:
      "This notice confirms the proposed renewal term, pricing treatment, and change-control obligations for the selected vendor group.",
  },
]

export const reviews: Review[] = [
  {
    id: "rev-msa",
    documentId: "msa-2026",
    title: "MSA approval package",
    reviewer: "Maya Fernandes",
    status: "pending",
    dueAt: "2026-05-06T18:00:00.000Z",
  },
  {
    id: "rev-renewals",
    documentId: "vendor-table",
    title: "Renewal commercial review",
    reviewer: "Noah Singh",
    status: "changes",
    dueAt: "2026-05-05T18:00:00.000Z",
  },
  {
    id: "rev-policy",
    documentId: "privacy-addendum",
    title: "Policy language approval",
    reviewer: "Sophia Chen",
    status: "approved",
    dueAt: "2026-05-03T18:00:00.000Z",
  },
]

export const activity: Activity[] = [
  {
    id: "act-1",
    actor: "Priya Shah",
    actionKey: "activity.uploaded",
    target: "Master Services Agreement.pdf",
    createdAt: "2026-05-02T10:14:00.000Z",
  },
  {
    id: "act-2",
    actor: "DocuLense AI",
    actionKey: "activity.generated",
    target: "Executive Risk Summary",
    createdAt: "2026-05-02T13:02:00.000Z",
  },
  {
    id: "act-3",
    actor: "Maya Fernandes",
    actionKey: "activity.requested_changes",
    target: "Renewal Pricing Matrix.xlsx",
    createdAt: "2026-05-01T17:45:00.000Z",
  },
]

export const tenants: TenantHealth[] = [
  {
    id: "tenant-northstar",
    name: "Northstar Legal",
    plan: "enterprise",
    status: "healthy",
    users: 32,
    monthlyCredits: 1842,
    storageGb: 84,
  },
  {
    id: "tenant-cobalt",
    name: "Cobalt Advisory",
    plan: "enterprise",
    status: "watch",
    users: 18,
    monthlyCredits: 972,
    storageGb: 41,
  },
  {
    id: "tenant-solo",
    name: "Solo Counsel Network",
    plan: "individual",
    status: "healthy",
    users: 7,
    monthlyCredits: 214,
    storageGb: 12,
  },
  {
    id: "tenant-trial",
    name: "Trial Workspace Pool",
    plan: "temporary",
    status: "blocked",
    users: 46,
    monthlyCredits: 128,
    storageGb: 9,
  },
]

export const platformIncidents: PlatformIncident[] = [
  {
    id: "inc-r2",
    service: "Cloudflare R2 uploads",
    severity: "medium",
    status: "monitoring",
    updatedAt: "2026-05-03T09:40:00.000Z",
  },
  {
    id: "inc-ai",
    service: "AI generation queue",
    severity: "low",
    status: "resolved",
    updatedAt: "2026-05-03T08:10:00.000Z",
  },
  {
    id: "inc-auth",
    service: "JWT session validation",
    severity: "low",
    status: "monitoring",
    updatedAt: "2026-05-02T18:35:00.000Z",
  },
]
