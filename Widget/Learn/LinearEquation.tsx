"use client";
import EquationCard from "@/Widget/Learn/EquationCard";
import StepByStepSolver from "@/Widget/Learn/StepByStepSolver";

const equation = "2x + 5 = 15";

export const MathSolver = () => {
  return (
    <div className="my-30 px-8">
      <div className="pt-6 mb-10">
        <h2 className="font-bold text-3xl mb-3.5 leading-[100%] tracking-normal">Linear Equation</h2>
        <p className=" font-normal text-slate-900 text-lg leading-[100%] tracking-normal">
          This is a simple linear equation widget.
        </p>
      </div>
      <div>
        <EquationCard
          equation={equation}
          leftSide="2x + 5"
          rightSide="15"
          onReadAloud={() => {
            const utterance = new SpeechSynthesisUtterance(equation);
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
              equation: "x = 10 / 2 = 5"
            },
          ]}
          summaryTitle="Great Job!"
          summaryText="You understood how to solve a two-step linear equation. Always do the same thing to both sides."
        />
      </div>
    </div>
  );
};
