import React from 'react';
import BuildQuestion from './Question/Question';

const questions = ({ questions, deleted, edited }) => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};

export default questions;
