"use server"

import { redirect } from "next/navigation"
import { z } from "zod"

import { createSession } from "@/lib/auth"
import { defaultLocale, isLocale } from "@/lib/i18n"

export type ActionState = {
  error?: string
}

const authSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

const projectSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
})

function getLocale(formData: FormData) {
  const lang = String(formData.get("lang") ?? defaultLocale)
  return isLocale(lang) ? lang : defaultLocale
}

export async function loginAction(
  _state: ActionState | null,
  formData: FormData
): Promise<ActionState | never> {
  const parsed = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!parsed.success) {
    return { error: "error.validation" }
  }

  await createSession()
  redirect(`/${getLocale(formData)}/dashboard`)
}

export async function registerAction(
  _state: ActionState | null,
  formData: FormData
): Promise<ActionState | never> {
  const parsed = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!parsed.success) {
    return { error: "error.validation" }
  }

  await createSession()
  redirect(`/${getLocale(formData)}/dashboard`)
}

export async function createProjectAction(
  _state: ActionState | null,
  formData: FormData
): Promise<ActionState | never> {
  const parsed = projectSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  })

  if (!parsed.success) {
    return { error: "error.validation" }
  }

  const lang = getLocale(formData)
  redirect(`/${lang}/projects/northwind-ma`)
}
