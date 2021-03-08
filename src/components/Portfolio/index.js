import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap, { Timeline, Power3, Power4 } from 'gsap/gsap-core';
import { portfolio } from '../../data';

const Portfolio = ({ pgbg }) => {
	const [tl] = useState(new Timeline());
	let linkRef = useRef([]);
	let allLinks = linkRef.current;
	let lInsideRef = useRef(null);
	let sInsideRef = useRef(null);
	let largeImageRef = useRef(null);
	let smallImageRef = useRef(null);
	let categsRef = useRef(null);

	const getPortfolioOffset = (clientY) => {
		return -(categsRef.current.clientHeight - clientY);
	};

	const createPortfolioMove = useCallback(
		(e) => {
			const { clientY } = e;

			// move large image
			gsap.to(largeImageRef.current, {
				duration: 1.2,
				y: getPortfolioOffset(clientY) / 6,
				ease: Power3.easeOut
			});

			// move small image
			gsap.to(smallImageRef.current, {
				duration: 1.5,
				y: getPortfolioOffset(clientY) / 3,
				ease: Power4.easeOut
			});
		},
		[]
	);

	const createPortfolioHover = useCallback(
		(e) => {
			const { imagelarge, imagesmall, color } = e.target.dataset;
			const lInside = lInsideRef;
			const sInside = sInsideRef;

			if (e.type === 'mouseenter') {
				const allSiblings = allLinks.filter((item) => item !== e.target);
				// change images to the right urls
				tl.set(lInside.current, { backgroundImage: `url(${imagelarge})` })
					.set(sInside.current, { backgroundImage: `url(${imagesmall})` })
					// fade in images
					.to([largeImageRef.current, smallImageRef.current], { autoAlpha: 1 })
					// all siblings to white and fade out
					.to(allSiblings, { color: '#fff', autoAlpha: 0.2 }, 0)
					// active link to white
					.to(e.target, { color: '#fff', autoAlpha: 1 }, 0)
					//  update page background color
					.to(pgbg.current, { backgroundColor: color, ease: 'none' }, 0);
			} else if (e.type === 'mouseleave') {
				// fade out images
				tl.to([largeImageRef.current, smallImageRef.current], { autoAlpha: 0 }, 0.1)
					// all links back to black
					.to(allLinks, { color: '#000', autoAlpha: 1 }, 0)
					// change background color back to #ACB7AB
					.to(pgbg.current, { backgroundColor: '#ACB7AB', ease: 'none' }, 0);
			}
		},[pgbg, tl, allLinks]
	);

	const initPortfolioHover = useCallback(() => {
		allLinks.forEach((link) => {
			link.addEventListener('mouseenter', createPortfolioHover);
			link.addEventListener('mouseleave', createPortfolioHover);
			link.addEventListener('mousemove', createPortfolioMove);
		});
	}, [createPortfolioHover, allLinks, createPortfolioMove]);

	useEffect(() => {
		initPortfolioHover();
	}, [initPortfolioHover]);

	return (
		<section className='portfolio with-padding'>
			<h2 class='chapter'>
				<span>002 -</span> Portfolio
			</h2>
			<div className='portfolio__categories' ref={categsRef}>
				{portfolio.map((link, idx) => (
					<a
						ref={(el) => (linkRef.current[idx] = el)}
						key={link.id}
						href='#0'
						data-color={link.color}
						data-imagelarge={require(`../../assets/img/${link.imgBig}.jpg`).default}
						data-imagesmall={require(`../../assets/img/${link.imgSmall}.jpg`).default}>
						{link.title}
					</a>
				))}
			</div>
			<div className='portfolio__image--l' ref={largeImageRef}>
				<div className='image_inside' ref={lInsideRef}></div>
			</div>
			<div className='portfolio__image--s' ref={smallImageRef}>
				<div className='image_inside' ref={sInsideRef}></div>
			</div>
		</section>
	);
};

export default Portfolio;
