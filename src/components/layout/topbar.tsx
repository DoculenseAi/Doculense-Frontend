"use client"

import { Bell, Menu, Search } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useDictionary } from "@/hooks/use-dictionary"
import type { User } from "@/lib/types"

import { Breadcrumbs } from "./breadcrumbs"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

export function Topbar({
  onMobileMenu,
  user,
}: {
  collapsed: boolean
  onMobileMenu: () => void
  user: User
}) {
  const { t } = useDictionary()
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)

  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-3 bg-background/60 backdrop-blur-md px-3 sm:px-4 lg:px-6">
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50" />
      <Button
        aria-label={t("nav.open_navigation")}
        className="md:hidden"
        size="icon"
        variant="ghost"
        onClick={onMobileMenu}
      >
        <Menu />
      </Button>
      <div className="hidden min-w-0 flex-1 md:block">
        <Breadcrumbs />
      </div>
      <div className="ms-auto hidden w-[200px] items-center md:flex lg:w-[280px]">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label={t("common.search")}
            className="h-9 bg-surface-2 ps-9"
            placeholder={t("common.search_placeholder")}
          />
        </div>
      </div>
      <LanguageSwitcher />
      <ThemeToggle />
      <Button
        aria-label={t("common.notifications")}
        className="relative"
        size="icon"
        variant="ghost"
      >
        <Bell />
        <span className="absolute end-2 top-2 size-2 rounded-full bg-destructive" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-2 px-1.5" variant="ghost">
            <Avatar className="size-8">
              <AvatarFallback className="bg-primary/15 text-xs text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span className="hidden max-w-28 truncate text-sm md:inline">
              {user.name}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{t("common.profile")}</DropdownMenuItem>
          <DropdownMenuItem>{t("nav.help")}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{t("nav.logout")}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
