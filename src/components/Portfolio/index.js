import React from 'react';
import photo1 from '../../assets/img/img_portfolio-01-480-720.jpg';
import photo2 from '../../assets/img/img_portfolio-02-480-720.jpg';

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<div className='portfolio__categories'>
				<a
					href='#0'
					style={{ color: '#fff', opacity: '0.2' }}
					data-color='#b3a8b3'
					data-imagelarge={photo1}
					data-imagesmall={photo2}>
					Voluptas & Veritatis
				</a>
				<a
					href='#0'
					style={{ color: '#fff', opacity: '0.2' }}
					data-color='#bab6a8'
					data-imagelarge={photo2}
					data-imagesmall={photo1}>
					Nostrum & Quibusdam
				</a>
				<a
					href='#0'
					style={{ color: '#fff', zIndex: 1 }}
					data-color='#a0abb4'
					data-imagelarge={photo1}
					data-imagesmall={photo2}>
					Elit & Laudantium
				</a>
				<a
					href='#0'
					style={{ color: '#fff', opacity: '0.2' }}
					data-color='#a3b1ae'
					data-imagelarge={photo2}
					data-imagesmall={photo1}>
					Tatione & Nona
				</a>
				<a
					href='#0'
					style={{ color: '#fff', opacity: '0.2' }}
					data-color='#afaba2'
					data-imagelarge={photo1}
					data-imagesmall={photo2}>
					Accusantium Bold
				</a>
			</div>
			<div className='portfolio__image--l' style={{ visibility: 'visible' }}>
				<div className='image_inside' style={{ backgroundImage: ` url(${photo2})` }}></div>
			</div>
			<div className='portfolio__image--s' style={{ visibility: 'visible' }}>
				<div className='image_inside' style={{ backgroundImage: `url(${photo1})` }}></div>
			</div>
		</section>
	);
};

export default Portfolio;
