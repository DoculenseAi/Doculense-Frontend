"use client"

import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useDictionary } from "@/hooks/use-dictionary"

export function CommentThread() {
  const { t } = useDictionary()

  return (
    <div className="rounded-lg border border-border bg-surface-1 p-4">
      <h2 className="text-lg font-semibold">{t("review.comment")}</h2>
      <div className="mt-4 space-y-3">
        <div className="rounded-md bg-surface-2 p-3 text-sm">
          Please confirm the renewal notice period before approval.
        </div>
        <Textarea rows={4} placeholder={t("review.comment")} />
        <Button className="gap-2">
          <Send className="size-4" />
          {t("review.submit")}
        </Button>
      </div>
    </div>
  )
}
