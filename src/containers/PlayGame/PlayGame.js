import React, { Component } from 'react';
import GameQuestion from '../../components/GameQuestion/GameQuestion';
import Spinner from '../../components/UI/Spinner/Spinner';

export class PlayGame extends Component {
	state = {
		questions: null,
		currentQuestion: null,
		correctAnswered: 0,
		questionCounter: 0,
		total: 0,
		gameOver: false,
		isPlayAgain: false,
	};

	static getDerivedStateFromProps(props, state) {
		if (
			(state.questions !== props.items && state.total === 0) ||
			state.isPlayAgain
		) {
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
		this.setState({
			total: this.state.questions.length,
			isPlayAgain: false,
		});
		this.setNextQuestion();
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
	nextQuestion = (isCorrect) => {
		const { questionCounter, total } = this.state;
		if (questionCounter < total) {
			this.setNextQuestion();
		} else {
			this.setState({
				gameOver: true,
			});
		}
		if (isCorrect) {
			this.setState((state, props) => ({
				correctAnswered: state.correctAnswered + 1,
			}));
		}
	};

	playAgain = async () => {
		await this.setState({
			isPlayAgain: true,
			gameOver: false,
			questionCounter: 0,
			correctAnswered: 0,
		});
		await this.handlePlay();
	};

	render() {
		const {
			currentQuestion,
			questionCounter,
			total,
			gameOver,
			correctAnswered,
		} = this.state;

		let spinner;
		if (this.props.isLoading && !this.props.noQuestion) {
			spinner = <Spinner />;
		} else if (
			!this.props.isLoading &&
			this.props.noQuestion &&
			!this.state.questions
		) {
			spinner = (
				<a
					href='/create-questions'
					className='inline-block px-3 py-2 text-xl text-white border-none rounded sm:text-2xl font-poppins bg-custom-primary hover:bg-indigo-400 focus:outline-none'
				>
					Create Question/s
				</a>
			);
		} else {
			spinner = (
				<button
					className='px-3 py-2 text-white rounded-md btn bg-custom-primary font-poppins'
					onClick={this.handlePlay}
				>
					Start Quiz
				</button>
			);
		}

		return (
			<div className='flex items-center justify-center w-screen h-screen'>
				{total === 0 && spinner}
				{total !== 0 && !gameOver && (
					<GameQuestion
						curQuestion={currentQuestion}
						total={total}
						counter={questionCounter}
						nextQuestion={this.nextQuestion}
					/>
				)}
				{gameOver && (
					<div>
						<h1>{`${correctAnswered} / ${total}`}</h1>
						<a href='/'>Go to Home</a>
						<button onClick={this.playAgain}>Play Again</button>
						<a href='/create-questions	'>Create More Question</a>
					</div>
				)}
			</div>
		);
	}
}

export default PlayGame;
