import { StepCard } from "@/components/ui/step-card"
import { VoicePlaybackButton } from "@/components/ui/voice-playback-button"
import { Button } from "@/components/ui/button"
import type { StudyStep } from "@/lib/topics"

interface SolverStepsProps {
  steps: StudyStep[]
}

export function SolverSteps({ steps }: SolverStepsProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg font-bold text-accent-foreground">Solution</span>

      <div className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <StepCard
            key={step.title}
            index={index}
            title={step.title}
            description={step.description}
            result={step.result}
          />
        ))}
      </div>

      <VoicePlaybackButton
        text={steps.map((step) => `${step.title}. ${step.description}. ${step.result}`).join(". ")}
      />

      <Button type="button" variant="outline" size="xl">
        Save to Practice List
      </Button>
    </div>
  )
}
