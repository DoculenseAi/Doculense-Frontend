import { CloudUpload } from "lucide-react"

import { EmptyState } from "@/components/shared/empty-state"

export function ProjectEmptyState({
  description,
  title,
}: {
  description: string
  title: string
}) {
  return <EmptyState description={description} icon={CloudUpload} title={title} />
}
