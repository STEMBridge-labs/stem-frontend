import Link from "next/link";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <span className="text-sm font-bold">Quick Actions</span>
      <div className="grid grid-cols-2 gap-3 md:max-w-md">
        <Button
          render={<Link href="/dashboard/solver" />}
          nativeButton={false}
          variant="warning"
          size="xl"
        >
          Math Solver
        </Button>
        <Button
          render={<Link href="/dashboard/learn/basic-fractions/quiz" />}
          nativeButton={false}
          size="xl"
        >
          Take Quiz
        </Button>
      </div>
    </div>
  );
}
