"use client";

interface SolverStep {
  title: string;
  description: string;
  equation: string;
//   color: "amber400" | "amber500" | "slate500";
//   equationColor: "green" | "red" | "blue";
}

interface StepByStepSolverProps {
  steps: SolverStep[];
  summaryTitle: string;
  summaryText: string;
}

export default function StepByStepSolver({
  steps,
  summaryTitle,
  summaryText,
}: StepByStepSolverProps) {
  return (
    <div className="flex w-full mt-13 flex-col gap-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 rounded-3xl border border-l-5 bg-slate-50 border-amber-400 px-4 py-4`}
        >
          <div
            className={`flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-amber-500  font-bold text-slate-900 `}
          >
            {index + 1}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
            <p className=" text-slate-500">{step.description}</p>
            <p className={`mt-1 text-lg font-bold`}>
              {step.equation}
            </p>
          </div>
        </div>
      ))}

      <div className="rounded-2xl mt-5 text-lg border border-blue-600 bg-[#E9EFFD] px-4 py-4">
        <h3 className="font-bold text-blue-600">{summaryTitle}</h3>
        <p className="mt-1 text-base text-slate-700">{summaryText}</p>
      </div>
    </div>
  );
}



//  <div className="absolute inset-x-6 bottom-0 h-[3px] rounded-full bg-amber-400" />