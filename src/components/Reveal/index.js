
import gsap, { Power4 } from 'gsap/all';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { rgData } from '../../data';
import { DeviceSize } from '../../responsive';

const Reveal = () => {
	//  get elements for animation
	let revealEl = useRef([]);
	//  css breakpoint basis is min-width
	const [isLaptop, setIsLaptop] = useState(useMediaQuery({ minWidth: DeviceSize.medium }));

	const createHoverReveal = useCallback((e) => {
		const { imgBlock, mask, text, textCopy, textMask, textP, image } = e.target;

		let tl = gsap.timeline({
			defaults: {
				duration: 0.7,
				ease: Power4.easeOut
			}
		});

		if (e.type === 'mouseenter') {
			tl.to([mask, imgBlock, textMask, textP], { yPercent: 0 })
				// Element gets dynamically animated up, with reference to the size of the text
				.to(text, { y: () => -getTextHeight(textCopy) / 2 }, 0)
				.to(image, { duration: 1.1, scale: 1 }, 0);
		} else if (e.type === 'mouseleave') {
			tl.to([mask, textP], { yPercent: 100 })
				.to([imgBlock, textMask], { yPercent: -101 }, 0)
				.to(text, { y: 0 }, 0)
				.to(image, { scale: 1.2 }, 0);
		}
		return tl;
	}, []);

	const initHoverReveal = useCallback(() => {
		revealEl.current.forEach((section, idx) => {
			// get components for animation
			section.imgBlock = section.lastChild;
			section.image = section.lastChild.firstChild.firstChild;
			section.mask = section.lastChild.lastChild;
			section.text = section.firstChild;
			section.textCopy = section.firstChild.lastChild;
			section.textMask = section.firstChild.lastChild.firstChild;
			section.textP = section.firstChild.lastChild.firstChild.firstChild;

			// reset the initial position
			gsap.set([section.imgBlock, section.textMask], {
				yPercent: -101
			});
			gsap.set([section.mask, section.textP], {
				yPercent: 100
			});
			gsap.set(section.image, {
				scale: 1.2
			});

			section.addEventListener('mouseenter', createHoverReveal);
			section.addEventListener('mouseleave', createHoverReveal);
		});
	}, [createHoverReveal]);

	// Auto resize height of textCopy element so it animate ups perfectly
	const getTextHeight = (textCopy) => {
		return textCopy.clientHeight;
	};

	const resetProps = (elements) => {
		gsap.killTweensOf('*');
		elements.forEach((el) => {
			el && gsap.set(el, { clearProps: 'all' });
		});
	};

	const handleWidthChange = useCallback(() => {
    // Check for appropriate breakpoint
		if (isLaptop) {
      // setup hover animation
			initHoverReveal();
		} else {
      // width is less than 768px
			revealEl.current.forEach((section) => {
        // remove event listeners
				section.removeEventListener('mouseenter', createHoverReveal);
				section.removeEventListener('mouseleave', createHoverReveal);
				const { imageBlock, mask, text, textCopy, textMask, textP, image } = section;
				resetProps([imageBlock, mask, text, textCopy, textMask, textP, image]);
			});
		}
	}, [initHoverReveal, isLaptop, createHoverReveal]);

	useEffect(() => {
		handleWidthChange(isLaptop, setIsLaptop);
	}, [handleWidthChange, isLaptop, setIsLaptop]);

	return (
		<section className='reveal-gallery'>
			<h2 className='chapter'>
				<span>001 -</span> Our Values
			</h2>
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
	);
};

export default Reveal;
