import React from 'react';

import './Question.scss';
import Choices from './Choices/Choices';

const buildQuestion = (props) => (
	<div className="buildQuestion-container">
		<div className="buildQuestion-container__counter">1</div>
		<div className="buildQuestion">
			<h2 className="buildQuestion__question">{props.question}</h2>
			<Choices />
			<h3 className="buildQuestion__answer">
				<span className="buildQuestion__span">Answer:</span>
				{props.answer}
			</h3>
		</div>
		<div className="buildQuestion-container__remove">x</div>
	</div>
);

export default buildQuestion;
