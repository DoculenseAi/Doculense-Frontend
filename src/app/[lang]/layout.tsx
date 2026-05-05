import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { notFound } from "next/navigation"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getDirection } from "@/lib/i18n"
import { supportedLocales, type Locale } from "@/lib/types"
import { DictionaryProvider } from "@/providers/dictionary-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import "../globals.css"
import { getDictionary, isLocale } from "./dictionaries"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return {
    title: {
      default: dictionary["app.name"],
      template: `%s | ${dictionary["app.name"]}`,
    },
    description: dictionary["app.tagline"],
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)
  const direction = getDirection(lang as Locale)

  return (
    <html
      lang={lang}
      dir={direction}
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <DictionaryProvider dictionary={dictionary} lang={lang as Locale}>
            <TooltipProvider delayDuration={150}>
              {children}
              <Toaster richColors closeButton position="bottom-right" />
            </TooltipProvider>
          </DictionaryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
