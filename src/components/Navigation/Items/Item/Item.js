import React from 'react';

const navigationItem = (props) => {
	const classesConstant =
		'block font-semibold font-poppins text-xl hover:bg-indigo-300 hover:text-white rounded px-2 py-1 sm:py-0 sm:ml-2 md:ml-4 lg:ml-16';
	let classes;
	if (props.active) {
		classes = `${classesConstant} text-white bg-custom-primary`;
	} else {
		classes = `${classesConstant} text-custom-primary`;
	}

	return (
		<a href={props.link} className={classes}>
			{props.children}
		</a>
	);
};
export default navigationItem;
