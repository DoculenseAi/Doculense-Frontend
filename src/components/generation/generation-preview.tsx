"use client"

import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useDictionary } from "@/hooks/use-dictionary"

const text =
  "The selected document set indicates a moderate-risk renewal posture. Confidentiality and limitation-of-liability language are consistent across the package, while indemnity scope and renewal notice periods require reviewer confirmation before final approval."

export function GenerationPreview({ initialText }: { initialText?: string }) {
  const [visibleText, setVisibleText] = useState(initialText ?? "")
  const { t } = useDictionary()

  useEffect(() => {
    if (initialText) {
      return
    }

    let index = 0
    const timer = window.setInterval(() => {
      index += 3
      setVisibleText(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(timer)
      }
    }, 30)

    return () => window.clearInterval(timer)
  }, [initialText])

  return (
    <Card className="sticky top-[88px] bg-surface-1">
      <CardHeader>
        <CardTitle className="text-xs uppercase text-muted-foreground">
          {t("generation.preview")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "relative min-h-[280px] whitespace-pre-wrap rounded-md border border-primary/20 bg-primary/5 p-4 text-sm leading-7 shadow-inner dark:bg-primary/10",
            !visibleText && "animate-shimmer bg-linear-to-r from-primary/5 via-primary/15 to-primary/5 bg-[length:200%_100%]"
          )}
        >
          {visibleText}
          {!initialText && visibleText.length < text.length ? (
            <span className="ml-1 inline-block h-4 w-1 animate-caret-blink bg-primary align-middle" />
          ) : null}
          {!visibleText && (
            <div className="space-y-4">
              <div className="h-4 w-3/4 rounded bg-primary/10" />
              <div className="h-4 w-1/2 rounded bg-primary/10" />
              <div className="h-4 w-5/6 rounded bg-primary/10" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
