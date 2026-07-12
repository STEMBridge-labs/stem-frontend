"use client";

import { use, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { QuizProgressBar } from "@/components/blocks/lessons/quiz-progress-bar";
import { QuizQuestionCard } from "@/components/blocks/lessons/quiz-question-card";
import { Button } from "@/components/ui/button";
import { getTopic } from "@/lib/topics";

export default function QuizPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = use(params);
  const topic = getTopic(topicId);
  const router = useRouter();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  if (!topic) notFound();

  const question = topic.quiz[questionIndex];
  const isLastQuestion = questionIndex === topic.quiz.length - 1;

  const goToNext = () => {
    if (isLastQuestion) {
      router.push("/dashboard/learn");
      return;
    }
    setQuestionIndex((prev) => prev + 1);
    setSelectedIndex(null);
    setRevealed(false);
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 p-4">
      <div className="flex flex-col gap-6 rounded-3xl border border-border p-4 md:p-8">
        <QuizProgressBar
          exitHref={`/dashboard/learn/${topicId}/study`}
          current={questionIndex + 1}
          total={topic.quiz.length}
        />

        <QuizQuestionCard
          question={question}
          questionNumber={questionIndex + 1}
          selectedIndex={selectedIndex}
          revealed={revealed}
          onSelect={(index) => !revealed && setSelectedIndex(index)}
        />
      </div>

      <div className="sticky bottom-4 flex gap-4 rounded-xl bg-primary p-3">
        <Button
          type="button"
          variant="secondary"
          className="flex-1"
          onClick={goToNext}
        >
          Skip
        </Button>
        <Button
          type="button"
          variant="invert"
          className="flex-1"
          disabled={selectedIndex === null}
          onClick={() => (revealed ? goToNext() : setRevealed(true))}
        >
          {revealed ? (isLastQuestion ? "Finish" : "Next") : "Check"}
        </Button>
      </div>
    </div>
  );
}
