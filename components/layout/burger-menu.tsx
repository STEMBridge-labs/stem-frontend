"use client"

import Link from "next/link"
import Image from "next/image"
import burgerIcon from "@/public/assets/icon-burger.svg"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface BurgerMenuLink {
  label: string
  href: string
}

interface BurgerMenuProps {
  links: BurgerMenuLink[]
  cta?: BurgerMenuLink[]
}

export function BurgerMenu({ links, cta }: BurgerMenuProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open menu" />
        }
      >
        <Image src={burgerIcon} alt="" aria-hidden="true" className="size-5" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>STEMBridge</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {cta && cta.length > 0 && (
          <div className="mt-auto flex flex-col gap-2 p-4">
            {cta.map((item, i) => (
              <Button
                key={item.label}
                render={<Link href={item.href} />}
                nativeButton={false}
                variant={i === 0 ? "default" : "outline"}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
