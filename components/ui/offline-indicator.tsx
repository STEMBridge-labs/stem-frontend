import { Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

export function OfflineIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success",
        className
      )}
    >
      <Wifi aria-hidden="true" className="size-3.5" />
      Online
    </div>
  )
}
