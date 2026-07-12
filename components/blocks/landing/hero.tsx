import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import stem from "@/public/assets/mascot-stem.svg"

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 pt-8 pb-12 text-center md:flex-row-reverse md:gap-12 md:pt-16 md:pb-20 md:text-left">
      <Image
        src={stem}
        alt="STEMBridge mascot"
        priority
        className="h-auto w-72 shrink-0 sm:w-80 md:w-96"
      />

      <div className="flex w-full flex-col items-center gap-8 md:items-start">
        <h1 className="text-balance text-3xl font-extrabold leading-tight md:text-5xl">
          Learn <span className="text-primary">Mathematics</span> in a simpler,
          more engaging, and enjoyable way!
        </h1>

        <div className="flex w-full max-w-xs flex-col gap-3 sm:flex-row md:w-auto">
          <Button render={<Link href="/dashboard" />} nativeButton={false} size="xl">
            Get Started
          </Button>
          <Button
            render={<Link href="/login" />}
            nativeButton={false}
            variant="outline"
            size="xl"
          >
            I already have an account
          </Button>
        </div>
      </div>
    </section>
  )
}
