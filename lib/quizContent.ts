
export interface QuizOption {
  letter: string;
  text: string;
}

export interface QuizQuestionData {
  questionText: string;
  note?: string;
  options: QuizOption[];
  correctLetter: string;
}

export const quizContent: Record<string, QuizQuestionData[]> = {
  "linear-equations": [
    {
      questionText: "Solve for x: 3x - 7 = 14",
      note: "Note: x is an unknown variable",
      options: [
        { letter: "A", text: "x = 3" },
        { letter: "B", text: "x = 7" },
        { letter: "C", text: "x = 5" },
        { letter: "D", text: "x = 9" },
      ],
      correctLetter: "B",
    },
    {
      questionText: "Solve for x: 2x + 5 = 15",
      options: [
        { letter: "A", text: "x = 5" },
        { letter: "B", text: "x = 10" },
        { letter: "C", text: "x = 4" },
        { letter: "D", text: "x = 7" },
      ],
      correctLetter: "A",
    },
  ],
  "basic-shapes": [
    {
      questionText: "How many sides does a triangle have?",
      options: [
        { letter: "A", text: "2" },
        { letter: "B", text: "3" },
        { letter: "C", text: "4" },
        { letter: "D", text: "5" },
      ],
      correctLetter: "B",
    },
  ],
};