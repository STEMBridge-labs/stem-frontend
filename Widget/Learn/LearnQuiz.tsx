// const LearnQuiz = () => {
//   return (
//     <div>
//       <div></div>
//       <div className="grid grid-cols-1">
    
//       </div>
//       <div>
//         <button></button>
//         <button></button>
//       </div>
//     </div>
//   );
// };

// export default LearnQuiz;



"use client";

import { X } from "lucide-react";

interface QuizOption {
  letter: string;
  text: string;
}

interface QuizQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  note?: string;
  options: QuizOption[];
  selectedLetter?: string;
  onSelect?: (letter: string) => void;
  onSkip?: () => void;
  onCheck?: () => void;
  onClose?: () => void;
}

export default function LearnQuiz({
  questionNumber,
  totalQuestions,
  questionText,
  note,
  options,
  selectedLetter,
  onSelect,
  onSkip,
  onCheck,
  onClose,
}: QuizQuestionProps) {
  const progressPercent = (questionNumber / totalQuestions) * 100;

  return (
    <div className="flex w-full flex-col bg-slate-50">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4">
        <button onClick={onClose} aria-label="Close quiz">
          <X className="h-5 w-5 text-slate-900" />
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-[width]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 px-4 pt-4">
        <span className="text-xs font-bold tracking-wide text-slate-500">
          QUESTION {questionNumber}
        </span>

        <h2 className="text-base font-bold text-slate-900">{questionText}</h2>

        {note && (
          <div className="relative w-fit rounded-lg bg-red-100 px-3 py-2">
            <p className="text-xs font-medium text-red-500">{note}</p>
            <span className="absolute -right-3 -top-4 text-2xl" aria-hidden="true">
              🐙
            </span>
          </div>
        )}

        {/* Options */}
        <div className="mt-2 flex flex-col gap-3 pb-28">
          {options.map((option) => {
            const isSelected = selectedLetter === option.letter;
            return (
              <button
                key={option.letter}
                type="button"
                onClick={() => onSelect?.(option.letter)}
                className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 text-left transition-colors ${
                  isSelected
                    ? "border-blue-600 ring-1 ring-blue-600"
                    : "border-[#E5E5E5]"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                  {option.letter}
                </span>
                <span className="text-sm font-medium text-slate-900">
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 flex items-center justify-center gap-3 rounded-t-3xl bg-blue-600 px-4 py-4">
        <button
          type="button"
          onClick={onSkip}
          className="flex-1 max-w-[140px] rounded-full bg-white py-3 text-sm font-bold text-blue-600"
        >
          SKIP
        </button>
        <button
          type="button"
          onClick={onCheck}
          className="flex-1 max-w-[140px] rounded-full bg-white py-3 text-sm font-bold text-blue-600"
        >
          CHECK
        </button>
      </div>
    </div>
  );
}
