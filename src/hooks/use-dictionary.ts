"use client"

import { useDictionaryContext } from "@/providers/dictionary-provider"

export function useDictionary() {
  return useDictionaryContext()
}
