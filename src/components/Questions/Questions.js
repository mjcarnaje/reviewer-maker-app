import React from 'react';
import BuildQuestion from './Question/Question';
import Auxiliary from '../../hoc/Auxiliary';

const questions = ({ questions, deleted }) => {
	return (
		<Auxiliary>
			{questions
				? questions.map((el, index) => {
						console.log(el);
						return (
							<BuildQuestion
								items={el}
								key={el.id}
								del={deleted}
								count={index + 1}
							/>
						);
				  })
				: null}
		</Auxiliary>
	);
};

export default questions;
