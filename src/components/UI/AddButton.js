import React from 'react';

const AddButton = (props) => (
	<div className='flex items-center py-3 mx-2 sm:mx-4 md:mx-6'>
		<button
			className='w-10 h-10 cursor-pointer focus:outline-none'
			onClick={props.clicked}>
			<svg
				viewBox='0 0 20 20'
				className='w-full h-full fill-current plus-circle text-custom-primary hover:text-indigo-400'>
				<path
					fillRule='evenodd'
					d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
					clipRule='evenodd'></path>
			</svg>
		</button>
		<span
			className='ml-2 text-2xl font-normal font-poppins'
			onClick={props.clicked}>
			Add Question
		</span>
	</div>
);

export default AddButton;
