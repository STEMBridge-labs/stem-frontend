import type { StudyStep } from "@/lib/topics";

const PATTERN = /^(-?\d*)x\s*([+-]\s*\d+)?\s*=\s*(-?\d+)$/;

export function solveLinearEquation(input: string): StudyStep[] | null {
  const normalized = input.replace(/\s+/g, "");
  const match = normalized.match(PATTERN);
  if (!match) return null;

  const a =
    match[1] === "" || match[1] === "-"
      ? Number(`${match[1]}1`)
      : Number(match[1]);
  const b = match[2] ? Number(match[2].replace(/\s+/g, "")) : 0;
  const c = Number(match[3]);

  if (a === 0) return null;

  const steps: StudyStep[] = [];
  let remainder = c;

  if (b !== 0) {
    const sign = b > 0 ? "-" : "+";
    remainder = c - b;
    steps.push({
      title: `${sign === "-" ? "Subtract" : "Add"} ${Math.abs(b)} ${sign === "-" ? "from" : "to"} both sides`,
      description: `To move the ${b > 0 ? "+" : ""}${b} to the other side, ${sign === "-" ? `subtract ${Math.abs(b)} from` : `add ${Math.abs(b)} to`} both sides`,
      result: `${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} ${sign} ${Math.abs(b)} = ${c} ${sign} ${Math.abs(b)}`,
    });
    steps.push({
      title: "Simplify both sides",
      description: `The ${b > 0 ? "+" : ""}${b} and ${sign}${Math.abs(b)} cancel out on the left`,
      result: `${a}x = ${remainder}`,
    });
  }

  const x = remainder / a;

  if (a !== 1) {
    steps.push({
      title: `Divide both sides by ${a}`,
      description: `To get x alone, divide both sides by ${a}`,
      result: `x = ${remainder} / ${a} = ${x}`,
    });
  } else {
    steps.push({
      title: "x is already isolated",
      description: "The coefficient of x is 1, so no division is needed",
      result: `x = ${x}`,
    });
  }

  return steps;
}
