import type { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function EmptyState({
  action,
  description,
  icon: Icon,
  title,
  tip,
  tipLabel,
}: {
  action?: { label: string; href?: string; onClick?: () => void }
  description: string
  icon: LucideIcon
  title: string
  tip?: string
  tipLabel?: string
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface-1/50 p-12 text-center transition-all hover:bg-surface-1">
      <div className="relative mb-6">
        <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-2xl" />
        <div className="relative flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
          <Icon className="size-10" />
        </div>
      </div>
      <h2 className="text-xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {action && (
        <Button
          className="mt-8 px-8"
          size="lg"
          onClick={action.onClick}
          asChild={Boolean(action.href)}
        >
          {action.href ? <a href={action.href}>{action.label}</a> : action.label}
        </Button>
      )}
      {tip && (
        <p className="mt-6 text-xs italic text-muted-foreground/60">
          {tipLabel ?? "Tip"}: {tip}
        </p>
      )}
    </div>
  )
}
