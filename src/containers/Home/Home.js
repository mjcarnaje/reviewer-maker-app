import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import image01 from '../../assets/svg/studying.svg';

class Home extends Component {
	render() {
		return (
			<Auxiliary>
				<div className='relative px-3 sm:px-6 md:px-24 lg:px-16 lg:flex'>
					<div className='flex flex-col justify-center min-h-screen'>
						<div>
							<h1 className='my-6 text-5xl font-semibold leading-tight text-gray-800 sm:text-6xl font-poppins'>
								All-in-one online reviewer app maker
							</h1>
							<p className='text-xl font-light leading-none font-poppins sm:text-2xl'>
								Make your own question and practice, for free.
							</p>
						</div>
						<div className='mt-16'>
							<button className='block px-3 py-2 text-xl text-white border-none rounded sm:text-2xl font-poppins bg-custom-primary hover:bg-indigo-400 focus:outline-none'>
								Get Started
							</button>
						</div>
					</div>
					<div className='absolute bottom-0 right-0 w-2/3 sm:relative sm:w-auto sm:px-10 sm:m-0 lg:w-full lg:h-auto'>
						<img
							className='lg:w-full lg:h-full '
							src={image01}
							alt='male-study'
						/>
					</div>
				</div>
			</Auxiliary>
		);
	}
}

export default Home;
