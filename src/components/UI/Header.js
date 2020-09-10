import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Header extends Component {
	state = {
		showSideDrawer: false,
	};
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};
	render() {
		const navStyle =
			'block font-semibold font-poppins text-xl hover:bg-indigo-300 hover:text-white text-custom-primary rounded px-2 py-1 sm:py-0 sm:ml-2 md:ml-4 lg:ml-16';

		return (
			<header className='absolute top-0 left-0 z-50 w-full bg-white shadow sm:flex sm:justify-between sm:px-4 sm:py-3 lg:px-12'>
				<nav className='flex items-center justify-between px-4 py-3 shadow sm:p-0 sm:shadow-none'>
					<Link to='/'>
						<button className='flex-1 text-3xl btn font-berkshire text-custom-primary'>
							Reviewer
						</button>
					</Link>
					<div className='sm:hidden'>
						<button
							className='text-custom-primary focus:text-indigo-400 focus:outline-none'
							onClick={this.sideDrawerToggleHandler}
						>
							<svg viewBox='0 0 20 20' className='w-10 h-10 fill-current'>
								{this.state.showSideDrawer ? (
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									></path>
								) : (
									<path
										fillRule='evenodd'
										d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
										clipRule='evenodd'
									/>
								)}
							</svg>
						</button>
					</div>
				</nav>

				<div
					className={`${
						this.state.showSideDrawer ? 'block' : 'hidden'
					} sm:justify-center sm:items-center sm:p-0 px-2 pt-2 pb-4 sm:flex`}
				>
					<NavLink
						exact
						activeStyle={{
							backgroundColor: '#82a4f3',
							color: 'white',
						}}
						className={navStyle}
						to='/'
						onClick={this.sideDrawerToggleHandler}
					>
						Home
					</NavLink>
					<NavLink
						activeStyle={{
							backgroundColor: '#82a4f3',
							color: 'white',
						}}
						className={navStyle}
						to='/quiz'
						onClick={this.sideDrawerToggleHandler}
					>
						Quiz
					</NavLink>
					<NavLink
						activeStyle={{
							backgroundColor: '#82a4f3',
							color: 'white',
						}}
						className={navStyle}
						to='/create-questions'
						onClick={this.sideDrawerToggleHandler}
					>
						Questions
					</NavLink>
				</div>
			</header>
		);
	}
}

export default Header;
