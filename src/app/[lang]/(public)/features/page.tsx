import { LockKeyhole, PanelsTopLeft, Workflow } from "lucide-react"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { Card, CardContent } from "@/components/ui/card"

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const items = [
    {
      title: dictionary["features.pipeline"],
      body: dictionary["landing.features.extract.body"],
      icon: Workflow,
    },
    {
      title: dictionary["features.viewer"],
      body: dictionary["document.viewer.empty"],
      icon: PanelsTopLeft,
    },
    {
      title: dictionary["features.security"],
      body: dictionary["admin.users.subtitle"],
      icon: LockKeyhole,
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold">{dictionary["features.title"]}</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          {dictionary["features.subtitle"]}
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <Card key={item.title} className="bg-surface-1">
              <CardContent className="p-6">
                <Icon className="size-8 text-primary" />
                <h2 className="mt-6 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </main>
  )
}
