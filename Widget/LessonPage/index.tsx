"use client";

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
      {content ?? (
        <div className="text-sm text-slate-500">Lesson content coming soon.</div>
      )}
    </div>
  );
}