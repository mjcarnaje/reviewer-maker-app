import React from 'react';

const GameQuestion = ({ curQuestion, checksAnswer, total, counter }) => {
	const { question, choices, answer } = curQuestion;

	const checksAns = (selectedChoice) => {
		if (selectedChoice === answer) {
			console.log('correct');
		}
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
							onClick={() => checksAns(choice)}
						>
							<p className='px-4 text-lg font-medium break-words font-poppins'>
								{choice}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GameQuestion;
