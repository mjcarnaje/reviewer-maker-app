import React from 'react';

const buildQuestion = ({ items, del, count, edit }) => {
	const { id, question, choices, answer } = items;
	return (
		<div className='flex justify-between px-4 py-6 mx-2 my-4 bg-gray-100 rounded-lg sm:mx-4 md:mx-6 '>
			<div className='text-lg leading-none font-poppins'>
				<div className='flex items-center justify-center w-6 h-6 text-white rounded bg-custom-primary'>
					{count}
				</div>
			</div>
			<div className='flex-grow px-2 break-all sm:px-3 font-poppins'>
				<span className=' text-xl text-2.5xl font-light'>{question}</span>
				{choices.map((choice) => {
					return (
						<div className='flex py-2 sm:py-0' key={choice}>
							<div className='self-center mr-6 leading-4 '>-</div>
							<span className=' font-poppins text-2.5xl font-light w-full focus:outline-none bg-transparent flex-grow'>
								{choice}
							</span>
						</div>
					);
				})}
				<div className='flex items-center'>
					<span className='mr-3 text-base font-semibold break-normal sm:text-lg'>
						Answer:
					</span>
					<span className='text-base font-light sm:text-xl'>{answer}</span>
				</div>
			</div>
			<div className='flex'>
				<svg
					onClick={() => edit(id)}
					viewBox='0 0 20 20'
					className='w-5 h-5 mr-1 cursor-pointer fill-current sm:w-6 sm:h-6 pencil text-custom-primary'
				>
					<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
				</svg>
				<svg
					onClick={() => del(id)}
					viewBox='0 0 20 20'
					className='w-5 h-5 text-red-500 cursor-pointer fill-current sm:w-6 sm:h-6'
				>
					<path
						fillRule='evenodd'
						d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
		</div>
	);
};

export default buildQuestion;
