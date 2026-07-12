import type { Metadata } from "next"
import { TopicCard } from "@/components/blocks/lessons/topic-card"
import { TOPICS, getTopicStatus } from "@/lib/topics"

export const metadata: Metadata = {
  title: "Learn - STEMBridge",
}

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-3 p-4">
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
    </div>
  )
}
