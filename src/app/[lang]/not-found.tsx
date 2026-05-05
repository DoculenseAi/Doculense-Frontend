import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="max-w-md text-center">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The route you opened does not exist in this workspace.
        </p>
        <Button asChild className="mt-6">
          <Link href="/en/dashboard">Back to dashboard</Link>
        </Button>
      </section>
    </main>
  )
}
