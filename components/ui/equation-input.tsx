import { cn } from "@/lib/utils";

interface EquationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function EquationInput({
  value,
  onChange,
  placeholder,
  className,
}: EquationInputProps) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label="Equation or expression"
      className={cn(
        "w-full rounded-md border border-border bg-muted px-4 py-4 text-2xl font-semibold text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    />
  );
}
