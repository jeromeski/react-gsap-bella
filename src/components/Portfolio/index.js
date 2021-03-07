import React from 'react';
import { portfolio } from '../../data';

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<div className='portfolio__categories'>
				{portfolio.map((link) => (
					<a
						key={link.id}
						href='#0'
						data-color={link.color}
						data-imagelarge={require(`../../assets/img/${link.imgBig}.jpg`).default}
						data-imagesmall={require(`../../assets/img/${link.imgSmall}.jpg`).default}>
						{link.title}
					</a>
				))}
			</div>
			<div className='portfolio__image--l'>
				<div className='image_inside'></div>
			</div>
			<div className='portfolio__image--s'>
				<div className='image_inside'></div>
			</div>
		</section>
	);
};

export default Portfolio;
