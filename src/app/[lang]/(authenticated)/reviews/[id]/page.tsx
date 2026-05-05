import { getDictionary } from "@/app/[lang]/dictionaries"
import { DocumentMetadataPanel } from "@/components/documents/document-metadata-panel"
import { DocumentViewer } from "@/components/documents/document-viewer"
import { PageHeader } from "@/components/layout/page-header"
import { ApprovalActions } from "@/components/reviews/approval-actions"
import { CommentThread } from "@/components/reviews/comment-thread"
import { ReviewTimeline } from "@/components/reviews/review-timeline"
import { getDocument, getReview } from "@/lib/api"

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  const dictionary = await getDictionary(lang)
  const review = await getReview(id)
  const document = await getDocument(review.documentId)

  return (
    <>
      <PageHeader
        title={dictionary["review.detail.title"]}
        description={review.title}
        actions={<ApprovalActions />}
      />
      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <DocumentViewer document={document} />
        <div className="space-y-5">
          <DocumentMetadataPanel dictionary={dictionary} document={document} />
          <CommentThread />
          <ReviewTimeline
            dictionary={dictionary}
            title={dictionary["review.timeline"]}
          />
        </div>
      </section>
    </>
  )
}
