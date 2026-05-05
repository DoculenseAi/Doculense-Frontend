"use client"

import { Languages } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { localeNames, stripLocale } from "@/lib/i18n"
import { supportedLocales, type Locale } from "@/lib/types"
import { useDictionary } from "@/hooks/use-dictionary"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const { lang, t } = useDictionary()
  const pathWithoutLocale = stripLocale(pathname)

  function switchLocale(nextLocale: Locale) {
    router.push(`/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={t("common.language")}
          className="gap-1.5 px-2"
          variant="ghost"
        >
          <Languages />
          <span className="hidden text-xs font-semibold sm:inline">
            {localeNames[lang].short}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {supportedLocales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={locale === lang ? "text-primary" : undefined}
          >
            <span className="w-8 text-xs font-semibold">
              {localeNames[locale].short}
            </span>
            <span>{localeNames[locale].nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
