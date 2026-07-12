import Image from "next/image"
import Link from "next/link"
import stemSmall from "@/public/assets/mascot-stem-small.svg"

const LINKS = [
  { text: "Privacy Policy", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Modules", href: "#" },
  { text: "Partners", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-6 bg-muted px-4 py-10 text-center md:py-14">
      <div className="flex items-center gap-2">
        <Image src={stemSmall} alt="" className="size-8" />
        <span className="text-lg font-extrabold text-primary">STEMBridge</span>
      </div>

      <nav className="flex flex-col gap-2 sm:flex-row sm:gap-6">
        {LINKS.map((link) => (
          <Link key={link.text} href={link.href} className="text-sm text-muted-foreground">
            {link.text}
          </Link>
        ))}
      </nav>

      <p className="text-xs text-muted-foreground">2026 STEMBridge. All Rights Reserved</p>
    </footer>
  )
}
