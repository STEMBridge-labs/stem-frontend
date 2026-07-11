// This route captures the quiz topic from the URL and passes it to the quiz widget.
import LearnQuiz from "@/Widget/Quiz";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  console.log(topic)

  return <LearnQuiz topic={topic} />;
}
