"use client"

import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginAction, registerAction } from "@/lib/actions"
import { useDictionary } from "@/hooks/use-dictionary"

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const { lang, t } = useDictionary()
  const action = mode === "login" ? loginAction : registerAction
  const [state, formAction, pending] = useActionState(action, null)

  return (
    <Card className="w-full max-w-md bg-surface-1">
      <CardHeader>
        <CardTitle>
          {mode === "login" ? t("auth.login.title") : t("auth.register.title")}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {mode === "login"
            ? t("auth.login.description")
            : t("auth.register.description")}
        </p>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="lang" value={lang} />
          {mode === "register" ? (
            <>
              <div className="grid gap-2">
                <Label htmlFor="name">{t("auth.name")}</Label>
                <Input id="name" name="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">{t("auth.company")}</Label>
                <Input id="company" name="company" />
              </div>
            </>
          ) : null}
          <div className="grid gap-2">
            <Label htmlFor="email">{t("auth.email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue="demo@doculense.ai"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t("auth.password")}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              defaultValue="demo123"
              required
            />
          </div>
          {state?.error ? (
            <p className="text-sm text-destructive">{t(state.error)}</p>
          ) : null}
          <Button className="w-full" type="submit" disabled={pending}>
            {pending
              ? t("common.loading")
              : mode === "login"
                ? t("auth.submit.login")
                : t("auth.submit.register")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
