import { getDictionary } from "@/app/[lang]/dictionaries"
import { PageHeader } from "@/components/layout/page-header"
import { ReviewCard } from "@/components/reviews/review-card"
import { getReviews } from "@/lib/api"

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const reviews = await getReviews()

  return (
    <>
      <PageHeader
        title={dictionary["review.title"]}
        description={dictionary["review.subtitle"]}
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            dictionary={dictionary}
            lang={lang}
            review={review}
          />
        ))}
      </section>
    </>
  )
}
