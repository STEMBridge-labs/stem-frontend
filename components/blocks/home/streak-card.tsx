interface StreakCardProps {
  days: number;
  longestStreak: number;
}

export function StreakCard({ days, longestStreak }: StreakCardProps) {
  return (
    <div className="flex flex-col gap-1 justify-between rounded-2xl bg-hero-foreground/10 p-4 text-hero-foreground">
      <span className="text-sm font-bold text-warning">{days} Day Streak</span>
      <div>
        <span className="text-sm font-semibold">On a Roll!</span>
        <p className="text-xs text-hero-foreground/70">
          Your Longest Streak is {longestStreak} days. Keep your streak and gain
          30XP per day
        </p>
      </div>
    </div>
  );
}
