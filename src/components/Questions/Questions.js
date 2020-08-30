import React from 'react';
import BuildQuestion from './Question/Question';
import Auxiliary from '../../hoc/Auxiliary';

const questions = ({ questions, deleted, edited }) => {
	return (
		<Auxiliary>
			{questions.map((el, index) => {
				return (
					<BuildQuestion
						items={el}
						key={el.id}
						del={deleted}
						count={index + 1}
						edit={edited}
					/>
				);
			})}
		</Auxiliary>
	);
};

export default questions;
