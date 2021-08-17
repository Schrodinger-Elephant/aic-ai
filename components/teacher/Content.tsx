import { FC } from "react";
import Questions from "./content/Questions";

interface Props {
  selectedMenu: String;
}

const Content: FC<Props> = (props) => {
  return (
    <>
      {props.selectedMenu === "Dashboard"
        ? <></>
        : props.selectedMenu === "Questions"
        ? <Questions/>
        : props.selectedMenu === "Quizzes"
        ? <></>
        : <></>}
    </>
  );
};

export default Content;
