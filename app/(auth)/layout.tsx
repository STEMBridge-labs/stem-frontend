export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted px-4 py-12">
      {children}
    </main>
  )
}
