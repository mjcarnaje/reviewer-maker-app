import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = (props) => {
	let classes;
	if (props.open) {
		classes = 'block';
	} else {
		classes = 'hidden';
	}
	const navStyle =
		'block font-semibold font-poppins text-xl hover:bg-indigo-300 hover:text-white text-custom-primary rounded px-2 py-1 sm:py-0 sm:ml-2 md:ml-4 lg:ml-16';
	return (
		<div
			className={`${classes} sm:justify-center sm:items-center sm:p-0 px-2 pt-2 pb-4 sm:flex`}
		>
			<NavLink
				exact
				activeStyle={{
					backgroundColor: '#82a4f3',
					color: 'white',
				}}
				className={navStyle}
				to='/'
				onClick={props.drawerToggleClicked}
			>
				Home
			</NavLink>
			<NavLink
				activeStyle={{
					backgroundColor: '#82a4f3',
					color: 'white',
				}}
				className={navStyle}
				to='/play-game'
				onClick={props.drawerToggleClicked}
			>
				Play
			</NavLink>
			<NavLink
				activeStyle={{
					backgroundColor: '#82a4f3',
					color: 'white',
				}}
				className={navStyle}
				to='/create-questions'
				onClick={props.drawerToggleClicked}
			>
				Questions
			</NavLink>
		</div>
	);
};

export default navigationItems;
