import React, { Fragment } from 'react';
import Burger from '../Burger';
import Header from '../Header';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Home = () => {
	return (
		<Fragment>
			<Logo />
			<Burger />
			<Navbar />
			<main id='main'>
				<Header />
			</main>

			<aside className='fill-background' style={{ backgroundColor: '#ACB7AE' }}></aside>
		</Fragment>
	);
};

export default Home;
