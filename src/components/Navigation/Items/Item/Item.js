import React from 'react';

import './Item.scss';

const navigationItem = (props) => (
	<li className="list__item">
		<a
			href={props.link}
			className={props.active ? 'list__text list__text--active' : 'list__text'}
		>
			{props.children}
		</a>
	</li>
);
export default navigationItem;
