import type { Dictionary, Project } from "@/lib/types"

import { DataTable } from "../shared/data-table"

export function ProjectList({
  dictionary,
  projects,
}: {
  dictionary: Dictionary
  projects: Project[]
}) {
  return (
    <DataTable
      actionsLabel={dictionary["common.actions"]}
      editLabel={dictionary["common.edit"]}
      openLabel={dictionary["common.open"]}
      rows={projects}
      columns={[
        {
          key: "name",
          label: dictionary["project.name"],
          render: (project) => project.name,
        },
        {
          key: "documents",
          label: dictionary["project.documents_tab"],
          render: (project) => project.documentCount,
        },
        {
          key: "updated",
          label: dictionary["project.updated_at"].replace(" {date}", ""),
          render: (project) =>
            new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
            }).format(new Date(project.updatedAt)),
        },
      ]}
    />
  )
}
