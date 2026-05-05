import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { localizedPath } from "@/lib/i18n"
import type { Dictionary, Review } from "@/lib/types"

const statusKey = {
  pending: "review.pending",
  approved: "review.approved",
  changes: "review.changes",
}

export function ReviewCard({
  dictionary,
  lang,
  review,
}: {
  dictionary: Dictionary
  lang: string
  review: Review
}) {
  return (
    <Link href={localizedPath(lang, `/reviews/${review.id}`)}>
      <Card className="bg-surface-1 transition hover:bg-surface-2">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold">{review.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {review.reviewer}
              </p>
            </div>
            <Badge variant="secondary">{dictionary[statusKey[review.status]]}</Badge>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
            }).format(new Date(review.dueAt))}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
