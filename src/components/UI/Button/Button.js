import React from 'react';

import styles from './Button.module.scss';

const button = ({ classes, clicked, disable, children }) => {
	const name = classes
		.split(' ')
		.map((el) => styles[el])
		.join(' ');

	return (
		<button className={name} onClick={clicked} disabled={disable}>
			{children}
		</button>
	);
};

export default button;
