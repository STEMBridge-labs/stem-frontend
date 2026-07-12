"use client";

import { EquationInput as BaseEquationInput } from "@/components/ui/equation-input";
import { Button } from "@/components/ui/button";

const EXAMPLES = ["2x+5=15", "3x-7=14", "5x=35"];

interface SolverEquationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSolve: () => void;
}

export function SolverEquationInput({
  value,
  onChange,
  onSolve,
}: SolverEquationInputProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border-2 border-accent p-5">
      <p className="text-center text-base text-muted-foreground">
        Enter your equation or expression
      </p>

      <BaseEquationInput
        value={value}
        onChange={onChange}
        placeholder="2x + 5 = 15"
      />

      <div className="flex flex-wrap justify-center gap-2">
        {EXAMPLES.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => onChange(example)}
            className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-foreground"
          >
            {example}
          </button>
        ))}
      </div>

      <Button
        type="button"
        variant="accent"
        size="xl"
        onClick={onSolve}
        disabled={value.trim() === ""}
      >
        Solve &amp; Explain
      </Button>
    </div>
  );
}
