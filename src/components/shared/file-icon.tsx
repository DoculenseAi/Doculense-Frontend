import { FileText, Sheet } from "lucide-react"

import type { DocumentItem } from "@/lib/types"

export function FileIcon({ type }: { type: DocumentItem["type"] }) {
  const className =
    type === "pdf"
      ? "text-destructive"
      : type === "xlsx"
        ? "text-success"
        : "text-primary"

  if (type === "xlsx") {
    return <Sheet className={`size-5 ${className}`} />
  }

  return <FileText className={`size-5 ${className}`} />
}
