import Link from "next/link"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { localizedPath } from "@/lib/i18n"

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const plans = [
    {
      name: dictionary["pricing.temporary"],
      price: dictionary["pricing.free"],
      features: [
        dictionary["pricing.feature.one_project"],
        dictionary["pricing.feature.three_credits"],
        dictionary["pricing.feature.pdf_upload"],
      ],
    },
    {
      name: dictionary["pricing.individual"],
      price: "$29",
      badge: dictionary["pricing.popular"],
      features: [
        dictionary["pricing.feature.unlimited_projects"],
        dictionary["pricing.feature.review_queue"],
        dictionary["pricing.feature.generation_history"],
      ],
    },
    {
      name: dictionary["pricing.enterprise"],
      price: dictionary["pricing.contact"],
      features: [
        dictionary["pricing.feature.team_roles"],
        dictionary["pricing.feature.admin_usage"],
        dictionary["pricing.feature.priority_processing"],
      ],
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold">{dictionary["pricing.title"]}</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          {dictionary["pricing.subtitle"]}
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl",
              plan.badge ? "ring-2 ring-primary" : "bg-surface-1"
            )}
          >
            {plan.badge && (
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl" />
            )}
            <CardContent className="p-7">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                {plan.badge ? (
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
              </div>
              <Button asChild className="mt-8 w-full">
                <Link href={localizedPath(lang, "/register")}>
                  {dictionary["landing.cta"]}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
