# DocuLense.AI — Page Routes & Data Requirements

## Public Pages (No Auth Required)

| Route | File Path | Data | Key Components |
|---|---|---|---|
| `/{lang}` | `[lang]/(public)/page.tsx` | Static | Hero, FeatureGrid, PricingPreview, Footer |
| `/{lang}/features` | `[lang]/(public)/features/page.tsx` | Static | FeatureDetail cards |
| `/{lang}/pricing` | `[lang]/(public)/pricing/page.tsx` | Static (or API for plans) | PricingCards, FeatureComparisonTable |
| `/{lang}/login` | `[lang]/(public)/login/page.tsx` | None | LoginForm (Server Action) |
| `/{lang}/register` | `[lang]/(public)/register/page.tsx` | None | RegisterForm (Server Action) |

## Authenticated Pages

| Route | File Path | Data Source | Key Components |
|---|---|---|---|
| `/{lang}/dashboard` | `[lang]/(authenticated)/dashboard/page.tsx` | `GET /dashboard/stats`, `GET /activity` | StatCard, ActivityFeed, QuickActions, ProjectCard |
| `/{lang}/projects` | `[lang]/(authenticated)/projects/page.tsx` | `GET /projects` | ProjectCard/ProjectList, CreateProjectDialog, SearchInput |
| `/{lang}/projects/[id]` | `[lang]/(authenticated)/projects/[id]/page.tsx` | `GET /projects/:id`, `GET /projects/:id/documents` | ProjectTabs, DocumentTable, UploadZone |
| `/{lang}/projects/[id]/documents/[docId]` | `[lang]/(authenticated)/projects/[id]/documents/[docId]/page.tsx` | `GET /documents/:id`, R2 file URL | DocumentViewer, DocumentMetadataPanel |
| `/{lang}/documents` | `[lang]/(authenticated)/documents/page.tsx` | `GET /documents` | DataTable, SearchInput, DocumentStatusBadge |
| `/{lang}/generate` | `[lang]/(authenticated)/generate/page.tsx` | `GET /projects` (for context) | DocumentTypeSelector, GenerationForm |
| `/{lang}/generate/[id]` | `[lang]/(authenticated)/generate/[id]/page.tsx` | `GET /generations/:id` | GenerationPreview, ApprovalActions |
| `/{lang}/reviews` | `[lang]/(authenticated)/reviews/page.tsx` | `GET /reviews` | ReviewCard, DataTable |
| `/{lang}/reviews/[id]` | `[lang]/(authenticated)/reviews/[id]/page.tsx` | `GET /reviews/:id` | DocumentViewer, CommentThread, ApprovalActions, ReviewTimeline |
| `/{lang}/settings` | `[lang]/(authenticated)/settings/page.tsx` | `GET /user/profile` | ProfileForm, PreferencesForm |
| `/{lang}/settings/team` | `[lang]/(authenticated)/settings/team/page.tsx` | `GET /team/members` | DataTable, InviteUserDialog |

## Admin Pages (Enterprise Admin Only)

| Route | File Path | Data Source | Key Components |
|---|---|---|---|
| `/{lang}/admin/users` | `[lang]/(authenticated)/admin/users/page.tsx` | `GET /admin/users` | DataTable, RoleBadge |
| `/{lang}/admin/usage` | `[lang]/(authenticated)/admin/usage/page.tsx` | `GET /admin/usage` | StatCard, UsageCharts |

## Access Control Matrix

| Page | Temporary | Individual | Enterprise User | Enterprise Admin |
|---|---|---|---|---|
| Dashboard | ✅ (limited) | ✅ | ✅ | ✅ |
| Projects | ✅ (1 project) | ✅ | ✅ | ✅ |
| Documents | ✅ | ✅ | ✅ | ✅ |
| AI Generation | ✅ (2-3 credits) | ✅ | ✅ | ✅ |
| Reviews | ❌ | ✅ | ✅ | ✅ |
| Settings | ✅ (basic) | ✅ | ✅ | ✅ |
| Team Settings | ❌ | ❌ | ❌ | ✅ |
| Admin Users | ❌ | ❌ | ❌ | ✅ |
| Admin Usage | ❌ | ❌ | ❌ | ✅ |
