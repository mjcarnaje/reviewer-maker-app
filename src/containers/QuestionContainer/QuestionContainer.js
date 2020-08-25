import React, { Component } from 'react';
import nextId from 'react-id-generator';

import Auxiliary from '../../hoc/Auxiliary';
import AddButton from '../../components/UI/Button/AddButton/AddButton';
import Questions from '../../components/Questions/Questions';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import Modal from '../../components/UI/Modal/Modal';
class QuestionContainer extends Component {
	state = {
		items: [],
		currentItem: {},
		editState: false,
		addQuestion: false,
	};
	updateQuestions = ({ question, correct, curChoice, choices, id }) => {
		const newArray = [...this.state.items];
		const questionIndex = this.state.items.findIndex((el) => el.id === id);
		if (!id) {
			newArray.push({
				id: nextId(),
				question: question,
				choices: [...choices, curChoice],
				answer: correct,
			});
		} else {
			newArray[questionIndex] = {
				id,
				question: question,
				choices: [...choices, curChoice],
				answer: correct,
			};
		}
		this.setState({
			items: newArray,
			editState: false,
			addQuestion: false,
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
		const curItem = itemsCopy[questionIndex];

		this.setState({
			addQuestion: true,
			editState: true,
			currentItem: curItem,
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
						sumbitItem={this.updateQuestions}
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
