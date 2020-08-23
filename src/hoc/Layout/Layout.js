import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';
import './Layout.scss';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
	render() {
		return (
			<Auxiliary>
				<div className='relative'>
					<Navigation />
					<main className='bg-indigo-100'>{this.props.children}</main>
				</div>
			</Auxiliary>
		);
	}
}

export default Layout;
