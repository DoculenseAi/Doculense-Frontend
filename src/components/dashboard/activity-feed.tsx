import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { t } from "@/lib/i18n"
import type { Activity, Dictionary } from "@/lib/types"

import { UserAvatar } from "../shared/user-avatar"

export function ActivityFeed({
  activity,
  dictionary,
  title,
}: {
  activity: Activity[]
  dictionary: Dictionary
  title: string
}) {
  return (
    <Card className="bg-surface-1">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-border-subtle">
        {activity.map((item) => (
          <div key={item.id} className="flex items-center gap-3 py-3">
            <UserAvatar name={item.actor} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm">
                <span className="font-medium">{item.actor}</span>{" "}
                <span className="text-muted-foreground">
                  {t(dictionary, item.actionKey)}
                </span>{" "}
                <span>{item.target}</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                }).format(new Date(item.createdAt))}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
