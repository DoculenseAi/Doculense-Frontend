import Link from "next/link"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { getDictionary } from "@/app/[lang]/dictionaries"
import { localizedPath } from "@/lib/i18n"

export default async function PublicLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href={localizedPath(lang, "/")}
            className="flex items-center gap-2 font-semibold"
          >
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground">
              DL
            </span>
            {dictionary["app.name"]}
          </Link>
          <nav className="ms-auto hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href={localizedPath(lang, "/features")}>
              {dictionary["nav.features"]}
            </Link>
            <Link href={localizedPath(lang, "/pricing")}>
              {dictionary["nav.pricing"]}
            </Link>
          </nav>
          <div className="ms-auto flex items-center gap-2 md:ms-0">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button asChild variant="ghost">
              <Link href={localizedPath(lang, "/login")}>
                {dictionary["nav.login"]}
              </Link>
            </Button>
            <Button asChild>
              <Link href={localizedPath(lang, "/register")}>
                {dictionary["nav.register"]}
              </Link>
            </Button>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border bg-surface-1">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            "landing.footer.product",
            "landing.footer.company",
            "landing.footer.resources",
            "landing.footer.legal",
          ].map((key) => (
            <div key={key}>
              <h2 className="text-sm font-semibold">{dictionary[key]}</h2>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p>{dictionary["nav.features"]}</p>
                <p>{dictionary["nav.pricing"]}</p>
                <p>{dictionary["nav.help"]}</p>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
