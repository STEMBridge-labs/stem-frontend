import { cn } from "@/lib/utils"

const WEEKDAYS = ["M", "Tu", "W", "Th", "F", "Sa", "Su"]

interface WeeklyStreakTrackerProps {
  completedDays: number
}

export function WeeklyStreakTracker({ completedDays }: WeeklyStreakTrackerProps) {
  return (
    <section className="flex flex-col gap-4">
      <span className="text-center text-xs font-bold tracking-widest text-muted-foreground">
        WEEKLY STREAK
      </span>
      <div className="overflow-x-auto">
        <div className="flex w-max min-w-full justify-center gap-2 px-4">
          {WEEKDAYS.map((day, index) => (
            <div
              key={day + index}
              className={cn(
                "flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full px-3 text-sm font-bold",
                index < completedDays
                  ? "bg-warning text-warning-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
