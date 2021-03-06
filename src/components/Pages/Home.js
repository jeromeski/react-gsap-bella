import React, { Fragment } from 'react';
import Header from '../Header';
import Reveal from '../Reveal';

const Home = () => {
	return (
		<Fragment>
			<main id='main'>
				<Header />
				<Reveal />
			</main>
			<aside className='fill-background' style={{ backgroundColor: '#ACB7AE' }}></aside>
		</Fragment>
	);
};

export default Home;
			 																			 														