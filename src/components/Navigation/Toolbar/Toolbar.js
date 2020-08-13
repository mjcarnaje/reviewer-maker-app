import React from 'react';
import './Toolbar.scss';
import NavigationItems from '../Items/Items';

const toolBar = (props) => (
	<header className="navigationBar">
		<h1 className="navigationBar__logo">ReviewerMaker</h1>
		<nav className="nav">
			<NavigationItems />
		</nav>
	</header>
);

export default toolBar;
