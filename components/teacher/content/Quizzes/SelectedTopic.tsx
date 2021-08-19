import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props {
  topic: string;
  removeTopic: (topic: string) => void;
}

const SelectedTopic: FC<Props> = (props) => {
  return (
    <div className="flex justify-between border-2 border-white p-1 mb-2 rounded-xl">
      <h1>{props.topic}</h1>
      <button
        onClick={() => props.removeTopic(props.topic)}
        className="ml-2 w-4 h-4 rounded-full border-2 border-white"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default SelectedTopic;
