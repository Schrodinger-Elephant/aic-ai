import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

interface questionsBanksItem {
  id: string;
  name: string;
  subject: string;
  totalQuestions: number;
}

interface questionsBanksType extends Array<questionsBanksItem> {}

interface Props {
  questionsBanks: questionsBanksType;
  rowPerPage: number;
  setRowPerPage: React.Dispatch<React.SetStateAction<number>>;
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  totalPagination: number;
  setTotalPagination: React.Dispatch<React.SetStateAction<number>>;
}

const Bank: FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center font-bold py-2">Questions Banks</h1>
      <div className="flex justify-between p-2 bg-gray-100 border-b-2 border-white">
        <div className="w-1/3">Name</div>
        <div className="w-1/3">Subject</div>
        <div className="w-1/3">Total Quesions</div>
      </div>
      {props.questionsBanks.map((questionsBank, idx) => (
        <div
          key={idx}
          className="flex p-2 bg-gray-100 border-b-2 border-white hover:bg-gray-200 cursor-pointer"
        >
          <div className="w-1/3">{questionsBank.name}</div>
          <div className="w-1/3">{questionsBank.subject}</div>
          <div className="w-1/3 text-center">
            {questionsBank.totalQuestions}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between p-2">
        <div>
          Row per page:
          <select>
            <option value={props.rowPerPage}>{props.rowPerPage}</option>
          </select>
        </div>
        <div>Show 1-4 from 8</div>
        <div className="flex items-center">
          <div className="p-2 cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </div>
          <div className="p-2 cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="p-2">
            {props.pagination} / {props.totalPagination}
          </div>
          <div className="p-2 cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="p-2 cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
