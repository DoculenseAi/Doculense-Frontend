import { Badge } from "@/components/ui/badge"
import type { UserRole } from "@/lib/types"

const labels: Record<UserRole, string> = {
  temporary: "Temporary",
  individual: "Individual",
  enterprise_user: "Enterprise User",
  enterprise_admin: "Enterprise Admin",
  superadmin: "Superadmin",
}

export function RoleBadge({ role }: { role: UserRole }) {
  return <Badge variant="secondary">{labels[role]}</Badge>
}
