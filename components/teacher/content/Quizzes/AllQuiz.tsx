import { NextPage } from "next";
import { useState } from "react";
import Modal from "./Modal";

const AllQuiz: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  return (
    <div className="flex justify-between items-center">
      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : <></>}
      <h1 className="p-2">Your Quiz</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="border-2 border-white p-2 mt-2 rounded-md hover:bg-gray-100"
      >
        Add New Quiz
      </button>
    </div>
  );
};

export default AllQuiz;
