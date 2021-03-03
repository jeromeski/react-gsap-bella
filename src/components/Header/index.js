import React from 'react';
import landscape1 from '../../assets/img/img_landscape-01-large.jpg';
import landscape2 from '../../assets/img/img_landscape-02-large.jpg';
import landscape3 from '../../assets/img/img_landscape-03-large.jpg';

const Header = () => {
	return (
		<header dataColor='#ACB7AE'>
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
					<div className='hg__image hg__image--l'>
						<img src={landscape1} alt='landscape 1' />
					</div>
					<div className='hg__image hg__image--m'>
						<img src={landscape2} alt='landscape 2' />
					</div>
					<div className='hg__image hg__image--s'>
						<img src={landscape3} alt='landscape 3' />
					</div>
				</div>
				<div className='hg__right'>
					<div className='hg__image hg__image--l'>
						<img src={landscape3} alt='landscape 3' />
					</div>
					<div className='hg__image hg__image--m'>
						<img src={landscape1} alt='landscape 1' />
					</div>
					<div className='hg__image hg__image--s'>
						<img src={landscape2} alt='landscape 2' />
					</div>
				</div>
			</div>
			<div className='cta__circle'>
				<div className='cta__circle--logo'></div>
			</div>
		</header>
	);
};

export default Header;
