import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Timeline } from 'gsap/gsap-core';
import { portfolio } from '../../data';

const Portfolio = ({pgbg}) => {
	const [tl] = useState(new Timeline());
	let linkRef = useRef([]);
	let allLinks = linkRef.current;
	let lInsideRef = useRef(null);
	let sInsideRef = useRef(null);
	let largeImageRef = useRef(null);
	let smallImageRef = useRef(null);

	const createPortfolioHover = useCallback(
		(e) => {
			const { imagelarge, imagesmall, color } = e.target.dataset;
			const lInside = lInsideRef;
			const sInside = sInsideRef;

			if (e.type === 'mouseenter') {
				const allSiblings = allLinks.filter((item) => item !== e.target);
				// change images to the right urls
				tl.set(lInside.current, { backgroundImage: `url(${imagelarge})`})
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
				// all links back to black
				// change background color back to #ACB7AB
			}
		},
		[tl, allLinks, pgbg]
	);

	const initPortfolioHover = useCallback(() => {
		allLinks.forEach((link) => {
			link.addEventListener('mouseenter', createPortfolioHover);
			link.addEventListener('mouseleave', createPortfolioHover);
		});
	}, [createPortfolioHover, allLinks]);

	useEffect(() => {
		initPortfolioHover();
	}, [initPortfolioHover]);

	return (
		<section className='portfolio' >
			<div className='portfolio__categories'>
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
