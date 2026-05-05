"use client"

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from "react"

import { t } from "@/lib/i18n"
import type { Dictionary, Locale } from "@/lib/types"

type DictionaryContextValue = {
  dictionary: Dictionary
  lang: Locale
  t: (key: string, values?: Record<string, string | number>) => string
}

const DictionaryContext = createContext<DictionaryContextValue | null>(null)

export function DictionaryProvider({
  children,
  dictionary,
  lang,
}: {
  children: ReactNode
  dictionary: Dictionary
  lang: Locale
}) {
  const value = useMemo(
    () => ({
      dictionary,
      lang,
      t: (key: string, values?: Record<string, string | number>) =>
        t(dictionary, key, values),
    }),
    [dictionary, lang]
  )

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionaryContext() {
  const context = useContext(DictionaryContext)

  if (!context) {
    throw new Error("useDictionaryContext must be used within DictionaryProvider")
  }

  return context
}
