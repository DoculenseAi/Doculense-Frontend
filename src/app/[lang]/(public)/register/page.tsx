import { AuthForm } from "@/components/shared/auth-form"

export default function RegisterPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-16">
      <AuthForm mode="register" />
    </main>
  )
}
