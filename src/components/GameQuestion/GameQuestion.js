import React, { useState } from 'react';

const GameQuestion = ({
	curQuestion: { question, choices, answer },
	nextQuestion,
	total,
	counter,
}) => {
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(null);
	const choicesRef = [];

	const checksAns = (userClicked) => {
		if (userClicked === answer) {
			choicesRef[userClicked].style['backgroundColor'] = '#14C223';
			choicesRef[userClicked].style['color'] = '#fff';
			setIsCorrect(true);
		} else {
			choicesRef[userClicked].style['backgroundColor'] = '#C91F41';
			choicesRef[userClicked].style['color'] = '#fff';
			choicesRef[answer].style['backgroundColor'] = '#14C223';
			choicesRef[answer].style['color'] = '#fff';
			setIsCorrect(false);
		}
		setIsAnswered(true);
	};
	const nextButtonClicked = () => {
		setIsAnswered(false);
		setIsCorrect(null);
		nextQuestion(isCorrect);
	};
	return (
		<div className='w-full h-full bg-white pt-navigation '>
			<div className='flex flex-col justify-center w-full py-12 bg-custom-primary rounded-b-xl '>
				<div className='mx-auto w-90vw md:w-70vw lg:w-60vw'>
					<h2 className='block pb-2 pl-4 text-xl font-medium text-white font-poppins'>
						Question {counter} <span className='text-base '>/{total}</span>
					</h2>
					<div className='w-full px-3 py-10 mx-auto text-xl font-medium text-center bg-white font-poppins rounded-xl'>
						{question}
					</div>
				</div>
			</div>
			<div className='px-4 sm:px-20'>
				<div className='z-10 w-full px-4 py-3 mx-auto -mt-6 bg-indigo-100 rounded-xxl md:w-7/12 lg:w-6/12'>
					{choices.map((choice) => (
						<button
							className='block w-full py-3 my-3 text-center bg-white shadow cursor-pointer rounded-xl focus:outline-none'
							key={choice}
							ref={(ref) => (choicesRef[choice] = ref)}
							disabled={isAnswered}
							onClick={() => checksAns(choice)}
						>
							<p className='px-4 text-lg font-medium break-words font-poppins'>
								{choice}
							</p>
						</button>
					))}
				</div>
			</div>
			<div className='flex items-center justify-center w-full py-4'>
				{isAnswered && (
					<button
						className='px-3 py-2 text-sm text-center text-white rounded-md btn bg-custom-primary font-poppins'
						onClick={() => nextButtonClicked()}
					>
						{total === counter ? 'See Results' : 'Next Question'}
					</button>
				)}
			</div>
		</div>
	);
};

export default GameQuestion;
