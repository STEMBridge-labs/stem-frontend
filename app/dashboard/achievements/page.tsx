import type { Metadata } from "next";
import { AchievementsHeader } from "@/components/blocks/achievements/achievements-header";
import { WeeklyStreakTracker } from "@/components/blocks/achievements/weekly-streak-tracker";
import {
  BadgeGrid,
  type BadgeItem,
} from "@/components/blocks/achievements/badge-grid";

export const metadata: Metadata = {
  title: "Achievements - STEMBridge",
};

const BADGES: BadgeItem[] = [
  {
    title: "Algebra Champion",
    description: "Solved 10 equations correctly",
    icon: "/assets/badge-algebra-champion.svg",
    isNew: true,
  },
  {
    title: "7 - Day Warrior",
    description: "Completed a 7-Day Learning Streak",
    icon: "/assets/badge-7-day-warrior.svg",
  },
  {
    title: "Perfect Score",
    description: "Got 100% on quiz",
    icon: "/assets/badge-perfect-score.svg",
  },
  {
    title: "Speed Solver",
    description: "Answered 5 questions in under 1 min",
    icon: "/assets/badge-speed-solver.svg",
  },
];

export default function AchievementsPage() {
  return (
    <div className="flex flex-col gap-8">
      <AchievementsHeader totalXp={620} dayStreak={7} badgeCount={4} />
      <WeeklyStreakTracker completedDays={7} />
      <BadgeGrid heading="EARNED BADGES" badges={BADGES} earned />
      <BadgeGrid heading="LOCKED BADGES" badges={BADGES} earned={false} />
    </div>
  );
}
