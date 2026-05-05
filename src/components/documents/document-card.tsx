import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { localizedPath } from "@/lib/i18n"
import type { Dictionary, DocumentItem } from "@/lib/types"

import { FileIcon } from "../shared/file-icon"
import { DocumentStatusBadge } from "./document-status-badge"

export function DocumentCard({
  dictionary,
  document,
  lang,
}: {
  dictionary: Dictionary
  document: DocumentItem
  lang: string
}) {
  return (
    <Link
      href={localizedPath(
        lang,
        `/projects/${document.projectId}/documents/${document.id}`
      )}
    >
      <Card className="bg-surface-1 transition hover:bg-surface-2">
        <CardContent className="flex items-start gap-3 p-4">
          <FileIcon type={document.type} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{document.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{document.size}</p>
          </div>
          <DocumentStatusBadge dictionary={dictionary} status={document.status} />
        </CardContent>
      </Card>
    </Link>
  )
}
