import React from 'react';
import Choice from './Choice/Choice';

const choices = (props) => {
	let choicesToRender;
	if (props.choices) {
		choicesToRender = props.choices.map((choice, index) => {
			return (
				<Choice key={index} choice={choice} changeValue={props.changeValue} />
			);
		});
	}

	return <div className=' my-4 pl-4'>{choicesToRender}</div>;
};

export default choices;
