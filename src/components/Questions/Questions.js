import React from "react";
import BuildQuestion from "./Question/Question";
import Auxiliary from "../../hoc/Auxiliary";

const questions = ({ questions, questionChanged, answerChanged }) => {
  console.log(questions.length);
  return (
    <Auxiliary>
      {questions.length >= 1 ? (
        questions.map((el, index) => {
          console.log(el);
          return <BuildQuestion items={el} key={index} />;
        })
      ) : (
        <BuildQuestion
          items={questions}
          questionChanged={questionChanged}
          answerChanged={answerChanged}
        />
      )}
    </Auxiliary>
  );
};

export default questions;
