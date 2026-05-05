import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Dictionary } from "@/lib/types"

export function ReviewTimeline({
  dictionary,
  title,
}: {
  dictionary: Dictionary
  title: string
}) {
  const events = [
    dictionary["review.timeline.submitted"],
    dictionary["review.timeline.assigned"],
    dictionary["review.timeline.commented"],
    dictionary["review.timeline.awaiting_decision"],
  ]

  return (
    <Card className="bg-surface-1">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event, index) => (
          <div key={event} className="flex gap-3 text-sm">
            <span className="mt-1 size-2 rounded-full bg-primary" />
            <div>
              <p className="font-medium">{event}</p>
              <p className="text-xs text-muted-foreground">
                {dictionary["common.step"]} {index + 1}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
