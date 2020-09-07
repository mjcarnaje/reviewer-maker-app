import React, { Component } from 'react';
import GameQuestion from '../../components/GameQuestion/GameQuestion';

export class PlayGame extends Component {
	state = {
		questions: null,
		currentQuestion: null,
		questionCounter: 0,
		total: 0,
		gameOver: false,
	};

	static getDerivedStateFromProps(props, state) {
		if (state.questions !== props.items && state.total === 0) {
			const itemsArray = props.items.map((item) => {
				const { question, choices, answer } = item;
				let objectQuestions;
				objectQuestions = {
					question: question,
					incorrect: choices,
					answer: answer,
				};
				return objectQuestions;
			});
			return {
				questions: itemsArray,
			};
		}
		return null;
	}
	handlePlay = () => {
		this.setNextQuestion();
		this.setState({
			init: false,
			total: this.state.questions.length,
		});
	};
	setNextQuestion = () => {
		const availableQuestions = [...this.state.questions];
		const questionsIndex = Math.floor(
			Math.random() * availableQuestions.length
		);

		const { incorrect, answer, question } = availableQuestions[questionsIndex];
		const shuffledChoices = [...incorrect, answer].sort(
			() => 0.5 - Math.random()
		);

		const currentQuestion = {
			question: question,
			choices: shuffledChoices,
			answer: answer,
		};

		this.incrementQuestionCounter();
		availableQuestions.splice(questionsIndex, 1);

		this.setState({
			questions: availableQuestions,
			currentQuestion: currentQuestion,
		});
	};
	incrementQuestionCounter = () => {
		this.setState((state, props) => ({
			questionCounter: state.questionCounter + 1,
		}));
	};
	checksAnswer = (userClicked) => {
		const { total, questionCounter, currentQuestion } = this.state;
		if (userClicked === currentQuestion.answer) {
			console.log('correc');
		} else {
			console.log('wrong');
		}
		if (questionCounter < total) {
			this.setNextQuestion();
		} else {
			this.finishedGame();
		}
	};
	finishedGame = () => {
		this.setState({
			gameOver: true,
		});
	};
	render() {
		const { currentQuestion, questionCounter, total, gameOver } = this.state;
		return (
			<div className='flex items-center justify-center w-screen h-screen'>
				{total === 0 && (
					<button
						className='px-3 py-2 text-white rounded-md btn bg-custom-primary font-poppins'
						onClick={this.handlePlay}
					>
						Play Game
					</button>
				)}
				{total !== 0 && !gameOver && (
					<GameQuestion
						curQuestion={currentQuestion}
						total={total}
						counter={questionCounter}
						checksAnswer={this.checksAnswer}
					/>
				)}
				{gameOver && <h1>Finished Game!!</h1>}
			</div>
		);
	}
}

export default PlayGame;
