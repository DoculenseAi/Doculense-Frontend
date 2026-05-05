import { FileText } from "lucide-react"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { DocumentTable } from "@/components/documents/document-table"
import { UploadZone } from "@/components/documents/upload-zone"
import { PageHeader } from "@/components/layout/page-header"
import { ProjectEmptyState } from "@/components/projects/project-empty-state"
import { ProjectTabs } from "@/components/projects/project-tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  getGenerations,
  getProject,
  getProjectDocuments,
} from "@/lib/api"
import { activity } from "@/lib/mock-data"

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  const dictionary = await getDictionary(lang)
  const project = await getProject(id)
  const documents = await getProjectDocuments(project.id)
  const generations = await getGenerations(project.id)

  return (
    <>
      <PageHeader
        title={project.name}
        description={dictionary["project.detail.subtitle"]}
        actions={
          <>
            <Button>{dictionary["document.upload"]}</Button>
            <Button variant="secondary">{dictionary["generation.generate"]}</Button>
            <Button variant="ghost">{dictionary["document.share"]}</Button>
          </>
        }
      />
      <ProjectTabs
        documents={
          <div className="space-y-5">
            <UploadZone />
            {documents.length ? (
              <DocumentTable
                dictionary={dictionary}
                documents={documents}
                lang={lang}
              />
            ) : (
              <ProjectEmptyState
                title={dictionary["project.empty"]}
                description={dictionary["document.drag_drop"]}
              />
            )}
          </div>
        }
        generated={
          <div className="grid gap-4 md:grid-cols-2">
            {generations.map((generation) => (
              <Card key={generation.id} className="bg-surface-1">
                <CardContent className="flex gap-3 p-5">
                  <FileText className="size-5 text-primary" />
                  <div>
                    <h2 className="font-semibold">{generation.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {generation.excerpt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        }
        activity={
          <ActivityFeed
            activity={activity}
            dictionary={dictionary}
            title={dictionary["dashboard.activity"]}
          />
        }
      />
    </>
  )
}
