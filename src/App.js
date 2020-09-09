//node_module
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import localStorage from 'local-storage';
//local module
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home';
import CreateQuestions from './containers/CreateQuestions';
import PlayGame from './containers/PlayGame';

class App extends Component {
	state = {
		items: null,
		isLoading: false,
		noQuestion: false,
	};
	componentDidMount() {
		const localStorageItems = localStorage.get('items');
		this.setState({
			isLoading: true,
		});
		if (localStorageItems.length === 0) {
			this.setState({
				isLoading: false,
				items: [],
				noQuestion: true,
			});
		} else {
			this.setState({
				items: localStorageItems,
				isLoading: false,
			});
		}
	}
	updateQuestions = (newArray) => {
		this.setState({
			items: newArray,
			noQuestion: false,
		});
		localStorage.set('items', newArray);
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
		localStorage.set('items', newArray);
	};

	render() {
		return (
			<Layout>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/quiz'>
						<PlayGame
							items={this.state.items}
							isLoading={this.state.isLoading}
							noQuestion={this.state.noQuestion}
						/>
					</Route>
					<Route path='/create-questions'>
						<CreateQuestions
							items={this.state.items}
							deleteQuestion={this.deleteQuestion}
							updateQuestions={this.updateQuestions}
							isLoading={this.state.isLoading}
							noQuestion={this.state.noQuestion}
						/>
					</Route>
				</Switch>
			</Layout>
		);
	}
}
export default App;
