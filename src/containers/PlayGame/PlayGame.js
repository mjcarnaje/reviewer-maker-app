import React, { Component } from 'react';

export class PlayGame extends Component {
	state = {
		currentItem: {
			question:
				'The movie 10 Things I Hate About You was based on which play by Shakespeare:',
			choices: [
				'Taming of the Shrew',
				'Hamlet',
				'Romeo and Juliet',
				"A MidSummer Night's Dream",
			],
			answer: 'Draco Malfoy',
		},
	};
	render() {
		const { question, choices } = this.state.currentItem;
		return (
			<div className=' pt-navigation bg-white'>
				<div
					className='w-full bg-custom-primary flex flex-col justify-center py-12 rounded-b-xl
				'>
					<div className='w-90vw md:w-70vw lg:w-60vw mx-auto'>
						<h2 className=' block text-xl text-white font-poppins font-medium pl-4 pb-2'>
							Question 1 <span className=' text-base '>/4</span>
						</h2>
						<div className='bg-white font-poppins text-xl font-medium py-10 px-3 w-full mx-auto rounded-xl text-center'>
							{question}
						</div>
					</div>
				</div>
				<div className='px-4 sm:px-20'>
					<div className='bg-indigo-100 w-full -mt-6 px-4 py-3 z-10 rounded-xxl md:w-7/12 lg:w-6/12 mx-auto'>
						{choices.map((choice, index) => (
							<div
								className='bg-white py-3 text-center rounded-xl shadow my-3'
								key={index}>
								<p className='font-poppins font-medium text-lg break-words px-4'>
									{choice}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default PlayGame;
