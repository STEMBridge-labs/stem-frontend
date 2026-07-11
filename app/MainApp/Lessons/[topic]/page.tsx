// app/lessons/[topic]/page.tsx
import LessonPage from "@/Widget/LessonPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    console.log(await params)
  const { topic } = await params;
  return <LessonPage topic={topic} />;
}