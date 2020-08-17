import React from "react";

import Choices from "./Choices/Choices";

const buildQuestion = ({
  items: { id, question, answer, choices },
  questionChanged,
  answerChanged,
  choiceChanged,
}) => {
  return (
    <div className="rounded-lg bg-gray-100 py-6 px-8 justify-between border-gray-200 mx-auto my-0 w-10/12 flex mt-4">
      <div className=" text-2xl bg-custom-primary text-center w-12 h-12 leading-none py-3 rounded-lg text-white font-poppins">
        {id}
      </div>
      <div className="font-poppins flex-1 pl-16">
        <input
          type="text"
          className="text-2.5xl font-light bg-transparent w-full focus:outline-none"
          value={question}
          placeholder="Type your question"
          onChange={questionChanged}
        />
        <Choices choices={choices} changeValue={choiceChanged} />
        <div className="mt-6 flex">
          <h3 className="mr-6 text-3xl font-medium">Answer:</h3>
          <input
            type="text"
            className="font-light text-3xl bg-transparent outline-none"
            value={answer}
            placeholder="Type the answer here!"
            onChange={answerChanged}
          />
        </div>
      </div>
      <svg
        viewBox="0 0 20 20"
        className="h-10 w-10 fill-current text-red-600 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default buildQuestion;
