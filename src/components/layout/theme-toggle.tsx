"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useDictionary } from "@/hooks/use-dictionary"
import { useTheme } from "@/providers/theme-provider"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useDictionary()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost" disabled>
        <Sun className="size-4 opacity-50" />
      </Button>
    )
  }

  return (
    <Button
      aria-label={t("common.theme")}
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </Button>
  )
}
