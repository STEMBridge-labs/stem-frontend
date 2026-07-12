import { cn } from "@/lib/utils"

interface AvatarProps {
  initial: string
  className?: string
}

export function Avatar({ initial, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground",
        className
      )}
    >
      {initial}
    </div>
  )
}
