import React, {useEffect, useRef} from 'react';
import gsap, { Power4 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Navbar = (props) => {
  const {hidelinks} = props
  let navLinkItem = useRef([])

  const handleMouseLeave = (e) => {
		e.target.classList.add('animate-out');
		const timer = setTimeout(() => {
			e.target.classList.remove('animate-out');
			clearTimeout(timer);
		}, 300);
	};

	const mainNavLinks = [
		{ title: 'Our Values' },
		{ title: 'PortFolio' },
		{ title: 'Blog' },
		{ title: 'How We Work' },
		{ title: 'Contact' }
	];

  const handleHideLinks = (hidelinks) => {
    const navLinkRefsRev = navLinkItem.current.reverse();
    const navLinkRefs = navLinkItem.current;
    const links = hidelinks ? navLinkRefs : navLinkRefsRev;
    
		return gsap.to(links, {
				duration: 0.3,
				stagger: 0.05,
				autoAlpha: () => (hidelinks ? 0 : 1),
				y: () => (hidelinks ? 20 : 0),
				ease: Power4.easeOut
			});
	}

  useEffect(() => {
    handleHideLinks(hidelinks);

  },[hidelinks]) 

	return (
		<nav className='main-nav'>
			<ul>
				{mainNavLinks.map((link, idx) => (
					<li key={idx}>
						<a
              className='nav-link'
							href='#0'
							onMouseLeave={(e) => handleMouseLeave(e)}
              ref={el => navLinkItem.current[idx] = el }
              >
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

/*
const handleHideLinks = (hidelinks) => {
    console.log(hidelinks);
      const navLinkRefsRev = navLinkRefs.current.reverse()
			const links = hidelinks ? navLinkRefs : navLinkRefsRev;
			return tl.staggerTo(links, .3, {
				autoAlpha: () => (hidelinks ? 0 : 1),
				y: () => (hidelinks ? 20 : 0),
				ease: Power4.easeOut
			}, 0.05);
*/ 