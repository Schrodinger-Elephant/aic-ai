import { NextPage } from "next";
import { useEffect, useState } from "react";
import Bank from "./Questions/Bank";
import { questionsbanksDummy } from "./Questions/dummyData";
import Question from "./Questions/Question";

interface questionsBanksItem {
  id: string;
  name: string;
  subject: string;
  totalQuestions: number;
}

interface questionsBanksType extends Array<questionsBanksItem> {}

const Questions: NextPage = () => {
  const [view, setView] = useState<String>("Bank"); // Question

  const [questionsBanks, setQuestionsBanks] = useState<questionsBanksType>([]);
  const [questions, setQuestions] = useState([]);

  const [rowPerPage, setRowPerPage] = useState<number>(8)
  const [pagination, setPagination] = useState<number>(0);
  const [totalPagination, setTotalPagination] = useState<number>(0);

  useEffect(() => {
    switch (view) {
      case "Bank":
        // fetch
        setQuestionsBanks(questionsbanksDummy);

        break;

      case "Question":
        // fetch
        setQuestions([]);
        break;

      default:
        break;
    }
  }, [view]);

  return (
    <>
      {view === "Bank" ? (
        <Bank
          questionsBanks={questionsBanks}
          rowPerPage={rowPerPage}
          setRowPerPage={setRowPerPage}
          pagination={pagination}
          setPagination={setPagination}
          totalPagination={totalPagination}
          setTotalPagination={setTotalPagination}
        />
      ) : view === "Question" ? (
        <Question />
      ) : (
        <></>
      )}
    </>
  );
};

export default Questions;
