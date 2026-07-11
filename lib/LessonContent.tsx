"use client";
// lib/lessonContent.tsx
import EquationCard from "@/Widget/Learn/EquationCard";
import StepByStepSolver from "@/Widget/Learn/StepByStepSolver";
import Link from "next/link";
import { Route } from "@/lib/route";

export const LessonContent: Record<string, React.ReactNode> = {
  "linear-equations": (
    <div>
      <div>
        <h2 className="font-semibold text-2xl mt-2">Linear Equations</h2>
        <p className="mt-1.5 italic text-slate-900">
          Lesson 1 of 5 Solving with Two steps
        </p>
      </div>
      {/* <div className="flex justify-center items-center gap-3 px-6 py-6">
        <div className="h-2 w-8 rounded-full bg-blue-600" />
        <div className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
        <div className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
        <div className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
        <div className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
      </div> */}
      <EquationCard
        equation="2x + 5 = 15"
        leftSide="2x + 5"
        rightSide="15"
        onReadAloud={() => {
          const utterance = new SpeechSynthesisUtterance("2x + 5 = 15");
          speechSynthesis.speak(utterance);
        }}
      />
      <StepByStepSolver
        steps={[
          {
            title: "Subtract 5 from both sides",
            description:
              "To move the +5 to the other side, subtract 5 from both sides",
            equation: "2x + 5 - 5 = 15 - 5",
          },
          {
            title: "Simplify both sides",
            description: "The +5 and -5 cancel out on the left",
            equation: "2x = 10",
          },
          {
            title: "Divide both sides by 2",
            description: "To get x alone, divide both sides by 2",
            equation: "x = 10 / 2 = 5",
          },
        ]}
        summaryTitle="Great Job!"
        summaryText="You understood how to solve a two-step linear equation. Always do the same thing to both sides."
      />
      <div className="flex w-full flex-col mt-10 gap-4 sm:flex-row">
        <Link
          href={Route.Quiz("linear-equations")}
          className="flex-1 rounded-xl cursor-pointer bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-[0_3px_0_0_#324E66] transition-colors hover:bg-blue-700 sm:text-base"
        >
          Take Quiz
        </Link>

        <button
          type="button"
          className="flex-1 rounded-xl cursor-pointer border border-slate-200 bg-white py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 sm:text-base"
        >
          Try Solver
        </button>
      </div>
    </div>
  ),
  "basic-shapes": (
    <div className="text-sm text-slate-500">
      Basic shapes lesson content here.
    </div>
  ),
  "algebra-into": (
    <div className="text-sm text-slate-500">
      Algebra intro lesson content here.
    </div>
  ),
};

export default LessonContent;
