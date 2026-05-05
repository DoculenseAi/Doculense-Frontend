import { getDictionary } from "@/app/[lang]/dictionaries"
import { GenerationPreview } from "@/components/generation/generation-preview"
import { PageHeader } from "@/components/layout/page-header"
import { ApprovalActions } from "@/components/reviews/approval-actions"
import { Button } from "@/components/ui/button"
import { getGeneration } from "@/lib/api"

export default async function GenerationResultPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  const dictionary = await getDictionary(lang)
  const generation = await getGeneration(id)

  return (
    <>
      <PageHeader
        title={dictionary["generation.result.title"]}
        description={generation.title}
        actions={
          <>
            <Button variant="secondary">{dictionary["generation.edit"]}</Button>
            <Button variant="secondary">{dictionary["generation.download"]}</Button>
            <Button>{dictionary["generation.submit_review"]}</Button>
          </>
        }
      />
      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <GenerationPreview initialText={generation.excerpt} />
        <ApprovalActions />
      </section>
    </>
  )
}
