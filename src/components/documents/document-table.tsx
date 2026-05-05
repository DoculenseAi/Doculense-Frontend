import Link from "next/link"

import { DataTable } from "@/components/shared/data-table"
import { FileIcon } from "@/components/shared/file-icon"
import { localizedPath } from "@/lib/i18n"
import type { Dictionary, DocumentItem } from "@/lib/types"

import { DocumentStatusBadge } from "./document-status-badge"

export function DocumentTable({
  dictionary,
  documents,
  lang,
}: {
  dictionary: Dictionary
  documents: DocumentItem[]
  lang: string
}) {
  return (
    <DataTable
      actionsLabel={dictionary["common.actions"]}
      editLabel={dictionary["common.edit"]}
      openLabel={dictionary["common.open"]}
      rows={documents}
      columns={[
        {
          key: "name",
          label: dictionary["document.table.name"],
          render: (document) => (
            <Link
              href={localizedPath(
                lang,
                `/projects/${document.projectId}/documents/${document.id}`
              )}
              className="flex items-center gap-2 font-medium hover:text-primary"
            >
              <FileIcon type={document.type} />
              {document.name}
            </Link>
          ),
        },
        {
          key: "status",
          label: dictionary["document.status"],
          render: (document) => (
            <DocumentStatusBadge
              dictionary={dictionary}
              status={document.status}
            />
          ),
        },
        {
          key: "owner",
          label: dictionary["document.owner"],
          render: (document) => document.owner,
        },
        {
          key: "updated",
          label: dictionary["document.updated"],
          render: (document) =>
            new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
            }).format(new Date(document.updatedAt)),
        },
      ]}
    />
  )
}
