import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { t, localizedPath } from "@/lib/i18n"
import type { Dictionary, Project } from "@/lib/types"

export function ProjectCard({
  dictionary,
  lang,
  project,
}: {
  dictionary: Dictionary
  lang: string
  project: Project
}) {
  return (
    <Link href={localizedPath(lang, `/projects/${project.id}`)}>
      <Card className="h-full bg-surface-1 transition hover:-translate-y-px hover:bg-surface-2">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold">
                {project.name}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {dictionary[`project.description.${project.id}`] ??
                  project.description}
              </p>
            </div>
            <Badge variant="secondary">
              {dictionary[`project.status.${project.status}`] ?? project.status}
            </Badge>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span>
              {t(dictionary, "project.doc_count", {
                count: project.documentCount,
              })}
            </span>
            <span>
              {t(dictionary, "project.generated_count", {
                count: project.generatedCount,
              })}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
