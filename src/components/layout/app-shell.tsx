import { getCurrentUser } from "@/lib/auth"

import { ShellClient } from "./shell-client"

export async function AppShell({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  return <ShellClient user={user}>{children}</ShellClient>
}
