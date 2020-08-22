import React from 'react';
const backdrop = (props) =>
	props.show ? (
		<div
			className='w-full h-full fixed z-100 left-0 top-0 bg-gray-700 bg-opacity-25 bd'
			onClick={props.clicked}></div>
	) : null;

export default backdrop;
