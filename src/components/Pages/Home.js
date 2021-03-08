import React, { Fragment, useRef } from 'react';
import Header from '../Header';
import Blog from '../Blog';
import Portfolio from '../Portfolio';
import Reveal from '../Reveal';

const Home = () => {
  let pgbgRef = useRef(null)

	return (
		<Fragment>
			<main id='main'>
				<Header />
				<article>
					<Reveal />
					<Portfolio pgbg={pgbgRef} />
					<Blog />
				</article>
			</main>
			<aside className='fill-background' ref={pgbgRef}></aside>
		</Fragment>
	);
};

export default Home;
			 																			 														