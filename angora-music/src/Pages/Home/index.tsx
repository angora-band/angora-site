import React from 'react';
import { DisplayMode } from '../../types/display';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import { images } from '../../utils/images';
import { StreamingPlatformLinkKey, entwineLinks, streamingPlatformLinks } from '../../utils/navigation';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';

interface Props {
	theme: DisplayMode;
}

const Home = (props: Props) => {
	const { theme } = props;

	return (
		<PageBodyContainer theme={theme} simpleFooter>
			<DualColorContainer theme={theme}>
				<div className='flex-col lg:flex-row   mx-4 lg:mx-16   flex gap-8 justify-evenly items-center'>
					<div className='hidden xl:block   w-0 xl:w-1/6' />
					<p className='text-3xl lg:text-6xl   text-center'>
						entwine out now
					</p>
					<div className='w-full lg:w-1/4   flex flex-row my-auto justify-evenly items-center'>
						{Object.keys(entwineLinks).map((key) => (
							<a
								href={entwineLinks[key as StreamingPlatformLinkKey]}
								target='_blank'
								rel='noopener noreferrer'
								className='w-20 3xl:w-40   h-20 3xl:h-40   items-center'
							>
								<img src={images[key + '.png']} alt={'entwine on ' + key} />
							</a>
						))}
					</div>
					<div className='hidden xl:block   w-0 xl:w-1/6' />
				</div>
			</DualColorContainer>
			<DualColorContainer theme={theme}>
				<div className='gap-12 lg:gap-20   flex-col lg:flex-row   flex items-center'>
					<img
						src={images['in-the-static-ep-cover.jpg']}
						alt='EP cover for "in the static"'
						className='w-3/4 lg:w-1/3   h-3/4 lg:h-1/3   flex'
					/>
					<div className='gap-4 lg:gap-8   flex flex-col'>
						<p className='text-4xl lg:text-6xl   font-semibold'> in the static </p>
						<p className='text-lg lg:text-2xl'>
							One new band. Five new songs. Coming to all streaming platforms April 19th. Long Live The Rabbit.
						</p>
						<br/>
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
