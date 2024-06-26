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
						src={images['band-pic-water.jpg']}
						alt='The music duo bathed in the reflections of water - Aaron on the left, Sabine on the right'
						className='h-40 lg:h-60 xl:h-80 2xl:h-[25rem] 3xl:h-[35rem]   flex'
					/>
					<img
						src={images['band-pic-keyboard.jpg']}
						alt='The music duo sporting a MIDI keyboard - Aaron on the left, Sabine on the right'
						className='h-40 lg:h-60 xl:h-80 2xl:h-[25rem] 3xl:h-[35rem]   flex'
					/>
					<img
						src={images['band-pic-snake.jpg']}
						alt='The music duo taming a serpent - Aaron on the left, Sabine on the right'
						className='h-40 lg:h-60 xl:h-80 2xl:h-[25rem] 3xl:h-[35rem]   flex'
					/>
				</div>
			</DualColorContainer>
			<p className='text-xl lg:text-2xl   mx-auto'>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span className='font-semibold'>angora</span> is a new band based in Brooklyn consisting of vocalist and
				songwriter Sabine Kearley, and composer and producer Aaron Morrison. Their unique style of ethereal art pop
				combines influences from their eclectic personal tastes, experience in classical music schools, and their time
				making music together in Baltimore as they were growing up. They are continuously influenced by all of the music
				they have ever fallen in love with, including their primary north stars Weyes Blood, Jockstrap, Caroline Polachek,
				Stereolab, and Wye Oak. After years of remote collaboration and eventually relocating to the NYC area to record in
				the same space, angora is finally making their debut with the 5-track “in the static” EP.
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
