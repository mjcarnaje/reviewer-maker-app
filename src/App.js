//node_module
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ls from 'local-storage';
//local module
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import CreateQuestions from './containers/CreateQuestions/CreateQuestions';
import PlayGame from './containers/PlayGame/PlayGame';

class App extends Component {
	state = {
		items: null,
		isLoading: false,
		noQuestion: false,
	};
	componentDidMount() {
		const lsItems = ls.get('items');
		this.setState({
			isLoading: true,
		});
		if (lsItems.length === 0) {
			this.setState({
				isLoading: false,
				items: [],
				noQuestion: true,
			});
		} else {
			this.setState({
				items: lsItems,
				isLoading: false,
			});
		}
	}
	updateQuestions = (newArray) => {
		this.setState({
			items: newArray,
			noQuestion: false,
		});
		ls.set('items', newArray);
	};
	deleteQuestion = (newArray) => {
		if (newArray.length === 0) {
			this.setState({
				items: newArray,
				noQuestion: true,
			});
		} else {
			this.setState({
				items: newArray,
			});
		}
		ls.set('items', newArray);
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
								render={() => (
									<PlayGame
										items={this.state.items}
										isLoading={this.state.isLoading}
										noQuestion={this.state.noQuestion}
									/>
								)}
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
