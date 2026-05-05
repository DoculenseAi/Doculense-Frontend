import "server-only"

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"

import { demoUser } from "@/lib/mock-data"
import type { User, UserRole } from "@/lib/types"

const sessionCookie = "dl_session"
const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET ?? "doculense-local-development-secret"
)

type SessionPayload = {
  sub: string
  name: string
  email: string
  role: UserRole
  credits: number
  organization?: string
}

export async function getCurrentUser(): Promise<User> {
  const store = await cookies()
  const token = store.get(sessionCookie)?.value

  if (!token) {
    return demoUser
  }

  try {
    const { payload } = await jwtVerify<SessionPayload>(token, secret)

    return {
      id: payload.sub ?? demoUser.id,
      name: payload.name ?? demoUser.name,
      email: payload.email ?? demoUser.email,
      role: payload.role ?? demoUser.role,
      credits: payload.credits ?? demoUser.credits,
      organization: payload.organization,
    }
  } catch {
    return demoUser
  }
}

export async function createSession(user: User = demoUser) {
  const token = await new SignJWT({
    name: user.name,
    email: user.email,
    role: user.role,
    credits: user.credits,
    organization: user.organization,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)

  const store = await cookies()
  store.set(sessionCookie, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function clearSession() {
  const store = await cookies()
  store.delete(sessionCookie)
}

export function canAccess(
  role: UserRole,
  area: "reviews" | "team" | "admin" | "superadmin"
) {
  if (area === "superadmin") {
    return role === "superadmin"
  }

  if (area === "reviews") {
    return role !== "temporary"
  }

  if (area === "team" || area === "admin") {
    return role === "enterprise_admin" || role === "superadmin"
  }

  return true
}
