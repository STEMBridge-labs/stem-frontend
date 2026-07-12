import { TopBar } from "@/components/layout/top-bar"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar variant="app" />
      <main className="mx-auto w-full max-w-5xl flex-1 pt-4 pb-20 md:pb-8">{children}</main>
      <BottomTabBar />
    </div>
  )
}
