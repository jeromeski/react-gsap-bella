import gsap, { Power4 } from 'gsap/gsap-core';
import React, { useCallback, useEffect, useRef } from 'react';

import { hgLeft } from '../../data';
import { hgRight } from '../../data';

const Header = () => {
  
	let headerEl = useRef(null);
	let leftItem = useRef([]);
	let rightItem = useRef([]);
	let circle = useRef(null);

	const initHeaderTilt = useCallback(() => {
		headerEl.current.addEventListener('mousemove', moveImages);
	}, []);

	const moveImages = (e) => {
		const { offsetX, offsetY, target } = e;
		const { clientWidth, clientHeight } = target;
		const xPos = offsetX / clientWidth - 0.5;
		const yPos = offsetY / clientHeight - 0.5;
		const leftImages = leftItem.current;
		const rightImages = rightItem.current;

		const modifier = (index) => index * 1.2 + 0.5;

		leftImages.forEach((image, index) => {
			gsap.to(image, {
				duration: 1.2,
				x: xPos * 20 * modifier(index),
				y: yPos * 30 * modifier(index),
				rotationY: xPos * 40,
				rotationX: yPos * 10
			});
		});

		rightImages.forEach((image, index) => {
			gsap.to(image, {
				duration: 1.2,
				x: xPos * 20 * modifier(index),
				y: -yPos * 30 * modifier(index),
				rotationY: xPos * 40,
				rotationX: yPos * 10
			});
		});
		gsap.to(circle.current, {
			duration: 1.7,
			x: 100 * xPos,
			y: 120 * yPos,
			ease: Power4.easeOut
		});
	};

	useEffect(() => {
		initHeaderTilt();
	}, [initHeaderTilt]);

	return (
		<header datacolor='#ACB7AE' ref={headerEl}>
			<h1>
				<span>Consectetur</span>
				<span>Adipisicing</span>
				<span>Elites</span>
			</h1>
			<p className='subtitle'>
				VOLUPTAS AUT <br />& VERITASIS NOSTRUM
			</p>
			<div className='decor__circle'></div>
			<div className='header__gallery'>
				<div className='hg__left'>
					{hgLeft().map((img, idx) => (
						<div className={img.divClass} key={idx} ref={(e) => (leftItem.current[idx] = e)}>
							<img src={require(`../../assets/img/${img.imgName}.jpg`).default} alt={img.altName} />
						</div>
					))}
				</div>
				<div className='hg__right'>
					{hgRight().map((img, idx) => (
						<div className={img.divClass} key={idx} ref={(e) => (rightItem.current[idx] = e)}>
							<img src={require(`../../assets/img/${img.imgName}.jpg`).default} alt={img.altName} />
						</div>
					))}
				</div>
			</div>
			<div className='cta__circle' ref={circle}>
				<div className='cta__circle--logo'></div>
			</div>
		</header>
	);
};

export default Header;

