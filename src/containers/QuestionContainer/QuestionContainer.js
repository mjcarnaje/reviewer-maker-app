import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import AddButton from "../../components/UI/Button/AddButton/AddButton";
import Questions from "../../components/Questions/Questions";

class QuestionContainer extends Component {
  state = {
    items: [
      {
        id: "1",
        question:
          "Who is the best teacher in the world of programming in Youtube?",
        choices: [
          "Traversy Media",
          "Simplified Dev",
          "Design Course",
          "Dennis Ivy",
        ],
        answer: "Traversy Media",
      },
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

  componentDidUpdate() {
    console.log(this.state.currentItem);
    console.log(this.state.items);
  }
  questionInputChanged = (e) => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        question: e.target.value,
      },
    });
  };
  answerInputChanged = (e) => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        answer: e.target.value,
      },
    });
  };
  choiceChanged = (e) => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        choices: e.target.value,
      },
    });
  };
  addButtonClicked = () => {
    console.log("Add Button is clicked");
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
          />

          <AddButton clicked={this.addButtonClicked} />
        </div>
      </Auxiliary>
    );
  }
}
export default QuestionContainer;
