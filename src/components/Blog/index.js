import React, { Fragment } from 'react';

import portfolio2ImgURL from '../../assets/img/img_portfolio-02-480-720.jpg';
import landscape1ImgURL from '../../assets/img/img_landscape-01-large.jpg';
import landscape2ImgURL from '../../assets/img/img_landscape-02-large.jpg';

const Blog = () => {
	return (
		<Fragment>
			<section className='blog with-padding-bottom with-parallax'>
				<h2 className='chapter'>
					<span>003 -</span> Blog
				</h2>
				<div className='blog__post'>
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
				<div className='fixed-nav'>
					<ul>
						<li className='is-active'>
							<a href='#stage1'>Amet Consectetur </a>
						</li>
						<li>
							<a href='#stage2'>Eum Similique</a>
						</li>
						<li>
							<a href='#stage3'>Cupiditate Vel</a>
						</li>
						<li>
							<a href='#stage4'>Dignissimos Sed</a>
						</li>
					</ul>
				</div>
				<div id='stage1' className='stage with-parallax' data-color='#8c8480'>
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
				<div id='stage2' className='stage with-parallax' data-color='#505156'>
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
				<div id='stage3' className='stage with-parallax' data-color='#717872'>
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
				<div id='stage4' className='stage with-parallax' data-color='#ccb28b'>
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
				<div className='blog__post'>
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