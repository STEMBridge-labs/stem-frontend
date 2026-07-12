"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Divide, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const TABS = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Learn", href: "/dashboard/learn", icon: BookOpen },
  { label: "Solver", href: "/dashboard/solver", icon: Divide },
  { label: "Achievements", href: "/dashboard/achievements", icon: Award },
]

export function BottomTabBar() {
  const pathname = usePathname()

  return (
    <nav className="sticky bottom-0 z-40 flex items-center justify-around border-t border-border bg-background py-2 md:hidden">
      {TABS.map(({ label, href, icon: Icon }) => {
        const active =
          href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(`${href}/`) || pathname === href

        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors",
              active && "bg-primary/10 text-primary"
            )}
          >
            <Icon aria-hidden="true" />
          </Link>
        )
      })}
    </nav>
  )
}
