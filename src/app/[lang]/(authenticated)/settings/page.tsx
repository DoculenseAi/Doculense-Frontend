import { getDictionary } from "@/app/[lang]/dictionaries"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCurrentUser } from "@/lib/auth"

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const user = await getCurrentUser()

  return (
    <>
      <PageHeader
        title={dictionary["settings.title"]}
        description={dictionary["settings.subtitle"]}
      />
      <Tabs defaultValue="profile" className="space-y-5">
        <TabsList>
          <TabsTrigger value="profile">{dictionary["settings.profile"]}</TabsTrigger>
          <TabsTrigger value="preferences">
            {dictionary["settings.preferences"]}
          </TabsTrigger>
          <TabsTrigger value="billing">{dictionary["settings.billing"]}</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card className="max-w-2xl bg-surface-1">
            <CardHeader>
              <CardTitle>{dictionary["settings.profile"]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>{dictionary["auth.name"]}</Label>
                <Input defaultValue={user.name} />
              </div>
              <div className="grid gap-2">
                <Label>{dictionary["auth.email"]}</Label>
                <Input defaultValue={user.email} />
              </div>
              <Button>{dictionary["common.save"]}</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="preferences">
          <Card className="max-w-2xl bg-surface-1">
            <CardHeader>
              <CardTitle>{dictionary["settings.preferences"]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>{dictionary["common.language"]}</p>
              <p>{dictionary["common.theme"]}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card className="max-w-2xl bg-surface-1">
            <CardHeader>
              <CardTitle>{dictionary["settings.billing"]}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {dictionary["pricing.enterprise"]}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
