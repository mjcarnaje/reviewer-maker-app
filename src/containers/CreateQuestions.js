import React, { Component } from 'react';
import uniqid from 'uniqid';

import AddButton from '../components/UI/AddButton';

import BuildQuestion from '../components/Question';
import AddQuestion from '../components/AddQuestion';
import Modal from '../components/UI/Modal';
import Spinner from '../components/UI/Spinner/Spinner';
import create_question from '../assets/svg/create_question.svg';
class CreateQuestions extends Component {
	state = {
		items: null,
		currentItem: {},
		editState: false,
		showModal: false,
	};
	static getDerivedStateFromProps(props, state) {
		if (state.items !== props.items) {
			return {
				items: props.items,
			};
		}
		return null;
	}
	updateQuestions = ({ question, correct, choices, curChoice, id }) => {
		let newArray = [...this.state.items] || [];
		const questionIndex = this.state.items.findIndex((el) => el.id === id);
		const filteredChoices = choices.filter((el) => el);

		if (!id) {
			const newQuestion = {
				id: uniqid(),
				question: question,
				choices: [...filteredChoices, curChoice],
				answer: correct,
			};
			newArray.push({ ...newQuestion });
		} else {
			newArray[questionIndex] = {
				id: id,
				question: question,
				choices: [...filteredChoices, curChoice],
				answer: correct,
			};
		}
		this.setState({
			editState: false,
			showModal: false,
		});
		this.props.updateQuestions(newArray);
	};

	deleteQuestion = (questionID) => {
		const itemsCopy = [...this.state.items];
		const questionIndex = itemsCopy.findIndex((el) => questionID === el.id);
		itemsCopy.splice(questionIndex, 1);
		this.props.deleteQuestion(itemsCopy);
	};

	editQuestion = (questionID) => {
		const itemsCopy = [...this.state.items];
		const questionIndex = itemsCopy.findIndex((el) => questionID === el.id);
		const curItem = itemsCopy[questionIndex];

		this.setState({
			showModal: true,
			editState: true,
			currentItem: curItem,
		});
	};

	modalOpen = () => {
		this.setState({ showModal: true });
	};

	modalExit = () => {
		this.setState({ currentItem: {}, showModal: false, editState: false });
	};

	render() {
		const questions = this.state.items;
		let spinner;
		if (this.props.isLoading && !this.props.noQuestion) {
			spinner = <Spinner />;
		} else if (!this.props.isLoading && this.props.noQuestion) {
			spinner = (
				<img
					src={create_question}
					alt='add_question'
					className='w-10/12 px-4 py-6 m-auto sm:w-8/12 '
				/>
			);
		} else {
			spinner = null;
		}

		return (
			<React.Fragment>
				<Modal show={this.state.showModal} modalClosed={this.modalExit}>
					<AddQuestion
						currentItem={this.state.currentItem}
						editState={this.state.editState}
						sumbitItem={this.updateQuestions}
					/>
				</Modal>
				<div className='min-h-screen px-3 py-24 sm:px-10 md:px-24 lg:px-64'>
					{spinner}
					{questions &&
						questions.map((el, index) => {
							return (
								<BuildQuestion
									items={el}
									key={el.id}
									del={this.deleteQuestion}
									count={index + 1}
									edit={this.editQuestion}
								/>
							);
						})}
					<AddButton clicked={this.modalOpen} />
				</div>
			</React.Fragment>
		);
	}
}
export default CreateQuestions;
