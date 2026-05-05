"use client"

import type { LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export function SidebarItem({
  active,
  collapsed,
  href,
  icon: Icon,
  label,
  onNavigate,
}: {
  active: boolean
  collapsed: boolean
  href: string
  icon: LucideIcon
  label: string
  onNavigate?: () => void
}) {
  const item = (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "relative flex h-10 items-center gap-2.5 rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        active &&
          "bg-primary/10 text-primary before:absolute before:inset-y-2 before:start-0 before:w-[3px] before:rounded-r-full before:bg-primary",
        collapsed && "justify-center px-0"
      )}
    >
      <Icon className="size-5 shrink-0" />
      {!collapsed ? <span className="truncate">{label}</span> : null}
    </Link>
  )

  if (!collapsed) {
    return item
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{item}</TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}
