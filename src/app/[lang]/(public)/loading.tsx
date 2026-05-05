import { Skeleton } from "@/components/ui/skeleton"

export default function PublicLoading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="mt-5 h-6 w-1/2" />
      <Skeleton className="mt-10 h-[360px] rounded-lg" />
    </main>
  )
}
