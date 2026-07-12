interface AchievementsHeaderProps {
  totalXp: number
  dayStreak: number
  badgeCount: number
}

export function AchievementsHeader({ totalXp, dayStreak, badgeCount }: AchievementsHeaderProps) {
  const stats = [
    { label: "Total XP", value: totalXp },
    { label: "Day Streak", value: dayStreak },
    { label: "Badges", value: badgeCount },
  ]

  return (
    <section className="mx-4 flex flex-col gap-6 rounded-3xl bg-primary px-4 pt-6 pb-8 text-primary-foreground md:px-8 md:pt-8">
      <div>
        <h1 className="text-2xl font-extrabold sm:text-3xl">Your Achievements</h1>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Keep Learning to Unlock more Badges
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-primary-foreground/15 py-4 text-center"
          >
            <div className="text-2xl font-extrabold sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs text-primary-foreground/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
