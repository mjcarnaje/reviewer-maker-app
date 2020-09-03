import React from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import CreateQuestions from './containers/CreateQuestions/CreateQuestions';
import PlayGame from './containers/PlayGame/PlayGame';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Layout>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/play-game' component={PlayGame} />
						<Route path='/create-questions' component={CreateQuestions} />
					</Switch>
				</Layout>
			</div>
		</Router>
	);
}

export default App;
