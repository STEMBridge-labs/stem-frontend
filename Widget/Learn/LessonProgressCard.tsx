"use client";

import { useState } from "react";
import { Ruler, Heart } from "lucide-react";

interface LessonProgressCardProps {
  icon?: React.ReactNode;
  title: string;
  progress: number; // 0-100
  favorited?: boolean;
  onToggleFavorite?: (favorited: boolean) => void;
}

export default function LessonProgressCard({
  icon,
  title,
  progress,
  favorited = false,
  onToggleFavorite,
}: LessonProgressCardProps) {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const handleToggle = () => {
    const next = !isFavorited;
    setIsFavorited(next);
    onToggleFavorite?.(next);
  };

  return (
    <div className="flex h-[86px] w-full items-center cursor-pointer gap-6 rounded-[20px] border border-[var(--border)] bg-[#F8FAFC] px-5 py-13">
      {/* Left: icon */}
      <div className="flex h-12.5 w-12.5 shrink-0 items-center justify-center rounded-lg bg-amber-50">
        {icon ?? <Ruler className="h-8 w-8 text-amber-500" strokeWidth={2} />}
      </div>

      {/* Middle: title and progress */}
      <div className="flex w-full flex-col gap-3.5">
        <span className="truncate text-lg font-bold leading-[100%] tracking-normal text-[var(--foreground)]">
          {title}
        </span>

        <div className="flex items-center gap-2">
          <div className="h-full w-full flex-1 overflow-hidden rounded-[10px] gap-2.5 bg-[#D9D9D9]">
            <div
              className="h-2 rounded-full bg-[var(--primary)] transition-[width] duration-300 ease-in-out"
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        </div>
        <span className="whitespace-nowrap text-sm leading-[100%] tracking-normal text-[var(--muted-foreground)]">
          {clampedProgress}% complete
        </span>
      </div>

      {/* Right: favorite toggle */}
      <button
        type="button"
        onClick={handleToggle}
        aria-pressed={isFavorited}
        aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        className="ml-18 shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
      >
        <Heart
          className={`h-7 w-7 transition-colors duration-300 ease-in hover:cursor-pointer ${
            isFavorited
              ? "fill-[var(--destructive)] text-[var(--destructive)]"
              : "text-[var(--foreground)]"
          }`}
        />
      </button>
    </div>
  );
}
