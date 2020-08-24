import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
	return (
		<Auxiliary>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			{props.show ? (
				<div
					className='fixed p-6 bg-white rounded-md shadow-md opacity-0 z-200 center trans'
					style={{
						transform: props.show
							? 'translate(-50%, -50%)'
							: 'translate(-50%, -200%)',
						opacity: props.show ? '1' : '0',
					}}>
					{props.children}
				</div>
			) : null}
		</Auxiliary>
	);
};

export default modal;
