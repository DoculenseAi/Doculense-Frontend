import "server-only"

import { notFound } from "next/navigation"

import { isLocale } from "@/lib/i18n"
import type { Dictionary, Locale } from "@/lib/types"

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  hi: () => import("@/dictionaries/hi.json").then((module) => module.default),
  "pt-BR": () =>
    import("@/dictionaries/pt-BR.json").then((module) => module.default),
  "zh-CN": () =>
    import("@/dictionaries/zh-CN.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (!isLocale(locale)) {
    notFound()
  }

  return dictionaries[locale]()
}

export { isLocale }
