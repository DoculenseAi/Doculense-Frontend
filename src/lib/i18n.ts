import {
  type Dictionary,
  type Direction,
  type Locale,
  supportedLocales,
} from "@/lib/types"

export const defaultLocale: Locale = "en"

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr"
}

export const localeNames: Record<
  Locale,
  {
    short: string
    nativeName: string
  }
> = {
  en: { short: "EN", nativeName: "English" },
  ar: { short: "AR", nativeName: "العربية" },
  es: { short: "ES", nativeName: "Español" },
  fr: { short: "FR", nativeName: "Français" },
  hi: { short: "HI", nativeName: "हिन्दी" },
  "pt-BR": { short: "PT", nativeName: "Português (BR)" },
  "zh-CN": { short: "ZH", nativeName: "简体中文" },
}

export function t(
  dictionary: Dictionary,
  key: string,
  values?: Record<string, string | number>
) {
  let output = dictionary[key] ?? key

  if (!values) {
    return output
  }

  for (const [name, value] of Object.entries(values)) {
    output = output.replaceAll(`{${name}}`, String(value))
  }

  return output
}

export function localizedPath(locale: string, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `/${locale}${normalized === "/" ? "" : normalized}`
}

export function stripLocale(pathname: string) {
  const [, maybeLocale, ...rest] = pathname.split("/")

  if (maybeLocale && isLocale(maybeLocale)) {
    return `/${rest.join("/")}`.replace(/\/$/, "") || "/"
  }

  return pathname
}
