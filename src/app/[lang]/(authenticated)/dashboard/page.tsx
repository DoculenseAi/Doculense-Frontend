import Link from "next/link"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { StatCard } from "@/components/dashboard/stat-card"
import { PageHeader } from "@/components/layout/page-header"
import { ProjectCard } from "@/components/projects/project-card"
import { Button } from "@/components/ui/button"
import { getDashboardData } from "@/lib/api"
import { localizedPath, t } from "@/lib/i18n"

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const data = await getDashboardData()

  return (
    <>
      <PageHeader
        title={dictionary["dashboard.title"]}
        description={t(dictionary, "dashboard.welcome", {
          name: data.user.name,
        })}
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((stat) => (
          <StatCard key={stat.labelKey} dictionary={dictionary} stat={stat} />
        ))}
      </section>
      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">
              {dictionary["dashboard.recent_projects"]}
            </h2>
            <Button asChild variant="ghost">
              <Link href={localizedPath(lang, "/projects")}>
                {dictionary["common.view_all"]}
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.projects.map((project) => (
              <ProjectCard
                key={project.id}
                dictionary={dictionary}
                lang={lang}
                project={project}
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <QuickActions title={dictionary["dashboard.quick_actions"]} />
          <ActivityFeed
            activity={data.activity}
            dictionary={dictionary}
            title={dictionary["dashboard.activity"]}
          />
        </div>
      </section>
    </>
  )
}
