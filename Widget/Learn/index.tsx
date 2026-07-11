import LessonProgressCard from "@/Widget/Learn/LessonProgressCard";
import { Route } from "@/lib/route";
import Link from "next/link";

// This array defines the topic cards shown on the learn dashboard.
const topics = [
  { link: "linear-equations", title: "Linear Equations", progress: 60 }, // (placeholder title per your note)
  { link: "basic-shapes", title: "Basic Shapes", progress: 81 },
  { link: "algebra-intro", title: "Algebra Introduction", progress: 25 },
  { link: "place-value", title: "Place Value", progress: 32 },
];


// This component renders the learn page and links each topic to its lesson route.
export const Learn = () => {
  return (
    <div className="my-30 flex flex-col p-6 px-8">
      <h1 className="mb-7 text-4xl font-bold text-[var(--foreground)]">Topics</h1>

      <div className="grid min-w-sm grid-cols-1 gap-9 text-4xl font-bold md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          // Each topic card routes the user to the matching lesson page.
          <Link key={topic.link} href={Route.Lesson(topic.link)}>
            <LessonProgressCard title={topic.title} progress={topic.progress} />
          </Link>
        ))}
      </div>
    </div>
  );
};
