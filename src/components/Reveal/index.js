import React from 'react';
import { rgData } from '../../data';

const Reveal = () => {
	return (
		<article>
			<section className='reveal-gallery'>
				{rgData().map((data, idx) => (
					<div key={idx} className={`rg__column ${data.classL1} is-active`} data-color={data.color}>
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
