import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GameQuestion from '../components/GameQuestion';
import Spinner from '../components/UI/Spinner/Spinner';
import add_question from './../assets/svg/add_question.svg';
import start_question from './../assets/svg/start_question.svg';

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
		} else if (!this.props.isLoading && this.props.noQuestion) {
			spinner = (
				<div className='w-full text-center'>
					<img
						src={add_question}
						alt='add_question'
						className='w-10/12 px-4 py-6 m-auto sm:w-8/12 md:w-6/12 lg:w-5/12'
					/>
					<a
						href='/create-questions'
						className='inline-block px-3 py-2 mt-3 text-lg text-white border-none rounded font-poppins bg-custom-primary hover:bg-indigo-400 focus:outline-none'
					>
						Create Question/s
					</a>
				</div>
			);
		} else {
			spinner = (
				<div className='w-full text-center'>
					<img
						src={start_question}
						alt='start_question'
						className='w-10/12 px-4 py-6 m-auto sm:w-8/12 md:w-6/12 lg:w-5/12'
					/>
					<button
						className='px-3 py-2 mt-3 text-white rounded-md btn bg-custom-primary font-poppins'
						onClick={this.handlePlay}
					>
						Start Quiz
					</button>
				</div>
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
					<div className='w-10/12 py-3 bg-gray-100 rounded sm:w-8/12 md:w-7/12 lg:w-6/12'>
						<h1 className='py-2 text-3xl font-semibold text-center sm:text-4xl font-poppins text-custom-primary '>
							Quiz Results
						</h1>
						<table className='w-10/12 mx-auto my-2 text-lg table-auto font-poppins'>
							<tbody>
								<tr>
									<td className='px-4 py-2 border '>Total Question</td>
									<td className='px-4 py-2 border'>{`${total}`}</td>
								</tr>
								<tr>
									<td className='px-4 py-2 border'>Correct</td>
									<td className='px-4 py-2 border'>{`${correctAnswered}`}</td>
								</tr>
								<tr>
									<td className='px-4 py-2 border'>Wrong</td>
									<td className='px-4 py-2 border'>{`${
										total - correctAnswered
									}`}</td>
								</tr>
								<tr>
									<td className='px-4 py-2 border'>Percentage</td>
									<td className='px-4 py-2 border'>{`${(
										(correctAnswered / total) *
										100
									).toFixed(2)}%`}</td>
								</tr>
								<tr>
									<td className='px-4 py-2 font-medium border'>Total Score</td>
									<td className='px-4 py-2 font-semibold border'>{`${correctAnswered} / ${total}`}</td>
								</tr>
							</tbody>
						</table>
						<div className='flex items-center justify-center text-center text-white'>
							<button
								onClick={this.playAgain}
								className='inline-block w-auto px-2 py-1 mx-2 my-1 rounded md:my-2 md:mx-3 bg-custom-primary font-montserrat'
							>
								Play Again
							</button>
							<Link to='/create-questions'>
								<button className='w-auto px-2 py-1 mx-2 my-1 rounded btn md:my-2 md:mx-3 bg-custom-primary font-montserrat'>
									Questions
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default PlayGame;
