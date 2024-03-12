import React from 'react';
import { DisplayMode } from '../../types/display';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import { images } from '../../utils/images';
import { SocialMediaLinkKey, socialMediaLinks } from '../../utils/navigation';

interface Props {
	theme: DisplayMode;
}

const About = (props: Props) => {
	const { theme } = props;

	return (
		<PageBodyContainer theme={theme}>
			<DualColorContainer theme={theme} flip>
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
				<span className='font-semibold'>angora</span> is a new band based in NYC consisting of lifelong friends Sabine
				Kearley (
				<a href='mailto:sabine@angora.band' className='underline'>
					sabine@angora.band
				</a>
				) and Aaron Morrison (
				<a href='mailto:aaron@angora.band' className='underline'>
					aaron@angora.band
				</a>
				). Their unique style of ethereal art pop combines influences from their eclectic personal tastes, experience in
				classical music schools, and their time making music together in Baltimore as they were growing up. They are
				influenced by all of the music they have ever fallen in love with, with Weyes Blood, Björk, Caroline Polachek,
				Stereolab, and Jockstrap being their primary north stars. After years of swapping demos and eventually relocating
				to the New York City area to record in the same space, angora is finally releasing their debut EP "in the static"
				this April.
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
		</PageBodyContainer>
	);
};

export default About;
