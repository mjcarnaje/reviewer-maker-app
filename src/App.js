import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import CreateQuestions from './containers/CreateQuestions/CreateQuestions';
import PlayGame from './containers/PlayGame/PlayGame';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
	state = {
		items: null,
		isLoading: false,
		noQuestion: false,
	};
	async componentDidMount() {
		this.setState({ isLoading: true });

		try {
			const response = await axios.get(
				'https://reviewerapp-aa8ab.firebaseio.com/items.json'
			);
			const data = await response.data;
			const items = await Object.values(data);

			this.setState({ items: [...items], isLoading: false });
		} catch (error) {
			console.log(error);
			this.setState({
				noQuestion: true,
			});
		}
	}
	updateQuestions = (newArray) => {
		this.setState({
			items: newArray,
		});
	};
	deleteQuestion = (newArray) => {
		this.setState({
			items: newArray,
		});
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<Layout>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route
								path='/play-game'
								render={() => <PlayGame items={this.state.items} />}
							/>
							<Route
								path='/create-questions'
								render={() => (
									<CreateQuestions
										items={this.state.items}
										deleteQuestion={this.deleteQuestion}
										updateQuestions={this.updateQuestions}
										isLoading={this.state.isLoading}
										noQuestion={this.state.noQuestion}
									/>
								)}
							/>
						</Switch>
					</Layout>
				</div>
			</Router>
		);
	}
}
export default App;
