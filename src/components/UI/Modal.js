import React from 'react';

const modal = ({ show, modalClosed, children }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains('bg-gray-700')) {
			modalClosed();
		}
	};
	return (
		<React.Fragment>
			{show && (
				<div
					className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-700 bg-opacity-25 z-100 bd'
					onClick={handleClick}
				>
					<div className='p-6 bg-white rounded-md shadow-md z-200'>
						{show && children}
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default modal;
