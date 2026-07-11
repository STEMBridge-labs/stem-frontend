"use client";

import { Volume2 } from "lucide-react";

interface EquationCardProps {
  equation: string; // e.g. "2x + 5 = 15"
  leftSide: string; // e.g. "2x + 5"
  rightSide: string; // e.g. "15"
  onReadAloud?: () => void;
}

export default function EquationCard({
  equation,
  leftSide,
  rightSide,
  onReadAloud,
}: EquationCardProps) {
  return (
    <div className="flex w-full flex-col gap-6 mt-8">

      {/* Main equation card */}
      <div className="relative shadow-xl flex w-full flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {equation}
        </h2>

        <div className="flex items-center gap-4">
          <span className="rounded-full border border-rose-300 bg-rose-50 px-4 py-1.5 text-sm font-semibold text-rose-500 sm:text-base">
            {leftSide}
          </span>
          <span className="text-lg font-semibold text-slate-700">=</span>
          <span className="rounded-full border border-blue-300 bg-blue-50 px-6 py-1.5 text-sm font-semibold text-blue-600 sm:text-base">
            {rightSide}
          </span>
        </div>

        {/* Bottom accent line */}
        {/* <div className="absolute inset-x-6 bottom-0 h-[3px] rounded-full bg-amber-400" /> */}
      </div>

      {/* Read aloud button */}
      <button
        type="button"
        onClick={onReadAloud}
        className="flex w-fit items-center gap-2 rounded-lg border border-blue-500 bg-white mt-4 px-5 py-2.5 text-[15px] font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <Volume2 className="h-4 w-4" />
        Read this Aloud
      </button>
    </div>
  );
}
