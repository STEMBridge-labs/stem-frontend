"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import mascot from "@/public/assets/mascot-thinking.svg";
import type { QuizQuestion } from "@/lib/topics";

interface QuizQuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  selectedIndex: number | null;
  revealed: boolean;
  onSelect: (index: number) => void;
}

const LETTERS = ["A", "B", "C", "D"];

export function QuizQuestionCard({
  question,
  questionNumber,
  selectedIndex,
  revealed,
  onSelect,
}: QuizQuestionCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold tracking-widest text-muted-foreground">
            QUESTION {questionNumber}
          </span>

          <h2 className="text-2xl font-bold">{question.question}</h2>

          {question.note && (
            <p className="w-fit rounded-full border border-warning/40 bg-warning/10 px-3 py-1 text-sm text-warning">
              {question.note}
            </p>
          )}
        </div>

        <Image src={mascot} alt="" className="hidden w-24 shrink-0 md:block" />
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = index === question.correctIndex;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(index)}
              disabled={revealed}
              className={cn(
                "flex items-center gap-4 rounded-xl border border-border px-4 py-4 text-left transition-colors",
                isSelected && !revealed && "border-primary bg-primary/5",
                revealed && isCorrect && "border-success bg-success/10",
                revealed &&
                  isSelected &&
                  !isCorrect &&
                  "border-warning bg-warning/10",
              )}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                {LETTERS[index]}
              </span>
              <span className="text-lg font-medium">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
