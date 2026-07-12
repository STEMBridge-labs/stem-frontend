"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoicePlaybackButtonProps {
  text: string;
  label?: string;
}

export function VoicePlaybackButton({
  text,
  label = "Read this Aloud",
}: VoicePlaybackButtonProps) {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utterance);
    setPlaying(true);
  };

  return (
    <Button
      type="button"
      variant="soft"
      onClick={handleClick}
      aria-label={label}
      className="w-full"
    >
      <Volume2 aria-hidden="true" />
      {playing ? "Stop" : label}
    </Button>
  );
}
