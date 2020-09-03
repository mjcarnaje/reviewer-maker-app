import React, { Component } from 'react';
import axios from 'axios';
import nextId from 'react-id-generator';

import AddButton from '../../components/UI/Button/AddButton/AddButton';
import Questions from '../../components/Questions/Questions';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
class CreateQuestions extends Component {
	state = {
		items: null,
		currentItem: {},
		editState: false,
		addQuestion: false,
		isLoading: false,
		setQuestion: false,
	};
	componentDidMount() {
		this.setState({ isLoading: true });

		axios
			.get('https://reviewerapp-aa8ab.firebaseio.com/items.json')
			.then((response) => {
				const res = response.data;
				const data = Object.values(res);
				this.setState({ items: [...data], isLoading: false });
				console.log(res);
			})
			.catch((err) => this.setState({ setQuestion: true }));
	}
	updateQuestions = ({ question, correct, choices, curChoice, id }) => {
		let newArray = [];
		let questionIndex;
		if (this.state.items) {
			newArray = [...this.state.items];
			questionIndex = this.state.items.findIndex((el) => el.id === id);
		}
		if (!id) {
			const newQuestion = {
				id: nextId(),
				question: question,
				choices: [...choices, curChoice],
				answer: correct,
			};
			newArray.push({ ...newQuestion });
			axios
				.post(
					`https://reviewerapp-aa8ab.firebaseio.com/items.json`,
					newQuestion
				)
				.then((res) => console.log(res));
		} else {
			newArray[questionIndex] = {
				id: id,
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

	deleteQuestion = (questionID) => {
		const itemsCopy = [...this.state.items];
		const questionIndex = itemsCopy.findIndex((el) => questionID === el.id);
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
		let spinner;
		if (this.state.isLoading && !this.state.setQuestion) {
			spinner = <Spinner />;
		} else if (this.state.isLoading && this.state.setQuestion) {
			spinner = (
				<h1 className='pt-6 pb-3 text-3xl font-light text-center text-gray-800 font-poppins'>
					Create First Your Question
				</h1>
			);
		} else {
			spinner = null;
		}

		return (
			<React.Fragment>
				<Modal show={this.state.addQuestion} modalClosed={this.modalExit}>
					<AddQuestion
						currentItem={this.state.currentItem}
						editState={this.state.editState}
						sumbitItem={this.updateQuestions}
					/>
				</Modal>
				<div className='min-h-screen px-3 py-24 sm:px-10 md:px-24 lg:px-64'>
					{spinner}
					{this.state.items ? (
						<Questions
							questions={this.state.items}
							deleted={this.deleteQuestion}
							edited={this.editQuestion}
						/>
					) : null}
					<AddButton clicked={this.modalOpen} />
				</div>
			</React.Fragment>
		);
	}
}
export default CreateQuestions;
