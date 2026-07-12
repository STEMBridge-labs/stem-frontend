import { AchievementBadge } from "@/components/ui/achievement-badge"

export interface BadgeItem {
  title: string
  description: string
  icon: string
  isNew?: boolean
}

interface BadgeGridProps {
  heading: string
  badges: BadgeItem[]
  earned: boolean
}

export function BadgeGrid({ heading, badges, earned }: BadgeGridProps) {
  return (
    <section className="flex flex-col gap-4 px-4">
      <span className="text-xs font-bold tracking-widest text-muted-foreground">{heading}</span>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {badges.map((badge) => (
          <AchievementBadge
            key={badge.title + badge.description}
            title={badge.title}
            description={badge.description}
            icon={badge.icon}
            earned={earned}
            isNew={badge.isNew}
          />
        ))}
      </div>
    </section>
  )
}
