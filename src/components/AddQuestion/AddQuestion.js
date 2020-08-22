import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class addQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputQuestion: '',
			inputCurrentChoice: '',
			inputCorrentAns: '',
			choices: [],
		};
	}
	handleSumbit = () => {
		this.props.handleState(this.state);
		this.props.modalClosed();

		this.setState({
			inputQuestion: '',
			inputCurrentChoice: '',
			inputCorrentAns: '',
			choices: [],
		});
	};

	questionChanged = (e) => {
		this.setState({
			...this.state,
			inputQuestion: e.target.value,
		});
	};
	answerChanged = (e) => {
		this.setState({
			...this.state,
			inputCorrentAns: e.target.value,
		});
	};
	choiceChanged = (e) => {
		this.setState({
			...this.state,
			inputCurrentChoice: e.target.value,
		});
	};
	addChoiceClicked = () => {
		let otherChoicesCopy = this.state.choices.slice();
		let currentChoice = this.state.inputCurrentChoice;
		if (currentChoice !== '') {
			otherChoicesCopy.push(currentChoice);
		} else {
			return;
		}

		this.setState({
			...this.state,
			choices: otherChoicesCopy,
			inputCurrentChoice: '',
		});
	};
	choicesChanged = (e, text) => {
		const choicesCopy = [...this.state.choices];
		const choiceIndex = choicesCopy.findIndex((el) => text === el);
		choicesCopy[choiceIndex] = e.target.value;

		this.setState((prevState, props) => {
			return {
				choices: choicesCopy,
			};
		});
	};
	render() {
		let otherChoices = this.state.choices;
		let Choices;

		if (otherChoices.length > 0) {
			Choices = otherChoices.map((el, index) => {
				return (
					<input
						className='text-2xl border-b-2 outline-none w-full my-4'
						type='text'
						placeholder='Type the other choice...'
						value={el}
						onChange={(e) => this.choicesChanged(e, el)}
						key={index}
					/>
				);
			});
		} else {
			Choices = null;
		}

		return (
			<Auxiliary>
				<div className='py-6 px-16 w-full flex flex-col'>
					<div className='mb-4'>
						<span className='block font-poppins text-2xl text-custom-primary -ml-8'>
							Question:
						</span>
						<input
							className='text-3xl border-b-2 outline-none w-full'
							type='text'
							placeholder='Type your question...'
							value={this.state.inputQuestion}
							onChange={this.questionChanged}
						/>
					</div>
					<div className=' px-16 flex flex-col'>
						<p className='block font-poppins text-2xl text-custom-primary -ml-16 '>
							Choices:
							<span className='text-xl ml-4'>
								(type the answer to the answer section)
							</span>
						</p>
						<div>
							<input
								className='text-2xl border-b-2 outline-none w-full my-4 font-semibold '
								type='text'
								placeholder='Type the answer here...'
								value={this.state.inputCorrentAns}
								onChange={this.answerChanged}
							/>
							{Choices}
							<input
								className='text-2xl border-b-2 outline-none w-full my-4'
								type='text'
								placeholder='Type the other choice...'
								value={this.state.inputCurrentChoice}
								onChange={this.choiceChanged}
							/>
						</div>
						<button
							onClick={this.addChoiceClicked}
							className='block self-end py-2 px-3 font-poppins text-custom-primary hover:text-white font-medium text-lg border-2 border-custom-primary hover:bg-custom-primary rounded'>
							+ Add Choice/s
						</button>
					</div>
					<button
						onClick={this.handleSumbit}
						className='self-end bg-custom-primary text-white font-poppins text-2xl py-2 px-10 rounded-full hover:bg-indigo-400 mt-5'>
						Submit
					</button>
				</div>
			</Auxiliary>
		);
	}
}

export default addQuestion;
