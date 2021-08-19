import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useRef, useState } from "react";

const topicsDummy = [
  "sistem reproduksi hewan",
  "pertumbuhan dan perkembangan",
  "sistem gerak",
  "sistem pencernaan",
];

interface Props {
  topics: string[];
  addTopic: (newTopic: string) => void;
  setIsTopicSearchOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const TopicSearch: FC<Props> = (props) => {
  const [searchedTopic, setSearchedTopic] = useState<string>("");
  const [topicsQuery, setTopicsQuery] = useState<string[]>([]);

  const handleInput = (e: any) => {
    setSearchedTopic(e.target.value.toLowerCase());
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    // TODO fetch topics from backend
    const topics = topicsDummy;
    if (searchedTopic !== "") {
      setTopicsQuery(topics.filter((topic) => topic.includes(searchedTopic)));
    } else {
      setTopicsQuery([]);
    }
  }, [searchedTopic]);

  return (
    <div className="flex justify-center items-center fixed z-30 bg-black bg-opacity-30 h-screen w-screen">
      <div className="bg-white p-4 rounded-xl">
        <div className="flex items-center">
          <div className="mr-4">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            onChange={handleInput}
            className="border-2 border-black rounded-xl p-2"
            type="text"
            placeholder="Search topic"
            ref={inputRef}
          />
          <div
            onClick={() => {
              props.setIsTopicSearchOpen(false);
              setSearchedTopic("");
            }}
            className="ml-4 cursor-pointer hover:bg-gray-200 flex justify-center items-center w-8 h-8 rounded-full"
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="flex flex-col">
          {topicsQuery.length !== 0 ? (
            topicsQuery.map((topicQuery, idx) => (
              <button
                onClick={() => {
                  props.addTopic(topicQuery);
                  props.setIsTopicSearchOpen(false);
                }}
                key={idx}
                className="text-left hover:bg-gray-200 p-2 my-1 rounded-xl"
              >
                {topicQuery}
              </button>
            ))
          ) : searchedTopic.length !== 0 ? (
            "No results"
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicSearch;
