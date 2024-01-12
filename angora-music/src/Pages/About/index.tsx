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
				<img src={images['band-pic.png']} alt='The music duo themselves' className='flex m-auto' />
			</DualColorContainer>
			<p className='text-4xl lg:text-6xl   flex mx-auto font-semibold'>Aaron + Sabine</p>
			<p className='text-2xl lg:text-3xl   flex mx-auto'>Baltimore ⟹ NYC</p>
			<p className='text-2xl lg:text-3xl   flex mx-auto'>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
				euismod in lacus quis viverra. Integer laoreet laoreet nisi, nec sodales nisi egestas sit amet. Suspendisse sed
				pulvinar sem, quis ultrices sapien. In hac habitasse platea dictumst. Cras arcu risus, consectetur id efficitur
				vel, cursus nec nisi. Praesent eu ultrices lacus, vitae congue ex. Vivamus vitae malesuada nibh. Praesent id nisi
				quam. Curabitur rhoncus nibh sed sem vestibulum, fermentum aliquet nulla tristique.
			</p>
			<div className='flex flex-row justify-between items-center w-2/3 mx-auto'>
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
