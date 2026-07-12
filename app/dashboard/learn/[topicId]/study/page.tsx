import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { StudyEquationPanel } from "@/components/blocks/lessons/study-equation-panel";
import { StepCard } from "@/components/ui/step-card";
import { VoicePlaybackButton } from "@/components/ui/voice-playback-button";
import { Button } from "@/components/ui/button";
import { getTopic } from "@/lib/topics";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topicId: string }>;
}): Promise<Metadata> {
  const { topicId } = await params;
  const topic = getTopic(topicId);
  return {
    title: topic ? `${topic.title} - Study - STEMBridge` : "Study - STEMBridge",
  };
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;
  const topic = getTopic(topicId);

  if (!topic) notFound();

  const [left, right] = topic.equation.split("=").map((part) => part.trim());

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <h1 className="text-center text-2xl font-extrabold md:text-3xl">
        {topic.title}
      </h1>

      <StudyEquationPanel left={left} right={right} />

      <VoicePlaybackButton
        text={`${topic.equation}. ${topic.study.map((step) => `${step.title}. ${step.description}. ${step.result}`).join(". ")}`}
      />

      <div className="flex flex-col gap-4">
        {topic.study.map((step, index) => (
          <StepCard
            key={step.title}
            index={index}
            title={step.title}
            description={step.description}
            result={step.result}
          />
        ))}
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-primary">
        <p className="font-semibold">Great Job!</p>
        <p className="text-sm">{topic.summary}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          render={<Link href={`/dashboard/learn/${topicId}/quiz`} />}
          nativeButton={false}
          size="xl"
        >
          Take Quiz
        </Button>
        <Button
          render={<Link href="/dashboard/solver" />}
          nativeButton={false}
          variant="outline"
          size="xl"
        >
          Try Solver
        </Button>
      </div>
    </div>
  );
}
