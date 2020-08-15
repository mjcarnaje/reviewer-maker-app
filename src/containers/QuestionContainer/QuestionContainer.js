import React, { Component } from 'react';
import './QuestionContainer.scss';

import Auxiliary from '../../hoc/Auxiliary';
import BuildQuestion from '../../components/Question/Question';

class QuestionContainer extends Component {
	render() {
		return (
			<Auxiliary>
				<div className="questions-container">
					<h1 className="question__heading">Create Your Questions:</h1>
					<BuildQuestion
						question={'Who is the author of the manga called "One Piece"'}
						answer={'Eiichiro Oda'}
						count={'1'}
					/>
					<BuildQuestion
						question={'What is the most beautiful city in the USA'}
						answer={'San Fransico'}
						count={'2'}

					/>
					<BuildQuestion
						question={'Who is the best basketball player in the World'}
						answer={'Michael Jordan'}
						count={'3'}

					/>
				</div>
			</Auxiliary>
		);
	}
}
export default QuestionContainer;
