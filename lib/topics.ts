export interface QuizQuestion {
  question: string;
  note?: string;
  options: string[];
  correctIndex: number;
}

export interface StudyStep {
  title: string;
  description: string;
  result: string;
}

export type TopicAccent = "chart-1" | "chart-2" | "chart-3" | "chart-4";

export interface Topic {
  id: string;
  title: string;
  icon: string;
  accent: TopicAccent;
  progress: number;
  equation: string;
  quiz: QuizQuestion[];
  study: StudyStep[];
  summary: string;
}

export const TOPICS: Topic[] = [
  {
    id: "basic-fractions",
    title: "Basic Fractions",
    icon: "/assets/topic-ruler.svg",
    accent: "chart-1",
    progress: 70,
    equation: "2x + 5 = 15",
    summary:
      "You understood how to solve a two-step linear equation. Always do the same thing to both sides",
    study: [
      {
        title: "Subtract 5 from both sides",
        description:
          "To move the +5 to the other side, subtract 5 from both sides",
        result: "2x + 5 - 5 = 15 - 5",
      },
      {
        title: "Simplify both sides",
        description: "The +5 and -5 cancel out on the left",
        result: "2x = 10",
      },
      {
        title: "Divide both sides by 2",
        description: "To get x alone, divide both sides by 2",
        result: "x = 10 / 2 = 5",
      },
    ],
    quiz: [
      {
        question: "Solve for x: 3x - 7 = 14",
        note: "Note: x is an unknown variable",
        options: ["x = 3", "x = 7", "x = 5", "x = 9"],
        correctIndex: 2,
      },
      {
        question: "Solve for x: 2x + 5 = 15",
        options: ["x = 5", "x = 10", "x = 2", "x = 15"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "shapes-and-patterns",
    title: "Shapes & Patterns",
    icon: "/assets/topic-shapes.svg",
    accent: "chart-2",
    progress: 30,
    equation: "3x - 7 = 14",
    summary: "Great start! Keep practicing to master shape properties.",
    study: [
      {
        title: "Add 7 to both sides",
        description: "To move the -7 to the other side, add 7 to both sides",
        result: "3x - 7 + 7 = 14 + 7",
      },
      {
        title: "Simplify both sides",
        description: "The -7 and +7 cancel out on the left",
        result: "3x = 21",
      },
      {
        title: "Divide both sides by 3",
        description: "To get x alone, divide both sides by 3",
        result: "x = 21 / 3 = 7",
      },
    ],
    quiz: [
      {
        question: "Solve for x: 3x - 7 = 14",
        note: "Note: x is an unknown variable",
        options: ["x = 3", "x = 7", "x = 5", "x = 9"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "number-systems",
    title: "Fractions",
    icon: "/assets/topic-fraction.svg",
    accent: "chart-3",
    progress: 0,
    equation: "5x = 35",
    summary: "You're just getting started - take it one step at a time.",
    study: [
      {
        title: "Divide both sides by 5",
        description: "To get x alone, divide both sides by 5",
        result: "x = 35 / 5 = 7",
      },
    ],
    quiz: [
      {
        question: "Solve for x: 5x = 35",
        options: ["x = 5", "x = 6", "x = 7", "x = 8"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "binary-numbers",
    title: "Binary Numbers",
    icon: "/assets/topic-binary.svg",
    accent: "chart-4",
    progress: 0,
    equation: "x + 4 = 11",
    summary: "Unlock this topic by completing the ones before it.",
    study: [
      {
        title: "Subtract 4 from both sides",
        description:
          "To move the +4 to the other side, subtract 4 from both sides",
        result: "x + 4 - 4 = 11 - 4",
      },
    ],
    quiz: [
      {
        question: "Solve for x: x + 4 = 11",
        options: ["x = 5", "x = 6", "x = 7", "x = 8"],
        correctIndex: 2,
      },
    ],
  },
];

export function getTopic(topicId: string): Topic | undefined {
  return TOPICS.find((topic) => topic.id === topicId);
}

export type TopicStatus = "almost-done" | "in-progress" | "not-started";

export function getTopicStatus(progress: number): TopicStatus {
  if (progress >= 70) return "almost-done";
  if (progress > 0) return "in-progress";
  return "not-started";
}
