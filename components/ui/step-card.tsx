import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const ACCENTS = [
  { border: "border-warning", badge: "bg-warning text-warning-foreground" },
  { border: "border-accent", badge: "bg-accent text-accent-foreground" },
  { border: "border-muted-foreground/40", badge: "bg-muted-foreground/70 text-background" },
] as const

interface StepCardProps {
  index: number
  title: string
  description: string
  result: ReactNode
  className?: string
}

export function StepCard({ index, title, description, result, className }: StepCardProps) {
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <div
      className={cn(
        "flex gap-3 rounded-md border-l-4 bg-muted p-4",
        accent.border,
        className
      )}
    >
      <div
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
          accent.badge
        )}
      >
        {index + 1}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-base font-semibold text-foreground">{title}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="text-lg font-semibold">{result}</div>
      </div>
    </div>
  )
}
