import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Avatar } from "@/components/ui/avatar";

interface GreetingHeaderProps {
  name: string;
  topic: string;
  xp: number;
  level: number;
  nextLevelXp: number;
  progress: number;
  children?: ReactNode;
}

export function GreetingHeader({
  name,
  topic,
  xp,
  level,
  nextLevelXp,
  progress,
  children,
}: GreetingHeaderProps) {
  const initial = name[0]?.toUpperCase() ?? "";

  return (
    <section className="mx-4 flex flex-col gap-6 rounded-3xl bg-hero px-4 pt-6 pb-6 text-hero-foreground md:px-8 md:pt-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Hello, {name}!
          </h1>
          <p className="mt-1 text-sm text-hero-foreground/70">{topic}</p>
        </div>
        <Avatar
          initial={initial}
          className="size-16 bg-hero-foreground/20 text-2xl text-hero-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span className="flex items-center gap-1.5">
            <Star
              aria-hidden="true"
              className="size-4 fill-warning text-warning"
            />
            {xp} XP
          </span>
          <span className="text-hero-foreground/70">
            Level {level} - {level + 1} ({nextLevelXp} XP)
          </span>
        </div>
        <ProgressBar value={progress} className="bg-hero-foreground/20" />
      </div>

      {children}
    </section>
  );
}
