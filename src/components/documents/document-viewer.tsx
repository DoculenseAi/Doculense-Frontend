"use client"

import { useEffect, useState } from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { useDictionary } from "@/hooks/use-dictionary"
import type { DocumentItem } from "@/lib/types"

export function DocumentViewer({ document }: { document: DocumentItem }) {
  const [ready, setReady] = useState(false)
  const { t } = useDictionary()

  useEffect(() => {
    let mounted = true

    import("pdfjs-dist").then(() => {
      if (mounted) {
        setReady(true)
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="min-h-[520px] rounded-lg border border-border bg-surface-1 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{t("document.viewer.title")}</p>
          <p className="text-xs text-muted-foreground">{document.name}</p>
        </div>
        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
          {document.type.toUpperCase()}
        </span>
      </div>
      {ready ? (
        <div className="flex min-h-[430px] flex-col items-center justify-center rounded-md border border-border-subtle bg-background p-8 text-center">
          <div className="w-full max-w-md space-y-3">
            <div className="h-8 rounded bg-surface-2" />
            <div className="h-3 rounded bg-surface-2" />
            <div className="h-3 w-4/5 rounded bg-surface-2" />
            <div className="h-28 rounded bg-surface-2" />
            <div className="h-3 rounded bg-surface-2" />
            <div className="h-3 w-2/3 rounded bg-surface-2" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {t("document.viewer.empty")}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-[430px] w-full" />
        </div>
      )}
    </div>
  )
}
