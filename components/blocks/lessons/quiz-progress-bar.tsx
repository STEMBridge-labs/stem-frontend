import Link from "next/link"
import { X } from "lucide-react"
import { ProgressBar } from "@/components/ui/progress-bar"

interface QuizProgressBarProps {
  exitHref: string
  current: number
  total: number
}

export function QuizProgressBar({ exitHref, current, total }: QuizProgressBarProps) {
  return (
    <div className="flex items-center gap-4">
      <Link href={exitHref} aria-label="Exit quiz" className="text-foreground">
        <X className="size-6" />
      </Link>
      <ProgressBar value={(current / total) * 100} className="flex-1" />
    </div>
  )
}
