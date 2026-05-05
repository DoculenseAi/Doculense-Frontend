import { Progress } from "@/components/ui/progress"

export function UploadProgress({ value }: { value: number }) {
  return <Progress value={value} className="h-2" />
}
