import React, { Component } from 'react';
import ToolBar from './Toolbar/Toolbar';
import NavigationItems from './Items/Items';

export class Navigation extends Component {
	state = {
		showSideDrawer: false,
	};
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};
	render() {
		return (
			<header className='absolute top-0 left-0 z-50 w-full bg-white sm:flex sm:justify-between sm:px-4 sm:py-3 lg:px-12'>
				<ToolBar
					drawerToggleClicked={this.sideDrawerToggleHandler}
					close={this.state.showSideDrawer}
				/>
				<NavigationItems open={this.state.showSideDrawer} />
			</header>
		);
	}
}

export default Navigation;
