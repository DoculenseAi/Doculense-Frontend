"use client"

import { CheckCircle2, RotateCcw } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useDictionary } from "@/hooks/use-dictionary"

export function ApprovalActions() {
  const { t } = useDictionary()

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        className="gap-2"
        onClick={() => toast.success(t("review.approved"))}
      >
        <CheckCircle2 className="size-4" />
        {t("review.approve")}
      </Button>
      <Button
        className="gap-2"
        variant="secondary"
        onClick={() => toast.message(t("review.changes"))}
      >
        <RotateCcw className="size-4" />
        {t("review.request_changes")}
      </Button>
    </div>
  )
}
