"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";
import type { TopicAccent, TopicStatus } from "@/lib/topics";

const STATUS_LABEL: Record<TopicStatus, string> = {
  "almost-done": "Almost Done",
  "in-progress": "In Progress",
  "not-started": "Start",
};

const STATUS_BADGE_VARIANT: Record<TopicStatus, "success" | "warning" | "outline"> = {
  "almost-done": "success",
  "in-progress": "warning",
  "not-started": "outline",
};

const ACCENT_BORDER: Record<TopicAccent, string> = {
  "chart-1": "border-chart-1",
  "chart-2": "border-chart-2",
  "chart-3": "border-chart-3",
  "chart-4": "border-chart-4",
};

interface TopicCardProps {
  topicId: string;
  icon: string;
  title: string;
  progress: number;
  accent: TopicAccent;
  status: TopicStatus;
}

export function TopicCard({
  topicId,
  icon,
  title,
  progress,
  accent,
  status,
}: TopicCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className={cn("rounded-2xl border-2 p-4", ACCENT_BORDER[accent])}>
      <Link
        href={`/dashboard/learn/${topicId}/study`}
        className="flex items-center gap-4 md:flex-col md:items-stretch"
      >
        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted md:h-36 md:w-full md:rounded-xl">
          <Image
            src={icon}
            alt=""
            width={40}
            height={40}
            className="size-10 object-contain md:size-20"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-base font-bold">{title}</span>
            <Heart
              onClick={(event) => {
                event.preventDefault();
                setSaved((prev) => !prev);
              }}
              aria-label={saved ? "Remove from saved topics" : "Save topic"}
              className={cn(
                "size-5 shrink-0 cursor-pointer text-foreground",
                saved && "fill-destructive text-destructive",
              )}
            />
          </div>
          <ProgressBar value={progress} />
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">
              {progress}% complete
            </span>
            <Badge variant={STATUS_BADGE_VARIANT[status]}>
              {STATUS_LABEL[status]}
            </Badge>
          </div>
        </div>
      </Link>
    </div>
  );
}
