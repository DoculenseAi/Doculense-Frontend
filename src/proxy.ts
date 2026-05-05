import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, isLocale } from "@/lib/i18n"

const PUBLIC_FILE = /\.(.*)$/

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const [, maybeLocale] = pathname.split("/")

  if (isLocale(maybeLocale)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
}
