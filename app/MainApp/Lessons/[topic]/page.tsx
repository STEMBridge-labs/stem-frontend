// This route receives a lesson topic from the URL and passes it to the lesson content widget.
import LessonPage from "@/Widget/LessonPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;

  return <LessonPage topic={topic} />;
}