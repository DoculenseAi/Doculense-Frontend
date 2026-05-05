"use client"

import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export function SearchInput({
  label,
  placeholder,
}: {
  label: string
  placeholder: string
}) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input aria-label={label} className="h-10 ps-9" placeholder={placeholder} />
    </div>
  )
}
