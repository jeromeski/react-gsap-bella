import React, { Fragment, useEffect, useCallback, useRef } from 'react';
import gsap, { ScrollTrigger, ScrollToPlugin, Power2 } from 'gsap/all';
import portfolio2ImgURL from '../../assets/img/img_portfolio-02-480-720.jpg';
import landscape1ImgURL from '../../assets/img/img_landscape-01-large.jpg';
import landscape2ImgURL from '../../assets/img/img_landscape-02-large.jpg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Blog = ({pgbg}) => {
	let withParallaxRefs = useRef([]);
	let fixedNavRef = useRef(null);
	let fixedNavLinkRefs = useRef([]);
	let stages = useRef([]);


	const initImageParallax = useCallback(() => {
		const withParallax = withParallaxRefs.current;

		withParallax.forEach((section) => {
			const image = section.querySelector('img');
			gsap.to(image, {
				yPercent: 20,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					scrub: true
				}
			});
		});
	}, []);

	const initPinSteps = useCallback(() => {
		ScrollTrigger.create({
			trigger: fixedNavRef.current,
			start: 'top center',
			endTrigger: withParallaxRefs.current[4],
			end: 'center center',
			pin: true
		});

		const getVh = () => {
			const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
			return vh;
		};

		const updateBodyColor = (color, pgbg) => {
			// gsap.to(pgbg, {  backgroundColor: color, ease: 'none'  });
			pgbg.style.backgroundColor = color;
		};

		stages.current = [
			withParallaxRefs.current[1],
			withParallaxRefs.current[2],
			withParallaxRefs.current[3],
			withParallaxRefs.current[4]
		];

		const navLinks = fixedNavLinkRefs.current;

		stages.current.forEach((stage, idx) => {
			ScrollTrigger.create({
				trigger: stage,
				start: 'top center',
				end: `+=${stage.clientHeight + getVh() / 10}`,
				toggleClass: {
					targets: navLinks[idx],
					className: 'is-active'
				},
				onEnter: () => updateBodyColor(stage.dataset.color, pgbg.current),
				onEnterBack: () => updateBodyColor(stage.dataset.color, pgbg.current)
			});
		});
	}, [stages, pgbg]);

  const initScrollTo = () => {
   console.log(fixedNavLinkRefs)
   const navLinks = fixedNavLinkRefs.current
   navLinks.forEach((link) => {
     const target = link.firstChild.getAttribute('href')
     console.dir(link.firstChild)

     link.firstChild.onclick = (e) => {
       e.preventDefault();
       gsap.to(window, {duration: 1.5, scrollTo: target, ease: Power2.easeOut})
     }
   });
  }


	useEffect(() => {
		initImageParallax();
		initPinSteps();
    initScrollTo();
	}, [initImageParallax, initPinSteps]);

	return (
		<Fragment>
			<section className='blog with-padding-bottom with-parallax'>
				<h2 className='chapter'>
					<span>003 -</span> Blog
				</h2>
				<div className='blog__post' ref={(el) => (withParallaxRefs.current[0] = el)}>
					<div className='blog__image'>
						<img src={portfolio2ImgURL} alt='Portfolio' />
					</div>
					<div className='blog__text'>
						<p className='post__date'>17.08.20</p>
						<h3>Quae Accusamus Consequuntur Sequi Ullam</h3>
					</div>
				</div>
			</section>

			<section className='how-we-work with-padding'>
				<h2 className='chapter'>
					<span>004 -</span> How We Work
				</h2>
				<div className='fixed-nav' ref={fixedNavRef}>
					<ul>
						<li ref={(el) => (fixedNavLinkRefs.current[0] = el)}>
							<a href='#stage1'>Amet Consectetur </a>
						</li>
						<li ref={(el) => (fixedNavLinkRefs.current[1] = el)}>
							<a href='#stage2'>Eum Similique</a>
						</li>
						<li ref={(el) => (fixedNavLinkRefs.current[2] = el)}>
							<a href='#stage3'>Cupiditate Vel</a>
						</li>
						<li ref={(el) => (fixedNavLinkRefs.current[3] = el)}>
							<a href='#stage4'>Dignissimos Sed</a>
						</li>
					</ul>
				</div>
				<div
					id='stage1'
					className='stage with-parallax'
					data-color='#8c8480'
					ref={(el) => (withParallaxRefs.current[1] = el)}>
					<div className='stage__image'>
						<img src={landscape1ImgURL} alt='Landscape' />
					</div>
					<div className='stage__heading'>
						<p>01</p>
						<h3>Amet Consectetur</h3>
					</div>
					<div className='stage__text'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel. Vel qui
							ipsum eum similique reiciendis dicta dignissimos sed ipsa.
						</p>
					</div>
				</div>
				<div
					id='stage2'
					className='stage with-parallax'
					data-color='#505156'
					ref={(el) => (withParallaxRefs.current[2] = el)}>
					<div className='stage__image'>
						<img src={landscape2ImgURL} alt='Landscape' />
					</div>
					<div className='stage__heading'>
						<p>02</p>
						<h3>Eum Similique</h3>
					</div>
					<div className='stage__text'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel. Vel qui
							ipsum eum similique reiciendis dicta dignissimos sed ipsa.
						</p>
					</div>
				</div>
				<div
					id='stage3'
					className='stage with-parallax'
					data-color='#717872'
					ref={(el) => (withParallaxRefs.current[3] = el)}>
					<div className='stage__image'>
						<img src={landscape1ImgURL} alt='Landscape' />
					</div>
					<div className='stage__heading'>
						<p>03</p>
						<h3>Cupiditate Vel</h3>
					</div>
					<div className='stage__text'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel. Vel qui
							ipsum eum similique reiciendis dicta dignissimos sed ipsa.
						</p>
					</div>
				</div>
				<div
					id='stage4'
					className='stage with-parallax'
					data-color='#ccb28b'
					ref={(el) => (withParallaxRefs.current[4] = el)}>
					<div className='stage__image'>
						<img src={landscape2ImgURL} alt='Landscape' />
					</div>
					<div className='stage__heading'>
						<p>04</p>
						<h3>Dignissimos Sed</h3>
					</div>
					<div className='stage__text'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vel. Vel qui
							ipsum eum similique reiciendis dicta dignissimos sed ipsa.
						</p>
					</div>
				</div>
			</section>
			<section className='contact with-padding-bottom is-flipped with-parallax'>
				<h2 className='chapter'>
					<span>005 -</span> Contact
				</h2>
				<div className='blog__post' ref={(el) => (withParallaxRefs.current[5] = el)}>
					<div className='blog__image'>
						<img src={portfolio2ImgURL} alt='Portfolio' />
					</div>
					<div className='blog__text'>
						<h3>Quae Accusamus Consequuntur</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sed.</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Blog;

