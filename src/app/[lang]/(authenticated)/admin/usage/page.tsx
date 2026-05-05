import { getDictionary } from "@/app/[lang]/dictionaries"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { getAdminUsage } from "@/lib/api"

export default async function AdminUsagePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const usage = await getAdminUsage()
  const metrics = [
    { label: dictionary["admin.metric.credits"], value: usage.creditsUsed },
    { label: dictionary["admin.metric.api"], value: usage.apiCalls },
    { label: dictionary["admin.metric.storage"], value: `${usage.storageGb} GB` },
    { label: dictionary["admin.metric.users"], value: usage.activeUsers },
  ]

  return (
    <>
      <PageHeader
        title={dictionary["admin.usage.title"]}
        description={dictionary["admin.usage.subtitle"]}
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="bg-surface-1">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <Card className="mt-6 bg-surface-1">
        <CardContent className="p-6">
          <div className="flex h-56 items-end gap-3">
            {usage.series.map((value, index) => (
              <div
                key={index}
                className="flex flex-1 items-end rounded-md bg-primary/10"
              >
                <div
                  className="w-full rounded-md bg-primary"
                  style={{ height: `${value}%` }}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
