import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { t } from "@/lib/i18n"
import type { Dictionary, DocumentItem } from "@/lib/types"

import { DocumentStatusBadge } from "./document-status-badge"

export function DocumentMetadataPanel({
  dictionary,
  document,
}: {
  dictionary: Dictionary
  document: DocumentItem
}) {
  const rows = [
    [dictionary["document.owner"], document.owner],
    [dictionary["document.size"], document.size],
    [dictionary["document.type"], document.type.toUpperCase()],
    [dictionary["document.version"], document.version],
    [
      dictionary["document.updated"],
      new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(document.updatedAt)),
    ],
  ]

  return (
    <Card className="bg-surface-1">
      <CardHeader>
        <CardTitle className="text-lg">{t(dictionary, "document.metadata")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <DocumentStatusBadge dictionary={dictionary} status={document.status} />
        <div className="divide-y divide-border-subtle">
          {rows.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 py-3 text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span className="text-end font-medium">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
