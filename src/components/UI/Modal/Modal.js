import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
	return (
		<Auxiliary>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className=' z-200 bg-white shadow-md p-6 fixed center trans rounded-md opacity-0'
				style={{
					transform: props.show
						? 'translate(-50%, -50%)'
						: 'translate(-50%, -200%)',
					opacity: props.show ? '1' : '0',
				}}>
				{props.children}
			</div>
		</Auxiliary>
	);
};

export default modal;
