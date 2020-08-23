import React, { Component } from 'react';
import nextId from 'react-id-generator';

import Auxiliary from '../../hoc/Auxiliary';
import AddButton from '../../components/UI/Button/AddButton/AddButton';
import Questions from '../../components/Questions/Questions';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import Modal from '../../components/UI/Modal/Modal';
class QuestionContainer extends Component {
	state = {
		items: [
			{
				id: '1',
				question:
					'Who is the best teacher in the world of programming in Youtube?',
				choices: [
					'Traversy Media',
					'Simplified Dev',
					'Design Course',
					'Dennis Ivy',
				],
				answer: 'Traversy Media',
			},
		],
		addQuestion: true,
	};
	addNewQuestion = (currentQuestion) => {
		const newArray = [...this.state.items];
		const questionID = nextId();
		if (
			currentQuestion.inputQuestion !== '' &&
			currentQuestion.answer !== '' &&
			currentQuestion.inputCurrentChoice !== '' &&
			currentQuestion.choices !== []
		) {
			newArray.push({
				id: questionID,
				question: currentQuestion.inputQuestion,
				choices: [
					...currentQuestion.choices,
					currentQuestion.inputCurrentChoice,
				],
				answer: currentQuestion.inputCorrentAns,
			});
		} else {
			return;
		}
		this.setState({
			...this.state,
			items: newArray,
		});
	};
	deleteQuestion = (questionIndex) => {
		const itemsCopy = [...this.state.items];
		itemsCopy.splice(questionIndex, 1);
		this.setState({ items: itemsCopy });
	};

	addButtonClicked = () => {
		this.setState({ addQuestion: true });
	};

	addQuestionExit = () => {
		this.setState({ addQuestion: false });
	};

	render() {
		return (
			<Auxiliary>
				<Modal show={this.state.addQuestion} modalClosed={this.addQuestionExit}>
					<AddQuestion
						handleState={this.addNewQuestion}
						modalClosed={this.addQuestionExit}
					/>
				</Modal>
				<div className='min-h-screen px-3 py-24 sm:px-10 md:px-24 lg:px-large'>
					<h1 className='text-3xl font-semibold text-gray-800 font-poppins'>
						Create Your Questions:
					</h1>
					{this.state.items.length !== 0 ? (
						<Questions
							questions={this.state.items}
							deleted={this.deleteQuestion}
						/>
					) : null}
					<AddButton clicked={this.addButtonClicked} />
				</div>
			</Auxiliary>
		);
	}
}
export default QuestionContainer;
