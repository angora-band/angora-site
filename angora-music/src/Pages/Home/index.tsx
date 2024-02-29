import React from 'react';
import { DisplayMode } from '../../types/display';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import { images } from '../../utils/images';
import { StreamingPlatformLinkKey, streamingPlatformLinks } from '../../utils/navigation';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';

interface Props {
	theme: DisplayMode;
}

const Home = (props: Props) => {
	const { theme } = props;

	return (
		<PageBodyContainer theme={theme} simpleFooter>
			<DualColorContainer theme={theme}>
				<div className='gap-12 lg:gap-20   flex-col lg:flex-row   flex items-center'>
					<img src={images['in-the-static-ep-cover.jpg']} alt='EP cover for "in the static"' className='flex   w-3/4 lg:w-1/3   h-3/4 lg:h-1/3' />
					<div className='gap-4 lg:gap-8   flex flex-col'>
						<p className='text-4xl lg:text-6xl'> SPRING 2024 </p>
						<p className='text-lg lg:text-2xl'>
							Stream our debut EP,&nbsp;
							<i>in the static</i>,&nbsp;
							when it releases on all major streaming platforms this spring.
						</p>
					</div>
				</div>
			</DualColorContainer>
			<div className='mx-8 lg:mx-16   flex flex-row justify-evenly items-center'>
				{Object.keys(streamingPlatformLinks).map((key) => (
					<a
						href={streamingPlatformLinks[key as StreamingPlatformLinkKey]}
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

export default Home;
