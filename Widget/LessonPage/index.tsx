"use client";
import Link from "next/link";
import { Route } from "@/lib/route";
import LessonContent from "@/lib/LessonContent";

interface LessonPageProps {
  topic: string;
}

// This component receives the lesson topic from the URL and renders the matching lesson content.
export default function LessonPage({ topic }: LessonPageProps) {
  // Look up the lesson content for the current topic from the shared lesson content map.
  const content = LessonContent[topic];

  return (
    <div className="my-30 flex flex-col gap-6 p-4 px-8">
      {content ? (
        <div>
          {content}
          <div className="flex w-full flex-col mt-10 gap-4 sm:flex-row">
            <Link
              href={Route.Quiz(topic)}
              className="flex-1 rounded-xl cursor-pointer bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-[0_3px_0_0_#324E66] transition-colors hover:bg-blue-700 sm:text-base"
            >
              Take Quiz
            </Link>

            <button
              type="button"
              className="flex-1 rounded-xl cursor-pointer border border-slate-200 bg-white py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 sm:text-base"
            >
              Try Solver
            </button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-slate-500">
          Lesson content coming soon.
        </div>
      )}
    </div>
  );
}
