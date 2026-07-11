"use client";

import LessonContent  from "@/lib/LessonContent";

interface LessonPageProps {
  topic: string;
}

export default function LessonPage({ topic }: LessonPageProps) {
  const content = LessonContent[topic];

  console.log("=== TOPIC ===", topic);
  console.log("=== EXTRACTED CONTENT ===", content);

  return (
    <div className="flex flex-col gap-6 p-4 my-30 px-8">
      {content ?? (
        <div className="text-sm text-slate-500">Lesson content coming soon.</div>
      )}
    </div>
  );
}