import React from 'react';

const toolBar = (props) => (
	<nav className='flex items-center justify-center px-4 py-3 shadow sm:p-0 sm:shadow-none'>
		<h1 className='flex-1 text-3xl font-berkshire text-custom-primary'>
			ReviewerMaker
		</h1>
		<div className='sm:hidden'>
			<button
				className='text-custom-primary focus:text-indigo-400 focus:outline-none'
				onClick={props.drawerToggleClicked}>
				<svg viewBox='0 0 20 20' className='w-10 h-10 fill-current'>
					{props.close ? (
						<path
							fillRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clipRule='evenodd'></path>
					) : (
						<path
							fillRule='evenodd'
							d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
							clipRule='evenodd'
						/>
					)}
				</svg>
			</button>
		</div>
	</nav>
);

export default toolBar;
