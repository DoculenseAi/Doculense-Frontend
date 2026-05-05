"use client"

import { WandSparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { DocumentItem, Project } from "@/lib/types"
import { useDictionary } from "@/hooks/use-dictionary"

import { ContextDocumentPicker } from "./context-document-picker"
import { DocumentTypeSelector } from "./document-type-selector"

export function GenerationForm({
  documents,
  projects,
}: {
  documents: DocumentItem[]
  projects: Project[]
}) {
  const { t } = useDictionary()

  return (
    <form className="space-y-6">
      <div className="flex items-center gap-2 text-sm">
        {[t("generation.select_type"), t("generation.configure"), t("generation.generate")].map(
          (step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span className="hidden text-muted-foreground sm:inline">{step}</span>
            </div>
          )
        )}
      </div>
      <div className="space-y-3">
        <Label>{t("generation.select_type")}</Label>
        <DocumentTypeSelector />
      </div>
      <div className="grid gap-3">
        <Label>{t("generation.context")}</Label>
        <Select defaultValue={projects[0]?.id}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                {project.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ContextDocumentPicker documents={documents} />
      <div className="grid gap-3">
        <Label>{t("generation.configure")}</Label>
        <Textarea
          rows={5}
          placeholder={t("generation.instructions_placeholder")}
        />
      </div>
      <Button type="button" className="gap-2">
        <WandSparkles className="size-4" />
        {t("generation.generate")}
      </Button>
    </form>
  )
}
