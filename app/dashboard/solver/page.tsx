"use client";

import { useState } from "react";
import { SolverEquationInput } from "@/components/blocks/solver/equation-input";
import { SolverSteps } from "@/components/blocks/solver/solver-steps";
import type { StudyStep } from "@/lib/topics";
import { solveLinearEquation } from "@/lib/solve-linear-equation";

export default function SolverPage() {
  const [equation, setEquation] = useState("2x + 5 = 15");
  const [steps, setSteps] = useState<StudyStep[] | null>(null);
  const [error, setError] = useState(false);

  const handleSolve = () => {
    const result = solveLinearEquation(equation);
    setSteps(result);
    setError(result === null);
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <SolverEquationInput
        value={equation}
        onChange={setEquation}
        onSolve={handleSolve}
      />

      {error && (
        <p className="text-center text-sm text-muted-foreground">
          We can only solve simple linear equations like &quot;2x + 5 = 15&quot;
          right now - try one of the examples above.
        </p>
      )}

      {steps && <SolverSteps steps={steps} />}
    </div>
  );
}
