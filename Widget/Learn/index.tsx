import LessonProgressCard from "@/Widget/Learn/LessonProgressCard";
import { Ruler } from "lucide-react";
import {Route} from "@/lib/route";
import Link from "next/link";

const topics = [
  { link: "linear-equations", title: "Linear Equations", progress: 60 }, // (placeholder title per your note)
  { link: "basic-shapes", title: "Basic Shapes", progress: 81 },
  { link: "algebra-intro", title: "Algebra Introduction", progress: 25 },
  { link: "place-value", title: "Place Value", progress: 32 },
];



export const Learn = () => {
  return (
    <div className="flex my-30 flex-col p-6 px-8">
      <h1 className="mb-7 text-4xl font-bold text-[var(--foreground)]">
        Topics
      </h1>
      <div className="text-4xl font-bold grid grid-cols-1 gap-9 min-w-sm md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link key={topic.link} href={Route.Lesson("linear-equations")}>
            <LessonProgressCard title={topic.title} progress={topic.progress} />
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};
