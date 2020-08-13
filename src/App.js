import React from 'react';
import Layout from './hoc/Layout/Layout';
import HomeContainer from './containers/HomeContainer/HomeContainer';

function App() {
	return (
		<div className="App">
			<Layout>
				<HomeContainer />
			</Layout>
		</div>
	);
}

export default App;
