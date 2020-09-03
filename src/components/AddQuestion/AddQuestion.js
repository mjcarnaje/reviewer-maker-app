import React, { Component } from 'react';

class addQuestion extends Component {
	state = {
		id: null,
		question: '',
		correct: '',
		choices: [],
		curChoice: '',
	};
	componentDidMount() {
		if (this.props.editState) {
			const cur = this.props.currentItem;
			const curChoices = [...cur.choices];
			const curChoice = curChoices.pop();

			this.setState({
				id: cur.id,
				question: cur.question,
				correct: cur.answer,
				curChoice: curChoice,
				choices: curChoices,
			});
		}
	}
	handleSumbit = () => {
		if (
			this.state.question !== '' &&
			this.state.correct !== '' &&
			this.state.curChoice !== '' &&
			this.state.choices !== []
		) {
			this.props.sumbitItem(this.state);
		} else {
			alert('Provide all the details');
		}
	};
	keyDown = (e) => {
		if (e.keyCode === 13) {
			this.handleSumbit();
		} else if (e.keyCode === 9) {
			e.preventDefault();
			this.addChoiceClicked();
		}
	};
	addChoiceClicked = () => {
		const choicesCopy = this.state.choices.slice();
		const currentChoice = this.state.curChoice;
		if (currentChoice !== '') {
			choicesCopy.push(currentChoice);
			this.textInput.focus();
		} else {
			return;
		}
		this.setState({
			choices: choicesCopy,
			curChoice: '',
		});
	};
	choicesChanged = (e, text) => {
		const choicesCopy = [...this.state.choices];
		const choiceIndex = choicesCopy.findIndex((el) => text === el);
		choicesCopy[choiceIndex] = e.target.value;

		this.setState({
			choices: choicesCopy,
		});
	};
	render() {
		const otherChoices = this.state.choices;
		let Choices = null;

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
		}

		return (
			<React.Fragment>
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
								value={this.state.question}
								onChange={(event) =>
									this.setState({ question: event.target.value })
								}
								autoFocus
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
								value={this.state.correct}
								onChange={(event) =>
									this.setState({ correct: event.target.value })
								}
							/>
							{Choices}
							<input
								className='block w-full py-1 mx-auto my-0 text-lg border-b-2 focus:outline-none'
								type='text'
								placeholder='Type the other choice...'
								value={this.state.curChoice}
								onChange={(event) =>
									this.setState({ curChoice: event.target.value })
								}
								onKeyDown={this.keyDown}
								ref={(el) => {
									this.textInput = el;
								}}
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
			</React.Fragment>
		);
	}
}

export default addQuestion;
