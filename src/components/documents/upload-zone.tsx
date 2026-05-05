"use client"

import { CloudUpload } from "lucide-react"
import { useRef, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useDictionary } from "@/hooks/use-dictionary"

import { UploadProgress } from "./upload-progress"

export function UploadZone() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState(0)
  const { t } = useDictionary()

  function simulateUpload() {
    setProgress(15)
    const steps = [35, 62, 88, 100]
    steps.forEach((step, index) => {
      window.setTimeout(() => setProgress(step), 250 * (index + 1))
    })
    window.setTimeout(() => toast.success(t("document.ready")), 1300)
  }

  return (
    <div className="rounded-lg border-2 border-dashed border-border bg-surface-1 p-6 text-center transition hover:border-primary/60">
      <CloudUpload className="mx-auto size-10 text-muted-foreground" />
      <p className="mt-3 text-sm font-medium">{t("document.drag_drop")}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        {t("document.click_browse")}
      </p>
      <input
        ref={inputRef}
        className="sr-only"
        type="file"
        multiple
        accept=".pdf,.docx,.xlsx"
        onChange={simulateUpload}
      />
      <Button
        className="mt-4"
        variant="secondary"
        onClick={() => inputRef.current?.click()}
      >
        {t("document.upload")}
      </Button>
      {progress > 0 ? (
        <div className="mt-5">
          <UploadProgress value={progress} />
        </div>
      ) : null}
    </div>
  )
}
