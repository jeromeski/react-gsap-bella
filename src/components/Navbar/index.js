import React, { useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const initNavigation = () => {
		const mainNavLinks = gsap.utils.toArray('.main-nav a');
		mainNavLinks.forEach((link) => {
			link.addEventListener('mouseleave', (e) => {
				link.classList.add('animate-out');
				const timer = setTimeout(() => {
					link.classList.remove('animate-out');
					clearTimeout(timer);
				}, 300);
			});
		});
	};

	useEffect(() => {
		initNavigation();
	}, []);

	return (
		<nav className='main-nav'>
			<ul>
				<li>
					<a href='#0'>Our Values</a>
				</li>
				<li>
					<a href='#0'>Portfolio</a>
				</li>
				<li>
					<a href='#0'>Blog</a>
				</li>
				<li>
					<a href='#0'>How We Work</a>
				</li>
				<li>
					<a href='#0'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
