"use client"

import { CloudUpload, FolderPlus, ListChecks, Sparkles } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDictionary } from "@/hooks/use-dictionary"
import { localizedPath } from "@/lib/i18n"

const actions = [
  { href: "/projects", labelKey: "dashboard.action.project", icon: FolderPlus },
  { href: "/projects/northwind-ma", labelKey: "dashboard.action.upload", icon: CloudUpload },
  { href: "/generate", labelKey: "dashboard.action.generate", icon: Sparkles },
  { href: "/reviews", labelKey: "dashboard.action.review", icon: ListChecks },
]

export function QuickActions({ title }: { title: string }) {
  const { lang, t } = useDictionary()

  return (
    <Card className="bg-surface-1">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <Button
              key={action.href}
              asChild
              className="h-11 justify-start gap-2"
              variant="secondary"
            >
              <Link href={localizedPath(lang, action.href)}>
                <Icon className="size-4" />
                {t(action.labelKey)}
              </Link>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}
