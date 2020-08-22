import React from 'react';

import Choices from './Choices/Choices';

const buildQuestion = ({
	items: { question, answer, choices },
	del,
	count,
}) => {
	return (
		<div className='rounded-lg bg-gray-100 py-6 px-8 justify-between border-gray-200 mx-auto my-0 w-10/12 flex mt-4'>
			<div className=' text-2xl bg-custom-primary text-center w-12 h-12 leading-none py-3 rounded-lg text-white font-poppins'>
				{count}
			</div>
			<div className='font-poppins flex-1 pl-16 pr-8'>
				<span className='text-2.5xl font-light'>{question}</span>

				<Choices choices={choices} />
				<div className='mt-6 flex'>
					<span className='mr-6 text-3xl font-medium'>Answer:</span>
					<span className='font-light text-3xl '>{answer}</span>
				</div>
			</div>
			<svg
				viewBox='0 0 20 20'
				className='pencil w-8 h-8 text-custom-primary fill-current cursor-pointer mr-2'>
				<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
			</svg>
			<svg
				onClick={del}
				viewBox='0 0 20 20'
				className='h-8 w-8 fill-current text-red-500 cursor-pointer'>
				<path
					fillRule='evenodd'
					d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
					clipRule='evenodd'></path>
			</svg>
		</div>
	);
};

export default buildQuestion;
