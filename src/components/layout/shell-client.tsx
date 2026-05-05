"use client"

import { useEffect, useState } from "react"

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import type { User } from "@/lib/types"
import { UserProvider } from "@/providers/user-provider"

import { Sidebar, SidebarContent } from "./sidebar"
import { Topbar } from "./topbar"

export function ShellClient({
  children,
  user,
}: {
  children: React.ReactNode
  user: User
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("doculense-sidebar-collapsed") === "true"
    const frame = window.requestAnimationFrame(() => setCollapsed(stored))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  function toggleCollapsed() {
    setCollapsed((current) => {
      const next = !current
      localStorage.setItem("doculense-sidebar-collapsed", String(next))
      return next
    })
  }

  return (
    <UserProvider user={user}>
      <div className="app-shell">
        <Topbar
          collapsed={collapsed}
          onMobileMenu={() => setMobileOpen(true)}
          user={user}
        />
        <div className="app-body">
          <Sidebar
            collapsed={collapsed}
            onToggleCollapsed={toggleCollapsed}
            user={user}
          />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent
              side="left"
              className="w-[280px] border-border bg-sidebar p-0"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SidebarContent
                collapsed={false}
                mobile
                onNavigate={() => setMobileOpen(false)}
                user={user}
              />
            </SheetContent>
          </Sheet>
          <main className="main-content">
            <div className="content-container">{children}</div>
          </main>
        </div>
      </div>
    </UserProvider>
  )
}
