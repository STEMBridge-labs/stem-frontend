"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BurgerMenu } from "@/components/layout/burger-menu"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const APP_LINKS = [
  { label: "Home", href: "/dashboard" },
  { label: "Learn", href: "/dashboard/learn" },
  { label: "Math Solver", href: "/dashboard/solver" },
  { label: "Achievements", href: "/dashboard/achievements" },
]

const MARKETING_LINKS = [
  { label: "Modules", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

const MARKETING_CTA = [
  { label: "Get Started", href: "/dashboard" },
  { label: "I already have an account", href: "/login" },
]

interface TopBarProps {
  variant?: "marketing" | "app"
}

export function TopBar({ variant = "app" }: TopBarProps) {
  const isMarketing = variant === "marketing"
  const links = isMarketing ? MARKETING_LINKS : APP_LINKS
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href={isMarketing ? "/" : "/dashboard"}
          className="text-xl font-extrabold text-primary"
        >
          STEMBridge
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isAppActive =
              !isMarketing && (link.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(link.href))

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isMarketing
                    ? "text-foreground hover:text-primary"
                    : isAppActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {isMarketing ? (
          <div className="hidden items-center gap-3 md:flex">
            <Button render={<Link href="/login" />} nativeButton={false} variant="outline">
              Log In
            </Button>
            <Button render={<Link href="/dashboard" />} nativeButton={false}>
              Get Started
            </Button>
          </div>
        ) : (
          <Avatar initial="E" className="hidden size-9 text-sm md:flex" />
        )}

        <div className="md:hidden">
          <BurgerMenu links={links} cta={isMarketing ? MARKETING_CTA : undefined} />
        </div>
      </div>
    </header>
  )
}
