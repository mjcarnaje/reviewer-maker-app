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
				id: 'id0',
				question:
					'Who is the best teacher in the world of programming in Youtube?',
				choices: ['Simplified Dev', 'Design Course', 'Dennis Ivy'],
				answer: 'Traversy Media',
			},
		],
		currentItem: { id: '', question: '', choices: [], answer: '' },
		editState: false,
		addQuestion: false,
	};
	addNewQuestion = ({
		inputQuestion,
		inputCorrentAns,
		inputCurrentChoice,
		choices,
		id,
	}) => {
		let newArray = [...this.state.items];
		const questionID = nextId();
		const elementIndex = this.state.items.findIndex((el) => el.id === id);

		if (
			inputQuestion !== '' &&
			inputCorrentAns !== '' &&
			inputCurrentChoice !== '' &&
			choices !== [] &&
			id === undefined
		) {
			newArray.push({
				id: questionID,
				question: inputQuestion,
				choices: [...choices, inputCurrentChoice],
				answer: inputCorrentAns,
			});
		} else if (
			inputQuestion !== '' &&
			inputCorrentAns !== '' &&
			inputCurrentChoice !== '' &&
			choices !== [] &&
			this.state.editState
		) {
			newArray[elementIndex] = {
				id,
				question: inputQuestion,
				choices: [...choices, inputCurrentChoice],
				answer: inputCorrentAns,
			};
		} else {
			return;
		}
		this.setState({
			...this.state,
			items: newArray,
			editState: false,
		});
	};

	deleteQuestion = (questionIndex) => {
		const itemsCopy = [...this.state.items];
		itemsCopy.splice(questionIndex, 1);
		this.setState({ items: itemsCopy });
	};

	editQuestion = (questionID) => {
		const itemsCopy = [...this.state.items];
		const questionIndex = itemsCopy.findIndex((el) => questionID === el.id);
		const copy = itemsCopy[questionIndex];

		this.setState({
			addQuestion: true,
			editState: true,
			currentItem: copy,
		});
	};

	modalOpen = () => {
		this.setState({ addQuestion: true });
	};

	modalExit = () => {
		this.setState({ currentItem: {}, addQuestion: false, editState: false });
	};

	render() {
		return (
			<Auxiliary>
				<Modal show={this.state.addQuestion} modalClosed={this.modalExit}>
					<AddQuestion
						currentItem={this.state.currentItem}
						editState={this.state.editState}
						sumbitItem={this.addNewQuestion}
						modalClosed={this.modalExit}
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
							edited={this.editQuestion}
						/>
					) : null}
					<AddButton clicked={this.modalOpen} />
				</div>
			</Auxiliary>
		);
	}
}
export default QuestionContainer;
