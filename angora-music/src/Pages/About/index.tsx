import React from 'react';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import { images } from '../../utils/images';
import { SocialMediaLinkKey, socialMediaLinks } from '../../utils/navigation';
import { useTheme } from '../../Contexts/ThemeContext';

const About = () => {
	const { theme } = useTheme();

	return (
		<PageBodyContainer>
			<DualColorContainer flip>
				<div className='flex-col sm:flex-row   flex items-center justify-evenly'>
					<img
						src={images['sword-promo-1.jpg']}
						alt='The music duo wielding a shortsword in the forest brush'
						className='h-20 lg:h-36 xl:h-40 2xl:h-60 3xl:h-80   flex'
					/>
					<img
						src={images['sword-promo-2.jpg']}
						alt='The music duo glancing dreamily about a snowscape'
						className='h-20 lg:h-36 xl:h-40 2xl:h-60 3xl:h-80   flex'
					/>
					<img
						src={images['sword-promo-3.jpg']}
						alt='The music duo sharing the hilt of a shortsword'
						className='h-20 lg:h-36 xl:h-40 2xl:h-60 3xl:h-80   flex'
					/>
					<img
						src={images['sword-promo-4.jpg']}
						alt='The music duo under an old, graffitied bridge'
						className='h-20 lg:h-36 xl:h-40 2xl:h-60 3xl:h-80   flex'
					/>
				</div>
			</DualColorContainer>
			<p className='text-xl lg:text-2xl   mx-auto'>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span className='font-semibold'>angora</span> is a Brooklyn-based band consisting of vocalist and songwriter Sabine Kearley and
				composer and producer Aaron Morrison. Their unique style of ethereal art pop combines
				influences from their eclectic personal tastes, experience in classical music schools, and their
				time making music together in Baltimore as they were growing up. After releasing their debut EP
				“in the static” and performing at multiple venues in Brooklyn and Manhattan last year, they
				return with new single “red stars”.
			</p>
			<div className='w-full lg:w-2/3   flex flex-row justify-evenly items-center mx-auto'>
				{Object.keys(socialMediaLinks).map((key) => (
					<a
						href={socialMediaLinks[key as SocialMediaLinkKey]}
						target='_blank'
						rel='noopener noreferrer'
						className='w-20 lg:w-40   h-20 lg:h-40'
					>
						<img src={images[key + '.png']} alt={key} />
					</a>
				))}
			</div>
			<p className='text-3xl lg:text-4xl   justify-center text-center mx-auto'>What We're Listening To</p>
			{/* spotify playlist iframe insert: */}
			<div className='w-full xl:w-2/3   justify-center mx-auto'>
				{theme === 'dark' ? (
					<iframe
						title='dark-playlist'
						style={{ borderRadius: '12px' }}
						src='https://open.spotify.com/embed/playlist/05WAt1KAiBuuNnUsLqB0jy?utm_source=generator&theme=0'
						width='100%'
						height='352'
						frameBorder='0'
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					/>
				) : (
					<iframe
						title='light-playlist'
						className='lg:max-w-2/3'
						style={{ borderRadius: '12px' }}
						src='https://open.spotify.com/embed/playlist/05WAt1KAiBuuNnUsLqB0jy?utm_source=generator'
						width='100%'
						height='352'
						frameBorder='0'
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					/>
				)}
			</div>
		</PageBodyContainer>
	);
};

export default About;
