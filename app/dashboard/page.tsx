import { GreetingHeader } from "@/components/blocks/home/greeting-header";
import { StreakCard } from "@/components/blocks/home/streak-card";
import { ChallengeCard } from "@/components/blocks/home/challenge-card";
import { TopicCard } from "@/components/blocks/lessons/topic-card";
import { QuickActions } from "@/components/blocks/home/quick-actions";
import { TOPICS, getTopicStatus } from "@/lib/topics";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <GreetingHeader
        name="Emeka"
        topic="JSS 1 Mathematics"
        xp={620}
        level={4}
        nextLevelXp={1000}
        progress={62}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ChallengeCard
            title="Reach Level 4"
            xpReward={50}
            current={3}
            total={10}
          />
          <StreakCard days={7} longestStreak={12} />
        </div>
      </GreetingHeader>

      <section className="flex flex-col gap-3 px-4">
        <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
          Continue Learning
        </span>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard
              key={topic.id}
              topicId={topic.id}
              icon={topic.icon}
              title={topic.title}
              progress={topic.progress}
              accent={topic.accent}
              status={getTopicStatus(topic.progress)}
            />
          ))}
        </div>
      </section>

      <QuickActions />
    </div>
  );
}
