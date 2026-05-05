import { AlertTriangle, Database, KeyRound, Lock, UserCog } from "lucide-react"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { PageHeader } from "@/components/layout/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSuperadminCommandCentre } from "@/lib/api"

const healthClass = {
  healthy: "text-success",
  watch: "text-warning",
  blocked: "text-destructive",
}

const severityClass = {
  low: "text-info",
  medium: "text-warning",
  high: "text-destructive",
}

export default async function SuperadminCommandCentrePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const commandCentre = await getSuperadminCommandCentre()

  return (
    <>
      <PageHeader
        title={dictionary["superadmin.title"]}
        description={dictionary["superadmin.subtitle"]}
        eyebrow={dictionary["nav.superadmin"]}
        actions={
          <>
            <Button variant="secondary">{dictionary["superadmin.controls.audit"]}</Button>
            <Button>{dictionary["superadmin.controls.rotate"]}</Button>
          </>
        }
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {commandCentre.metrics.map((metric) => (
          <Card key={metric.labelKey} className="bg-surface-1">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">
                {dictionary[metric.labelKey]}
              </p>
              <p className="mt-3 text-2xl font-semibold">{metric.value}</p>
              <p className="mt-3 text-xs font-medium text-primary">
                {metric.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <Card className="bg-surface-1">
            <CardHeader>
              <CardTitle>{dictionary["superadmin.tenants"]}</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                actionsLabel={dictionary["common.actions"]}
                editLabel={dictionary["common.edit"]}
                openLabel={dictionary["common.open"]}
                rows={commandCentre.tenants}
                columns={[
                  {
                    key: "tenant",
                    label: dictionary["superadmin.tenant"],
                    render: (tenant) => (
                      <div>
                        <p className="font-medium">{tenant.name}</p>
                        <p className="text-xs text-muted-foreground">{tenant.id}</p>
                      </div>
                    ),
                  },
                  {
                    key: "plan",
                    label: dictionary["superadmin.plan"],
                    render: (tenant) => (
                      <Badge variant="secondary">
                        {dictionary[`tenant.plan.${tenant.plan}`] ?? tenant.plan}
                      </Badge>
                    ),
                  },
                  {
                    key: "health",
                    label: dictionary["superadmin.health"],
                    render: (tenant) => (
                      <span className={healthClass[tenant.status]}>
                        {dictionary[`tenant.status.${tenant.status}`] ??
                          tenant.status}
                      </span>
                    ),
                  },
                  {
                    key: "users",
                    label: dictionary["admin.metric.users"],
                    render: (tenant) => tenant.users,
                  },
                  {
                    key: "credits",
                    label: dictionary["superadmin.metric.credits"],
                    render: (tenant) => tenant.monthlyCredits.toLocaleString("en"),
                  },
                ]}
              />
            </CardContent>
          </Card>

          <Card className="bg-surface-1">
            <CardHeader>
              <CardTitle>{dictionary["superadmin.incidents"]}</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                actionsLabel={dictionary["common.actions"]}
                editLabel={dictionary["common.edit"]}
                openLabel={dictionary["common.open"]}
                rows={commandCentre.incidents}
                columns={[
                  {
                    key: "service",
                    label: dictionary["superadmin.service"],
                    render: (incident) => incident.service,
                  },
                  {
                    key: "severity",
                    label: dictionary["superadmin.severity"],
                    render: (incident) => (
                      <span className={severityClass[incident.severity]}>
                        {dictionary[`incident.severity.${incident.severity}`] ??
                          incident.severity}
                      </span>
                    ),
                  },
                  {
                    key: "status",
                    label: dictionary["document.status"],
                    render: (incident) => (
                      <Badge variant="secondary">
                        {dictionary[`incident.status.${incident.status}`] ??
                          incident.status}
                      </Badge>
                    ),
                  },
                  {
                    key: "updated",
                    label: dictionary["document.updated"],
                    render: (incident) =>
                      new Intl.DateTimeFormat("en", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      }).format(new Date(incident.updatedAt)),
                  },
                ]}
              />
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card className="bg-surface-1">
            <CardHeader>
              <CardTitle>{dictionary["superadmin.guardrails"]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  label: dictionary["superadmin.controls.freeze"],
                  icon: Lock,
                  variant: "destructive" as const,
                },
                {
                  label: dictionary["superadmin.controls.impersonate"],
                  icon: UserCog,
                  variant: "secondary" as const,
                },
                {
                  label: dictionary["superadmin.controls.rotate"],
                  icon: KeyRound,
                  variant: "secondary" as const,
                },
                {
                  label: dictionary["superadmin.controls.audit"],
                  icon: Database,
                  variant: "secondary" as const,
                },
              ].map((control) => {
                const Icon = control.icon

                return (
                  <Button
                    key={control.label}
                    className="h-11 w-full justify-start gap-2"
                    variant={control.variant}
                  >
                    <Icon className="size-4" />
                    {control.label}
                  </Button>
                )
              })}
            </CardContent>
          </Card>

          <Card className="border-warning/40 bg-warning-bg/30">
            <CardContent className="flex gap-3 p-5">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning" />
              <div>
                <h2 className="text-sm font-semibold">
                  {dictionary["superadmin.metric.incidents"]}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {dictionary["superadmin.guardrails.note"]}
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </>
  )
}
