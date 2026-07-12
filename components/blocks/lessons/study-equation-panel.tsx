import Image from "next/image"
import mascot from "@/public/assets/mascot-winking.svg"

interface StudyEquationPanelProps {
  left: string
  right: string
}

export function StudyEquationPanel({ left, right }: StudyEquationPanelProps) {
  return (
    <div className="relative rounded-3xl bg-primary/10 p-4 md:py-8 md:pr-8 md:pl-40">
      <Image
        src={mascot}
        alt=""
        className="absolute -top-6 left-4 hidden w-32 md:block"
      />
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-sm">
        <div className="text-3xl font-extrabold sm:text-4xl">
          {left} = {right}
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-full border border-warning/40 bg-warning/10 px-4 py-1.5 text-sm font-semibold text-warning">
            {left}
          </span>
          <span className="text-lg">=</span>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {right}
          </span>
        </div>
      </div>
    </div>
  )
}
