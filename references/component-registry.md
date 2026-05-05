# DocuLense.AI — Component Registry

## Layout Components (`src/components/layout/`)

| Component | File | Type | Description |
|---|---|---|---|
| AppShell | `app-shell.tsx` | Server | Root wrapper: sidebar + topbar + content slot |
| Sidebar | `sidebar.tsx` | Client | Collapsible nav (240px → 64px), role-based items |
| SidebarItem | `sidebar-item.tsx` | Client | Nav item: icon + label, active state |
| Topbar | `topbar.tsx` | Client | Breadcrumbs + search + notifications + user menu |
| Breadcrumbs | `breadcrumbs.tsx` | Client | Auto-generated from route path |
| PageHeader | `page-header.tsx` | Server | Title + description + actions slot |
| LanguageSwitcher | `language-switcher.tsx` | Client | EN/AR dropdown |

## Dashboard (`src/components/dashboard/`)

| Component | File | Type | Description |
|---|---|---|---|
| StatCard | `stat-card.tsx` | Server | KPI card with icon, value, trend |
| ActivityFeed | `activity-feed.tsx` | Server | Recent activity items list |
| QuickActions | `quick-actions.tsx` | Client | Action buttons grid |

## Projects (`src/components/projects/`)

| Component | File | Type | Description |
|---|---|---|---|
| ProjectCard | `project-card.tsx` | Server | Grid card: name, doc count, last updated |
| ProjectList | `project-list.tsx` | Server | Table view of projects |
| CreateProjectDialog | `create-project-dialog.tsx` | Client | Modal: name + description form |
| ProjectTabs | `project-tabs.tsx` | Client | Documents / Generated / Activity tabs |
| ProjectEmptyState | `project-empty-state.tsx` | Server | First-project encouragement |

## Documents (`src/components/documents/`)

| Component | File | Type | Description |
|---|---|---|---|
| DocumentCard | `document-card.tsx` | Server | File card: name, type icon, status |
| DocumentTable | `document-table.tsx` | Client | Sortable doc table |
| UploadZone | `upload-zone.tsx` | Client | Drag & drop, file validation |
| UploadProgress | `upload-progress.tsx` | Client | Per-file progress bar |
| DocumentStatusBadge | `document-status-badge.tsx` | Server | Status pill: processing/ready/error |
| DocumentViewer | `document-viewer.tsx` | Client | PDF.js wrapper, lazy-loaded |
| DocumentMetadataPanel | `document-metadata-panel.tsx` | Server | Side panel: size, dates, version |

## AI Generation (`src/components/generation/`)

| Component | File | Type | Description |
|---|---|---|---|
| GenerationForm | `generation-form.tsx` | Client | Multi-step params form |
| GenerationPreview | `generation-preview.tsx` | Client | Streaming output viewer |
| DocumentTypeSelector | `document-type-selector.tsx` | Client | Card-based type picker |
| ContextDocumentPicker | `context-document-picker.tsx` | Client | Select reference docs |

## Reviews (`src/components/reviews/`)

| Component | File | Type | Description |
|---|---|---|---|
| ReviewCard | `review-card.tsx` | Server | Review summary card |
| ReviewTimeline | `review-timeline.tsx` | Server | Audit log events |
| CommentThread | `comment-thread.tsx` | Client | Inline doc comments |
| ApprovalActions | `approval-actions.tsx` | Client | Approve / Request Changes |

## Shared (`src/components/shared/`)

| Component | File | Type | Description |
|---|---|---|---|
| EmptyState | `empty-state.tsx` | Server | Icon + message + CTA |
| DataTable | `data-table.tsx` | Client | Reusable sortable/filterable table |
| SearchInput | `search-input.tsx` | Client | Debounced search |
| ConfirmDialog | `confirm-dialog.tsx` | Client | Destructive action confirmation |
| FileIcon | `file-icon.tsx` | Server | File type → icon mapping |
| UserAvatar | `user-avatar.tsx` | Server | Avatar with fallback initials |
| RoleBadge | `role-badge.tsx` | Server | User role indicator |
