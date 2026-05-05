"use client"

import { Checkbox } from "@/components/ui/checkbox"
import type { DocumentItem } from "@/lib/types"
import { useDictionary } from "@/hooks/use-dictionary"

import { FileIcon } from "../shared/file-icon"

export function ContextDocumentPicker({
  documents,
}: {
  documents: DocumentItem[]
}) {
  const { t } = useDictionary()

  return (
    <div className="rounded-lg border border-border bg-surface-1">
      <div className="border-b border-border p-4">
        <p className="text-sm font-medium">{t("generation.context")}</p>
      </div>
      <div className="divide-y divide-border-subtle">
        {documents.map((document) => (
          <label
            key={document.id}
            className="flex cursor-pointer items-center gap-3 p-4 text-sm hover:bg-surface-2"
          >
            <Checkbox name="documents" value={document.id} />
            <FileIcon type={document.type} />
            <span className="min-w-0 flex-1 truncate">{document.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
