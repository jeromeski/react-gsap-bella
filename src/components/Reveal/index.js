import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import { rgData } from '../../data';

const Reveal = () => {
	//  get elements for animation
	let revealEl = useRef([]);
	let imageBlockEl = useRef([]);
	let maskEl = useRef([]);

	const initHoverReveal = () => {
		revealEl.current.forEach((section, idx) => {
			// reset the initial position
			gsap.set(imageBlockEl.current[idx], {
				yPercent: -101
			});
			gsap.set(maskEl.current[idx], { yPercent: 100 });

			section.addEventListener('mouseenter', createHoverReveal);
			section.addEventListener('mouseleave', createHoverReveal);
		});
	};

	const createHoverReveal = (e) => {
		console.log(e.type);
	};

	useEffect(() => {
		initHoverReveal();
	});

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
						<div className='rg__image' ref={(el) => (imageBlockEl.current[idx] = el)}>
							<div
								className='rg__image--mask'
								style={{ transform: data.style }}
								ref={(el) => (maskEl.current[idx] = el)}>
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
