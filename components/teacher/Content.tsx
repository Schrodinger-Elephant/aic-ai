import { FC } from "react";
import Questions from "./content/Questions";
import Quizzes from "./content/Quizzes";

interface Props {
  selectedMenu: String;
}

const Content: FC<Props> = (props) => {
  return (
    <>
      {props.selectedMenu === "Dashboard" ? (
        <></>
      ) : props.selectedMenu === "Questions" ? (
        <Questions />
      ) : props.selectedMenu === "Quizzes" ? (
        <Quizzes />
      ) : (
        <></>
      )}
    </>
  );
};

export default Content;
