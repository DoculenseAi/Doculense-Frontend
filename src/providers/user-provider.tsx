"use client"

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from "react"

import type { User } from "@/lib/types"

const UserContext = createContext<User | null>(null)

export function UserProvider({
  children,
  user,
}: {
  children: ReactNode
  user: User
}) {
  const value = useMemo(() => user, [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const user = useContext(UserContext)

  if (!user) {
    throw new Error("useUser must be used within UserProvider")
  }

  return user
}
