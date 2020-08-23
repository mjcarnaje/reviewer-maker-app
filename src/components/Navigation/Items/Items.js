import React from 'react';

import NavigationItem from './Item/Item';

const navigationItems = (props) => {
	let classes;
	if (props.open) {
		classes = 'block px-2 pt-2 pb-4';
	} else {
		classes = 'hidden px-2 pt-2 pb-4';
	}

	return (
		<div
			className={`${classes} sm:flex sm:justify-center sm:items-center sm:p-0`}>
			<NavigationItem link='#' active>
				Home
			</NavigationItem>
			<NavigationItem link='#' center>
				Play
			</NavigationItem>
			<NavigationItem link='#' last>
				Questions
			</NavigationItem>
		</div>
	);
};

export default navigationItems;
