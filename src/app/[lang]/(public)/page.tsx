import {
  CheckCircle2,
  FileSearch,
  GitPullRequestArrow,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { localizedPath } from "@/lib/i18n"

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const features = [
    {
      title: dictionary["landing.features.extract.title"],
      body: dictionary["landing.features.extract.body"],
      icon: FileSearch,
    },
    {
      title: dictionary["landing.features.generate.title"],
      body: dictionary["landing.features.generate.body"],
      icon: Sparkles,
    },
    {
      title: dictionary["landing.features.approve.title"],
      body: dictionary["landing.features.approve.body"],
      icon: GitPullRequestArrow,
    },
  ]

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col justify-center px-4 pb-20 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary">
              {dictionary["app.tagline"]}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {dictionary["landing.hero.title"]}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              {dictionary["landing.hero.subtitle"]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={localizedPath(lang, "/register")}>
                  {dictionary["landing.cta"]}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={localizedPath(lang, "/features")}>
                  {dictionary["landing.secondary_cta"]}
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 rounded-lg border border-border bg-surface-1 p-3 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-md border border-border bg-background p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Northwind M&A Review
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Master Services Agreement.pdf
                    </p>
                  </div>
                  <span className="rounded-full bg-success-bg px-2 py-1 text-xs text-success">
                    {dictionary["document.ready"]}
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-4/5 rounded bg-surface-2" />
                  <div className="h-3 rounded bg-surface-2" />
                  <div className="h-24 rounded bg-surface-2" />
                  <div className="h-3 w-2/3 rounded bg-surface-2" />
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  dictionary["generation.type.summary"],
                  dictionary["review.pending"],
                  dictionary["dashboard.stats.credits"],
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-md border border-border bg-background p-4"
                  >
                    <CheckCircle2 className="size-5 text-primary" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item}</p>
                      <p className="text-xs text-muted-foreground">
                        {index + 1} / 3
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">
            {dictionary["landing.features.title"]}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card key={feature.title} className="bg-surface-1">
                <CardContent className="p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.body}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
