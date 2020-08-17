import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import AddButton from "../../components/UI/Button/AddButton/AddButton";
import Questions from "../../components/Questions/Questions";

class QuestionContainer extends Component {
  state = {
    items: [
      // {
      //   id: "1",
      //   question:
      //     "Who is the best teacher in the world of programming in Youtube?",
      //   choices: [
      //     "Traversy Media",
      //     "Simplified Dev",
      //     "Design Course",
      //     "Dennis Ivy",
      //   ],
      //   answer: "Traversy Media",
      // },
      // {
      //   id: "2",
      //   question:
      //     "Who is the best teacher in the world of programming in Youtube?",
      //   choices: [
      //     "Traversy Media",
      //     "Simplified Dev",
      //     "Design Course",
      //     "Dennis Ivy",
      //   ],
      //   answer: "Traversy Media",
      // },
    ],
    currentItem: {
      id: 1,
      question: "",
      choices: [""],
      answer: "",
    },
  };

  componentDidMount() {
    console.log(this.state.currentItem);
    console.log(this.state.items);
  }
  questionInputChanged = (e) => {
    let currentAnswer = this.state.currentItem.answer.slice();
    this.setState({
      currentItem: {
        id: this.state.items.length + 1,
        question: e.target.value,
        answer: currentAnswer,
      },
    });
  };
  answerInputChanged = (e) => {
    let currentQuestion = this.state.currentItem.question.slice();
    this.setState({
      currentItem: {
        id: this.state.items.length + 1,
        question: currentQuestion,
        answer: e.target.value,
      },
    });
  };

  render() {
    return (
      <Auxiliary>
        <div className="flex flex-col py-48 w-8/12 mx-auto">
          <h1 className=" font-poppins text-6xl pb-6 text-black font-light">
            Create Your Questions:
          </h1>
          {this.state.items.length !== 0 ? (
            <Questions questions={this.state.items} />
          ) : null}
          <Questions
            questions={this.state.currentItem}
            questionChanged={this.questionInputChanged}
            answerChanged={this.answerInputChanged}
            choiceChanged={this.choiceChanged}
          />

          <AddButton clicked={null} />
        </div>
      </Auxiliary>
    );
  }
}
export default QuestionContainer;
