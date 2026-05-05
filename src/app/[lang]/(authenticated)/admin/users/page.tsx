import { getDictionary } from "@/app/[lang]/dictionaries"
import { PageHeader } from "@/components/layout/page-header"
import { DataTable } from "@/components/shared/data-table"
import { RoleBadge } from "@/components/shared/role-badge"
import type { UserRole } from "@/lib/types"

const rows = [
  { name: "Aarav Mehta", email: "aarav@doculense.ai", role: "enterprise_admin" },
  { name: "Priya Shah", email: "priya@doculense.ai", role: "enterprise_user" },
  { name: "Leah Carter", email: "leah@doculense.ai", role: "individual" },
] as { name: string; email: string; role: UserRole }[]

export default async function AdminUsersPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      <PageHeader
        title={dictionary["admin.users.title"]}
        description={dictionary["admin.users.subtitle"]}
      />
      <DataTable
        actionsLabel={dictionary["common.actions"]}
        editLabel={dictionary["common.edit"]}
        openLabel={dictionary["common.open"]}
        rows={rows}
        columns={[
          { key: "name", label: dictionary["auth.name"], render: (user) => user.name },
          { key: "email", label: dictionary["auth.email"], render: (user) => user.email },
          {
            key: "role",
            label: dictionary["nav.admin"],
            render: (user) => <RoleBadge role={user.role} />,
          },
        ]}
      />
    </>
  )
}
