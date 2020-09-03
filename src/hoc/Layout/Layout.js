import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='relative'>
					<Navigation />
					<main className='bg-indigo-100'>{this.props.children}</main>
				</div>
			</React.Fragment>
		);
	}
}

export default Layout;
