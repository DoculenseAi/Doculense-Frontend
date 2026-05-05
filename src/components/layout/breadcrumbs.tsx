"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useDictionary } from "@/hooks/use-dictionary"

const segmentLabels: Record<string, string> = {
  dashboard: "nav.dashboard",
  projects: "nav.projects",
  documents: "nav.documents",
  generate: "nav.generate",
  reviews: "nav.reviews",
  settings: "nav.settings",
  team: "settings.team",
  admin: "nav.admin",
  users: "nav.users",
  usage: "nav.usage",
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const { lang, t } = useDictionary()
  const parts = pathname.split("/").filter(Boolean).slice(1)
  const visible = parts.length ? parts : ["dashboard"]

  return (
    <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1">
      {visible.map((part, index) => {
        const isLast = index === visible.length - 1
        const label = segmentLabels[part] ? t(segmentLabels[part]) : part
        const href = `/${lang}/${visible.slice(0, index + 1).join("/")}`

        return (
          <div key={`${part}-${index}`} className="flex min-w-0 items-center gap-1">
            {index > 0 ? (
              <span className="text-sm text-muted-foreground">/</span>
            ) : null}
            {isLast ? (
              <span className="truncate text-sm font-medium text-foreground">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="truncate text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
