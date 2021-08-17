interface questionsBanksItem {
  id: string;
  name: string;
  subject: string;
  totalQuestions: number;
}

interface questionsBanksType extends Array<questionsBanksItem> {}

export const questionsbanksDummy: questionsBanksType = [
  {
    id: "1",
    name: "9DIPA",
    subject: "IPA",
    totalQuestions: 10,
  },
  {
    id: "2",
    name: "9CIPA",
    subject: "IPA",
    totalQuestions: 12,
  },
  {
    id: "3",
    name: "9FIPA",
    subject: "IPA",
    totalQuestions: 80,
  },
  {
    id: "4",
    name: "9ZIPA",
    subject: "IPA",
    totalQuestions: 56,
  },
  {
    id: "5",
    name: "7DIPA",
    subject: "IPA",
    totalQuestions: 10,
  },
  {
    id: "6",
    name: "8CIPA",
    subject: "IPA",
    totalQuestions: 12,
  },
  {
    id: "7",
    name: "7FIPA",
    subject: "IPA",
    totalQuestions: 80,
  },
  {
    id: "8",
    name: "8ZIPA",
    subject: "IPA",
    totalQuestions: 56,
  },
];

interface questionsItem {}

interface questionsType extends Array<questionsItem> {}

export const questions: questionsType = [];
