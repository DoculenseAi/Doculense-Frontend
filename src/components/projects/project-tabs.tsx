"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDictionary } from "@/hooks/use-dictionary"

export function ProjectTabs({
  activity,
  documents,
  generated,
}: {
  activity: React.ReactNode
  documents: React.ReactNode
  generated: React.ReactNode
}) {
  const { t } = useDictionary()

  return (
    <Tabs defaultValue="documents" className="space-y-5">
      <TabsList>
        <TabsTrigger value="documents">{t("project.documents_tab")}</TabsTrigger>
        <TabsTrigger value="generated">{t("project.generated_tab")}</TabsTrigger>
        <TabsTrigger value="activity">{t("project.activity_tab")}</TabsTrigger>
      </TabsList>
      <TabsContent value="documents">{documents}</TabsContent>
      <TabsContent value="generated">{generated}</TabsContent>
      <TabsContent value="activity">{activity}</TabsContent>
    </Tabs>
  )
}
