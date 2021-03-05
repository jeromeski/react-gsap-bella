import React, { useEffect, useRef, useState } from 'react';
import Burger from './Burger';
import Logo from './Logo';
import Navbar from './Navbar';
import Home from './Pages/Home';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [hideLinks, setHideLinks] = useState(false)

  const page = useRef(null)

  const initScrollTrigger = () => {
    const navAnimation = (direction) => {
      const scrollingDown = direction === 1;
      if(scrollingDown) {
        page.current.classList.add('has-scrolled')
        setHideLinks(true)
      } else {
        page.current.classList.remove('has-scrolled')
        setHideLinks(false)
      }
    }

		ScrollTrigger.create({
			start: 'top top',
			animation: navAnimation(),
			onEnter: ({ direction }) => navAnimation(direction),
			onLeaveBack: ({ direction }) => navAnimation(direction),
			end: 'bottom bottom',
			// markers: true
		});
	};

	useEffect(() => {
		initScrollTrigger();
	}, []);

	return (
		<div className='page' ref={page} >
			<Logo />
			<Burger />
			<Navbar hidelinks={hideLinks} />
			<Home />
		</div>
	);
};

export default App;
