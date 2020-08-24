import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class addQuestion extends Component {
	state = {
		id: this.props.currentItem.id,
		inputQuestion: this.props.currentItem.question,
		inputCorrentAns: this.props.currentItem.answer,
		choices: [],
		inputCurrentChoice: '',
	};

	UNSAFE_componentWillMount() {
		if (this.props.editState) {
			const choicesCopy = [...this.props.currentItem.choices];
			const currentChoiceCopy = choicesCopy.pop();
			this.setState({
				inputCurrentChoice: currentChoiceCopy,
				choices: choicesCopy,
			});
		}
	}
	handleSumbit = () => {
		this.props.sumbitItem(this.state);
		this.props.modalClosed();
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
						className='block w-full py-1 mx-auto my-0 text-lg border-b-2 focus:outline-none'
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
				<div className=' w-85vw sm:w-70vw md:w-60vh'>
					<div className=''>
						<span className='block text-2.5xl font-poppins text-custom-primary'>
							Question:
						</span>
						<div className='text-center'>
							<input
								className='block w-full text-xl border-b-2 focus:outline-none'
								type='text'
								placeholder='Type your question...'
								value={this.state.inputQuestion}
								onChange={this.questionChanged}
							/>
						</div>
					</div>
					<div className='clearfix py-3'>
						<p className='text-2.5xl font-poppins text-custom-primary'>
							Choices:
							<span className='pl-2 text-sm'>
								(type the answer to the answer section)
							</span>
						</p>
						<div className='block w-10/12 mx-auto my-1'>
							<input
								className='block w-full py-1 mx-auto my-0 text-lg font-semibold border-b-2 focus:outline-none'
								type='text'
								placeholder='Type the answer here...'
								value={this.state.inputCorrentAns}
								onChange={this.answerChanged}
							/>
							{Choices}
							<input
								className='block w-full py-1 mx-auto my-0 text-lg border-b-2 focus:outline-none'
								type='text'
								placeholder='Type the other choice...'
								value={this.state.inputCurrentChoice}
								onChange={this.choiceChanged}
							/>
						</div>
						<button
							onClick={this.addChoiceClicked}
							className='float-right px-3 py-2 my-1 text-xs text-white rounded font-poppins bg-custom-primary focus:outline-none hover:bg-indigo-400'>
							+ Other choice
						</button>
					</div>
					<button
						onClick={this.handleSumbit}
						className='block px-5 py-1 mx-auto my-1 text-base text-white rounded-full bg-custom-primary font-poppins focus:outline-none hover:bg-indigo-500'>
						{this.props.editState ? 'Update' : 'Submit'}
					</button>
				</div>
			</Auxiliary>
		);
	}
}

export default addQuestion;
