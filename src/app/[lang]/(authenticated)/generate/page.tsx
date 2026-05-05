import { getDictionary } from "@/app/[lang]/dictionaries"
import { GenerationForm } from "@/components/generation/generation-form"
import { GenerationPreview } from "@/components/generation/generation-preview"
import { PageHeader } from "@/components/layout/page-header"
import { getDocuments, getProjects } from "@/lib/api"

export default async function GeneratePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const [projects, documents] = await Promise.all([getProjects(), getDocuments()])

  return (
    <>
      <PageHeader
        title={dictionary["generation.title"]}
        description={dictionary["generation.subtitle"]}
      />
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <GenerationForm documents={documents} projects={projects} />
        <GenerationPreview />
      </section>
    </>
  )
}
