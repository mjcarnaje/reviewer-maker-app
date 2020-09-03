import React from 'react';

const choice = ({ choice }) => (
	<div className='flex py-2 sm:py-0'>
		<div className='self-center mr-6 leading-4 '>-</div>
		<span className=' font-poppins text-2.5xl font-light w-full focus:outline-none bg-transparent flex-grow'>
			{choice}
		</span>
	</div>
);

export default choice;
