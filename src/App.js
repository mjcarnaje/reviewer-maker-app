import React from 'react';
import Layout from './hoc/Layout/Layout';
// import Home from './containers/Home/Home';
import CreateQuestions from './containers/CreateQuestions/CreateQuestions';
// import PlayGame from './containers/PlayGame/PlayGame';

function App() {
	return (
		<div className='App'>
			<Layout>
				{
					// <Home />
					<CreateQuestions />
					// <PlayGame />
				}
			</Layout>
		</div>
	);
}

export default App;
