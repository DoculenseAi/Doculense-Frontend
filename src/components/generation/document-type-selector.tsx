"use client"

import { FileText, ListChecks, Mail, ScrollText } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useDictionary } from "@/hooks/use-dictionary"

const types = [
  { key: "generation.type.summary", icon: ListChecks },
  { key: "generation.type.notice", icon: Mail },
  { key: "generation.type.memo", icon: FileText },
  { key: "generation.type.clause", icon: ScrollText },
]

export function DocumentTypeSelector() {
  const [selected, setSelected] = useState(types[0].key)
  const { t } = useDictionary()

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {types.map((type) => {
        const Icon = type.icon
        const active = selected === type.key

        return (
          <button
            key={type.key}
            type="button"
            onClick={() => setSelected(type.key)}
            className={cn(
              "flex min-h-24 items-start gap-3 rounded-lg border border-border bg-surface-1 p-4 text-start transition hover:bg-surface-2",
              active && "border-primary bg-primary/10"
            )}
          >
            <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
            <span className="text-sm font-medium">{t(type.key)}</span>
          </button>
        )
      })}
      <input type="hidden" name="documentType" value={selected} />
      <Button className="sr-only" type="submit">
        {t("generation.generate")}
      </Button>
    </div>
  )
}
