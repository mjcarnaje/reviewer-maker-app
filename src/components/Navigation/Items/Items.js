import React from 'react';
import './Items.scss';

import NavigationItem from './Item/Item';

const navigationItems = (props) => (
	<ul className="list__items">
		<NavigationItem link="#" active>
			Home
		</NavigationItem>
		<NavigationItem link="#">Play</NavigationItem>
		<NavigationItem link="#">Questions</NavigationItem>
	</ul>
);

export default navigationItems;
