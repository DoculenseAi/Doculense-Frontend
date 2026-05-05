# DocuLense.AI — Architecture Quick Reference

## Tech Stack
- **Framework**: Next.js 16.2.4 (App Router) + React 19.2.4
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 4.x
- **UI Library**: shadcn/ui (copy-paste components)
- **Icons**: Lucide React
- **Animations**: Framer Motion (minimal, max 200ms)
- **Validation**: Zod
- **Auth**: jose (JWT session management)
- **Hosting**: Vercel
- **API**: api.doculens.ai
- **File Storage**: Cloudflare R2 (direct URL loading, no proxy)

## Next.js 16 Key Differences
- Uses `proxy.ts` instead of `middleware.ts` for request interception
- Uses `PageProps<'/route'>` and `LayoutProps<'/route'>` for typed params
- `params` is a `Promise` — must `await params` before accessing values
- `cookies()` returns a Promise — must `await cookies()`
- React Compiler is enabled (`reactCompiler: true` in next.config.ts)
- Use `'use client'` directive only where interactivity is needed

## Route Groups
- `(public)` — Landing, Features, Pricing, Login, Register (no sidebar)
- `(authenticated)` — Dashboard, Projects, Documents, etc. (sidebar + topbar)

## i18n Strategy
- `[lang]` dynamic segment at app root
- Server-side dictionary loading via dynamic imports
- Client components use `DictionaryProvider` context + `useDictionary()` hook
- Translation files: `src/dictionaries/{en,ar}.json`
- Flat dot-notation keys: `"nav.dashboard": "Dashboard"`

## API Integration Pattern
- Server Components: Direct `fetch()` with auth token from cookies
- Client Components: SWR for data fetching
- Mutations: Server Actions → `apiClient()` → `revalidatePath()`
- File uploads: Client → presigned URL from API → direct PUT to R2

## User Roles (affects UI rendering)
1. `temporary` — Free user, limited credits, upsell prompts
2. `individual` — Paid user, full features, no team
3. `enterprise_admin` — Org owner, admin panel access
4. `enterprise_user` — Works under enterprise, role-restricted
