import React, { Fragment, useRef } from 'react';
import Header from '../Header';
import Portfolio from '../Portfolio';
import Reveal from '../Reveal';

const Home = () => {
  let pgbgRef = useRef(null)

	return (
		<Fragment>
			<main id='main'>
				<Header />
				<Reveal />
				<Portfolio pgbg={pgbgRef} />
			</main>
			<aside className='fill-background' style={{ backgroundColor: '#ACB7AE' }} ref={pgbgRef}></aside>
		</Fragment>
	);
};

export default Home;
			 																			 														