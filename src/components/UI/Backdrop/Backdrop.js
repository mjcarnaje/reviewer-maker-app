import React from 'react';
const backdrop = (props) =>
	props.show ? (
		<div
			className='fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-25 z-100 bd'
			onClick={props.clicked}></div>
	) : null;

export default backdrop;
