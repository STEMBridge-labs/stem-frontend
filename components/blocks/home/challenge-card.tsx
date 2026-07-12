interface ChallengeCardProps {
  title: string;
  xpReward: number;
  current: number;
  total: number;
}

export function ChallengeCard({
  title,
  xpReward,
  current,
  total,
}: ChallengeCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-hero-foreground/10 p-4 text-hero-foreground">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold">Challenges</span>
        <span className="text-xs font-semibold text-hero-foreground/80">
          Check all Challenges
        </span>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-hero-foreground/20 px-3 py-3">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-success">
            + {xpReward} XP
          </span>
          <span className="text-xs text-hero-foreground/70">{title}</span>
        </div>
        <span className="text-xs font-semibold text-hero-foreground/70">
          {current}/{total}
        </span>
      </div>
    </div>
  );
}
