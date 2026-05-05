"use client"

import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createProjectAction } from "@/lib/actions"
import { useDictionary } from "@/hooks/use-dictionary"

export function CreateProjectDialog() {
  const { lang, t } = useDictionary()
  const [, formAction, pending] = useActionState(createProjectAction, null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t("project.create")}</Button>
      </DialogTrigger>
      <DialogContent>
        <form action={formAction}>
          <input type="hidden" name="lang" value={lang} />
          <DialogHeader>
            <DialogTitle>{t("project.create")}</DialogTitle>
            <DialogDescription>{t("project.subtitle")}</DialogDescription>
          </DialogHeader>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="project-name">{t("project.name")}</Label>
              <Input id="project-name" name="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="project-description">
                {t("project.description")}
              </Label>
              <Textarea id="project-description" name="description" />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit" disabled={pending}>
              {pending ? t("common.loading") : t("common.create")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
