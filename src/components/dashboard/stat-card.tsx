import {
  BarChart3,
  CheckCircle2,
  FileText,
  FolderKanban,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { t } from "@/lib/i18n"
import type { Dictionary, Stat } from "@/lib/types"

import { cn } from "@/lib/utils"

const icons = {
  primary: FolderKanban,
  info: FileText,
  success: CheckCircle2,
  warning: BarChart3,
}

const tones = {
  primary: "border-s-primary text-primary hover:border-s-primary/80",
  info: "border-s-info text-info hover:border-s-info/80",
  success: "border-s-success text-success hover:border-s-success/80",
  warning: "border-s-warning text-warning hover:border-s-warning/80",
}

export function StatCard({
  dictionary,
  stat,
}: {
  dictionary: Dictionary
  stat: Stat
}) {
  const Icon = icons[stat.tone]

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-s-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        tones[stat.tone]
      )}
    >
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover/card:opacity-100 opacity-0" />
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {t(dictionary, stat.labelKey)}
            </p>
            <p className="mt-3 text-3xl font-semibold text-foreground">
              {stat.value}
            </p>
          </div>
          <Icon className="size-8 opacity-75" />
        </div>
        <p className="mt-4 text-xs font-medium text-muted-foreground">
          {stat.trend}
        </p>
      </CardContent>
    </Card>
  )
}
