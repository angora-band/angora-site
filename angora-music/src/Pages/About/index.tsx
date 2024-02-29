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
			<p className='text-6xl lg:text-8xl   flex mx-auto font-bold'>IT'S ANGORA</p>
			<DualColorContainer theme={theme} flip>
				<img
					src={images['band-pic.jpg']}
					alt='The music duo themselves - Aaron on the left, Sabine on the right'
					className='w-full lg:w-3/4 3xl:w-[45%]   flex m-auto'
				/>
			</DualColorContainer>
			<p className='text-4xl lg:text-6xl   flex mx-auto font-semibold'>Aaron & Sabine</p>
			<p className='text-2xl lg:text-3xl   mx-auto'>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span className='font-semibold'>angora</span> is a new band based in NYC consisting of lifelong friends Sabine
				Kearley and Aaron Morrison. Their unique style of ethereal art pop combines influences from their eclectic
				personal tastes, experience in classical music schools, and their time making music together in Baltimore as they
				were growing up. They are influenced by all of the music they have ever fallen in love with, with Weyes Blood,
				Björk, Caroline Polachek, Stereolab, and Jockstrap being their primary north stars. After years of swapping demos
				and eventually relocating to the New York City area to record in the same space, angora is finally releasing their
				debut EP "in the static" this spring.
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
