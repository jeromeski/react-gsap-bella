import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    ScrollTrigger.create({
			start: 100,
			toggleClass: {
				targets: 'body',
				className: 'has-scrolled'
			},
			markers: true
		});
	};

	useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
