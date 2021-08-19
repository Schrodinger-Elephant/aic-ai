import { NextPage } from "next";
import { useEffect, useState } from "react";
import AllQuiz from "./Quizzes/AllQuiz";

interface questionsBanksItem {
  id: string;
  name: string;
  subject: string;
  totalQuestions: number;
}

interface questionsBanksType extends Array<questionsBanksItem> {}

const Quizzes: NextPage = () => {
  const [view, setView] = useState<String>("AllQuiz");

  const [rowPerPage, setRowPerPage] = useState<number>(8);
  const [pagination, setPagination] = useState<number>(0);
  const [totalPagination, setTotalPagination] = useState<number>(0);

  useEffect(() => {
    switch (view) {
      case "AllQuiz":
        // fetch

        break;

      case "Quiz":
        // fetch
        break;

      default:
        break;
    }
  }, [view]);

  return (
    <>{view === "AllQuiz" ? <AllQuiz /> : view === "Question" ? null : <></>}</>
  );
};

export default Quizzes;
