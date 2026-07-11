import LearnQuiz from "@/Widget/Quiz";

export default async function Page({ params }: { params: { topic: string } }) {
  console.log(await params);
  const { topic } = await params;
  return <LearnQuiz topic={topic} />;
}
