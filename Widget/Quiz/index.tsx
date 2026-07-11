// Widget/LearnQuiz.tsx
"use client";

import { useState } from "react";
import QuizQuestion from "@/Widget/Quiz/QuizQuestion";
import { quizContent } from "@/lib/quizContent";

interface QuizProps {
  topic: string;
}

export default function Quiz({ topic }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState<string | undefined>();

  const questions = quizContent[topic];
  console.log(questions);

  if (!questions) {
    return (
      <div className="p-4 text-sm text-slate-500">
        Quiz coming soon for this topic.
      </div>
    );
  }

  const current = questions[currentQuestion - 1];

  return (
    <div className="my-34 px-8">
      <h1 className="font-semibold text-2xl pt-6 capitalize">{topic} Quiz</h1>
      <QuizQuestion
        questionNumber={currentQuestion}
        totalQuestions={questions.length}
        questionText={current.questionText}
        note={current.note}
        options={current.options}
        selectedLetter={selectedLetter}
        onSelect={setSelectedLetter}
        onSkip={() => {
          setSelectedLetter(undefined);
          setCurrentQuestion((q) => Math.min(q + 1, questions.length));
        }}
        onCheck={() =>
          console.log(
            "checking:",
            selectedLetter,
            "correct:",
            current.correctLetter,
          )
        }
      />
    </div>
  );
}
