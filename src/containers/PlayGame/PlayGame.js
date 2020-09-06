import React, { Component } from 'react';
import GameQuestion from '../../components/GameQuestion/GameQuestion';

export class PlayGame extends Component {
	state = {
		questions: [
			{
				question:
					'The movie 10 Things I Hate About You was based on which play by Shakespeare:',
				incorrect: [
					'Taming of the Shrew',
					'Hamlet',
					'Romeo and Juliet',
					"A MidSummer Night's Dream",
				],
				answer: 'Draco Malfoy',
			},
			{
				question: 'Which country held the 2016 Summer Olympics?',
				incorrect: ['China', 'Philippines', 'India'],
				answer: 'South Korea',
			},
			{
				question:
					'Which one of these characters is not friends with Harry Potter?',
				incorrect: [' Ron Weasley', 'Neville Longbottom', 'Hermione Granger'],
				answer: 'Draco Malfoy',
			},
		],
		currentQuestion: null,
		questionCounter: 0,
		total: 0,
		init: true,
		playGame: false,
	};
	handlePlay = () => {
		this.setNextQuestion();
		this.setState({
			playGame: true,
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
		availableQuestions.splice(questionsIndex, 1);
		this.incrementQuestionCounter();
		this.setState({
			checker: { correct: false, wrong: false },
			questions: [...availableQuestions],
			currentQuestion: currentQuestion,
		});
	};
	incrementQuestionCounter = () => {
		this.setState((state, props) => ({
			questionCounter: state.questionCounter + 1,
		}));
	};
	checksAnswer = (userClicked) => {
		if (this.state.questions.length > 0) {
			setTimeout(() => {
				this.setNextQuestion();
			}, 5000);
		} else {
			this.setState({
				playGame: false,
			});
		}
	};
	render() {
		const {
			playGame,
			init,
			currentQuestion,
			questionCounter,
			total,
		} = this.state;
		return (
			<div className='flex items-center justify-center w-screen h-screen'>
				{init && (
					<button
						className='px-3 py-2 text-white rounded-md btn bg-custom-primary font-poppins'
						onClick={this.handlePlay}
					>
						Play Game
					</button>
				)}
				{playGame && (
					<GameQuestion
						curQuestion={currentQuestion}
						total={total}
						counter={questionCounter}
						checksAnswer={this.checksAnswer}
					/>
				)}
			</div>
		);
	}
}

export default PlayGame;
