import React from 'react';

import './Choices.scss';
import Choice from './Choice/Choice';

const choices = (props) => (
	<div className="choices-container">
		<Choice>JYP</Choice>
		<Choice>Naruto</Choice>
		<Choice>Eiichiro Oda</Choice>
	</div>
);

export default choices;
