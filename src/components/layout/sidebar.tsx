"use client"

import {
  CheckCircle2,
  FileText,
  FolderKanban,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sparkles,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { localizedPath } from "@/lib/i18n"
import type { User } from "@/lib/types"
import { useDictionary } from "@/hooks/use-dictionary"

import { SidebarItem } from "./sidebar-item"

const workspaceItems = [
  { href: "/dashboard", labelKey: "nav.dashboard", icon: LayoutDashboard },
  { href: "/projects", labelKey: "nav.projects", icon: FolderKanban },
  { href: "/documents", labelKey: "nav.documents", icon: FileText },
  { href: "/generate", labelKey: "nav.generate", icon: Sparkles },
  { href: "/reviews", labelKey: "nav.reviews", icon: CheckCircle2 },
]

const accountItems = [
  { href: "/settings", labelKey: "nav.settings", icon: Settings },
]

const adminItems = [
  { href: "/admin/users", labelKey: "nav.users", icon: Users },
  { href: "/admin/usage", labelKey: "nav.usage", icon: BarChart3 },
]

const superadminItems = [
  {
    href: "/superadmin/command-centre",
    labelKey: "nav.command_centre",
    icon: ShieldCheck,
  },
]

export function Sidebar({
  collapsed,
  onToggleCollapsed,
  user,
}: {
  collapsed: boolean
  onToggleCollapsed: () => void
  user: User
}) {
  return (
    <aside
      className={[
        "hidden shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 md:block",
        collapsed ? "w-16" : "w-60",
      ].join(" ")}
    >
      <SidebarContent
        collapsed={collapsed}
        onToggleCollapsed={onToggleCollapsed}
        user={user}
      />
    </aside>
  )
}

export function SidebarContent({
  collapsed,
  mobile,
  onNavigate,
  onToggleCollapsed,
  user,
}: {
  collapsed: boolean
  mobile?: boolean
  onNavigate?: () => void
  onToggleCollapsed?: () => void
  user: User
}) {
  const pathname = usePathname()
  const { lang, t } = useDictionary()
  const canAdmin = user.role === "enterprise_admin" || user.role === "superadmin"
  const canSuperadmin = user.role === "superadmin"

  function renderSection(
    titleKey: string,
    items: typeof workspaceItems,
    alwaysShow = true
  ) {
    if (!alwaysShow) {
      return null
    }

    return (
      <div className="space-y-1.5">
        {!collapsed ? (
          <p className="px-3 text-[11px] font-semibold uppercase text-text-muted">
            {t(titleKey)}
          </p>
        ) : null}
        {items.map((item) => {
          const href = localizedPath(lang, item.href)
          const active = pathname === href || pathname.startsWith(`${href}/`)

          return (
            <SidebarItem
              key={item.href}
              active={active}
              collapsed={collapsed}
              href={href}
              icon={item.icon}
              label={t(item.labelKey)}
              onNavigate={onNavigate}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-4 px-3 py-3">
      <div className="flex h-10 items-center justify-between">
        <div className="flex min-w-0 items-center gap-2 px-1">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            DL
          </div>
          {!collapsed ? (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{t("app.name")}</p>
              <p className="truncate text-[11px] text-text-muted">
                {user.organization}
              </p>
            </div>
          ) : null}
        </div>
        {!mobile && onToggleCollapsed ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                className="hidden md:inline-flex"
                size="icon-sm"
                variant="ghost"
                onClick={onToggleCollapsed}
              >
                {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {collapsed ? "Expand" : "Collapse"}
            </TooltipContent>
          </Tooltip>
        ) : null}
      </div>
      <Separator />
      <nav className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto">
        {renderSection("nav.workspace", workspaceItems)}
        {renderSection("nav.account", accountItems)}
        {renderSection("nav.management", adminItems, canAdmin)}
        {renderSection("nav.superadmin", superadminItems, canSuperadmin)}
      </nav>
    </div>
  )
}
