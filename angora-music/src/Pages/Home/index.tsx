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
					<img src={images['album-cover.png']} alt='Album cover' className='flex w-1/2 h-1/2' />
					<div className='gap-4 lg:gap-8   flex flex-col'>
						<p className='text-4xl lg:text-6xl'> OUT NOW </p>
						<p className='text-lg lg:text-2xl'>
							Stream our first album albumnamehere Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							quis nisi orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Vestibulum quis mattis est. Sed at massa neque. Suspendisse non nibh neque. Duis orci diam, dignissim
							sit amet aliquet vehicula, consectetur sed dolor. Maecenas lectus elit, consequat nec sapien at,
							tincidunt consequat elit.
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
