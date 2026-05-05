import { getDictionary } from "@/app/[lang]/dictionaries"
import { DocumentMetadataPanel } from "@/components/documents/document-metadata-panel"
import { DocumentViewer } from "@/components/documents/document-viewer"
import { PageHeader } from "@/components/layout/page-header"
import { ApprovalActions } from "@/components/reviews/approval-actions"
import { Button } from "@/components/ui/button"
import { getDocument } from "@/lib/api"

export default async function DocumentViewerPage({
  params,
}: {
  params: Promise<{ lang: string; id: string; docId: string }>
}) {
  const { lang, docId } = await params
  const dictionary = await getDictionary(lang)
  const document = await getDocument(docId)

  return (
    <>
      <PageHeader
        title={document.name}
        description={dictionary["document.viewer"]}
        actions={
          <>
            <Button variant="secondary">{dictionary["document.download"]}</Button>
            <Button variant="ghost">{dictionary["document.share"]}</Button>
          </>
        }
      />
      <section className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <DocumentViewer document={document} />
        <div className="space-y-5">
          <DocumentMetadataPanel dictionary={dictionary} document={document} />
          <ApprovalActions />
        </div>
      </section>
    </>
  )
}
