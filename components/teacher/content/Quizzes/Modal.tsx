import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import TopicSearch from "./TopicSearch";
import SelectedTopic from "./SelectedTopic";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

interface FormType {
  name: string;
  date: Date;
  time: string;
  duration: Number;
  topics: string[];
}

const initialState: FormType = {
  name: "",
  date: new Date(),
  time: "12.00 AM",
  duration: 0,
  topics: [""],
};

const Modal: FC<Props> = (props) => {
  const [isTopicSearchOpen, setIsTopicSearchOpen] = useState<Boolean>(false);

  const [formData, setFormData] = useState<FormType>(initialState);

  const handleFormChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addTopic = (newTopic: string) => {
    let topics = formData.topics;
    topics.push(newTopic);
    setFormData({
      ...formData,
      ["topics"]: topics,
    });
  };

  const removeTopic = (topic: string) => {
    let topics = formData.topics;
    topics = topics.filter((elem) => elem !== topic);
    setFormData({
      ...formData,
      ["topics"]: topics,
    });
  };

  return (
    <div className="flex flex-grow fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-blue-200 bg-opacity-70">
      {isTopicSearchOpen ? (
        <TopicSearch
          setIsTopicSearchOpen={setIsTopicSearchOpen}
          addTopic={addTopic}
        />
      ) : (
        <></>
      )}
      <div className="m-16 p-4 w-full border-4 border-white rounded-xl">
        <div className="flex justify-between items-center  mb-4 border-b-2 border-white">
          <h1 className="font-bold">Create New Quiz</h1>
          <div
            onClick={() => props.setIsModalOpen(false)}
            className="cursor-pointer w-8 h-8 flex items-center justify-center p-4 mb-2 rounded-full hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <form className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="p-1 rounded-md focus:ring-2 focus:ring-blue-600"
            type="text"
            onChange={handleFormChange}
          />
          <label htmlFor="Date">Date</label>
          <input
            className="p-1 rounded-md focus:ring-2 focus:ring-blue-600"
            type="date"
            onChange={handleFormChange}
          />
          <label htmlFor="Date">Time (--:-- AM/PM)</label>
          <input
            className="p-1 rounded-md focus:ring-2 focus:ring-blue-600"
            type="time"
            onChange={handleFormChange}
          />
          <label htmlFor="duration">Duration (minutes)</label>
          <input
            className="p-1 rounded-md focus:ring-2 focus:ring-blue-600"
            type="number"
            onChange={handleFormChange}
          />
          <div className="mt-2 flex w-full border-t-2 border-white"></div>
          <h1 className="font-bold">Questions</h1>
          <label htmlFor="topics">Select Topic:</label>
          <div>
            {formData.topics.map((topic, idx) => (
              <div key={idx}>
                <SelectedTopic topic={topic} removeTopic={removeTopic}/>
              </div>
            ))}
          </div>
          <div
            onClick={() => setIsTopicSearchOpen(true)}
            className="my-2 flex w-8 h-8 p-2 justify-center items-center border-2 border-white rounded-full cursor-pointer hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <button className="p-2 hover:bg-gray-200 rounded-xl border-2 border-white">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
