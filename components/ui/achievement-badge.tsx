import Image from "next/image"
import { cn } from "@/lib/utils"

interface AchievementBadgeProps {
  title: string
  description: string
  icon: string
  earned?: boolean
  isNew?: boolean
  className?: string
}

export function AchievementBadge({
  title,
  description,
  icon,
  earned = true,
  isNew = false,
  className,
}: AchievementBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-2 rounded-xl bg-muted p-4 text-center",
        !earned && "opacity-50",
        className
      )}
    >
      {isNew && (
        <span className="absolute top-2 right-2 rounded-full bg-destructive px-2 py-0.5 text-[0.65rem] font-bold text-destructive-foreground">
          NEW!
        </span>
      )}
      <div className="flex size-16 items-center justify-center rounded-lg bg-card">
        <Image src={icon} alt="" width={48} height={48} className="size-12 object-contain" />
      </div>
      <div className="text-sm font-semibold text-foreground">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  )
}
