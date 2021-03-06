import gsap, { Power4 } from 'gsap/all';

import React, { useEffect, useRef, useCallback } from 'react';
import { rgData } from '../../data';

const Reveal = () => {
	//  get elements for animation
	let revealEl = useRef([]);

	const initHoverReveal = useCallback(() => {
		revealEl.current.forEach((section, idx) => {
			// get components for animation
			section.imgBlock = section.childNodes[1];
			section.mask = section.childNodes[1].childNodes[0];

			// reset the initial position
			gsap.set(section.imgBlock, {
				yPercent: -101
			});
			gsap.set(section.mask, {
				yPercent: 100
			});

			section.addEventListener('mouseenter', createHoverReveal);
			section.addEventListener('mouseleave', createHoverReveal);
		});
	}, []);

	const createHoverReveal = (e) => {
		const { imgBlock, mask } = e.target;
		console.log(imgBlock);

		let tl = gsap.timeline({
			defaults: {
				duration: 0.7,
				ease: Power4.easeOut
			}
		});

		if (e.type === 'mouseenter') {
			tl.to([mask, imgBlock], { yPercent: 0 });
		} else if (e.type === 'mouseleave') {
			tl.to(mask, { yPercent: 100 }).to(imgBlock, { yPercent: -101 }, 0);
		}
		return tl;
	};

	useEffect(() => {
		initHoverReveal();
	}, [initHoverReveal]);

	return (
		<article>
			<section className='reveal-gallery'>
				{rgData().map((data, idx) => (
					<div
						key={idx}
						className={`rg__column ${data.classL1} is-active`}
						data-color={data.color}
						ref={(el) => (revealEl.current[idx] = el)}>
						<div className='rg__text'>
							<div className='rg__text--heading'>
								<span>{data.titleNum}</span>
								<h3>{data.title}</h3>
							</div>
							<div className='rg__text--copy'>
								<div className='rg__text--mask'>
									<p>{data.description}</p>
								</div>
							</div>
						</div>
						<div className='rg__image'>
							<div className='rg__image--mask' style={{ transform: data.style }}>
								<img
									src={require(`../../assets/img/${data.imgName}.jpg`).default}
									alt={data.altName}
								/>
							</div>
						</div>
					</div>
				))}
			</section>
		</article>
	);
};

export default Reveal;
