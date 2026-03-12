export type TestAnswerType = {
  id: number;
  answer: string;
  isCorrect: boolean;
};

export type TestType = {
  id: number;
  imageUrl: string | null;
  question: string;
  testAnswer: TestAnswerType[];
};
