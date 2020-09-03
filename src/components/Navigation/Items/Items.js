import React from 'react';

import NavigationItem from './Item/Item';

const navigationItems = (props) => {
	let classes;
	if (props.open) {
		classes = 'block';
	} else {
		classes = 'hidden';
	}

	return (
		<div
			className={`${classes} sm:justify-center sm:items-center sm:p-0 px-2 pt-2 pb-4 sm:flex`}>
			<NavigationItem link='/home' active>
				Home
			</NavigationItem>
			<NavigationItem link='/play-game'>Play</NavigationItem>
			<NavigationItem link='/create-questions'>Questions</NavigationItem>
		</div>
	);
};

export default navigationItems;
