import { AlertCircle, CheckCircle2, Clock, Loader2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { t } from "@/lib/i18n"
import type { Dictionary, DocumentStatus } from "@/lib/types"

const statusConfig = {
  ready: { key: "document.ready", icon: CheckCircle2, className: "text-success" },
  processing: {
    key: "document.processing",
    icon: Loader2,
    className: "text-warning",
  },
  review: { key: "document.review", icon: Clock, className: "text-info" },
  error: { key: "document.error", icon: AlertCircle, className: "text-destructive" },
}

export function DocumentStatusBadge({
  dictionary,
  status,
}: {
  dictionary: Dictionary
  status: DocumentStatus
}) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Badge className="gap-1.5" variant="secondary">
      <Icon className={`size-3.5 ${config.className}`} />
      {t(dictionary, config.key)}
    </Badge>
  )
}
