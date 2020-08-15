import React from 'react';

import './Button.scss';

const button = ({ classes, clicked, disable, children }) => {
	const name = classes
		.split(' ')
		.map((el) => el)
		.join(' ');

	return (
		<button className={name} onClick={clicked} disabled={disable}>
			{children}
		</button>
	);
};

export default button;
