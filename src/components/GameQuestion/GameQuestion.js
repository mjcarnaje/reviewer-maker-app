import React from 'react';

const GameQuestion = ({
	curQuestion: { question, choices, answer },
	nextQuestion,
	total,
	counter,
}) => {
	const choicesRef = [];
	const checksAns = (userClicked) => {
		const clickedStyles = choicesRef[userClicked].style;
		const answerStyles = choicesRef[answer].style;

		if (userClicked === answer) {
			clickedStyles.backgroundColor = '#14C223';
			clickedStyles.color = 'white';
		} else {
			clickedStyles.backgroundColor = '#C91F41';
			answerStyles.backgroundColor = '#14C223';
			clickedStyles.color = 'white';
			answerStyles.color = 'white';
		}
		setTimeout(() => nextQuestion(), 1000);
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
						<div
							className={`py-3 my-3 text-center shadow rounded-xl bg-white`}
							key={choice}
							ref={(ref) => (choicesRef[choice] = ref)}
							onClick={() => checksAns(choice)}
						>
							<p className='px-4 text-lg font-medium break-words font-poppins'>
								{choice}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex items-center justify-center w-full py-4'>
				<button
					className='px-3 py-2 text-sm text-center text-white rounded-md btn bg-custom-primary font-poppins'
					onClick={() => nextQuestion()}
				>
					Skip Question
				</button>
			</div>
		</div>
	);
};

export default GameQuestion;
