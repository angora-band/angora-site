import React from 'react';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import { images } from '../../utils/images';
import { StreamingPlatformLinkKey, streamingPlatformLinks } from '../../utils/navigation';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';

const Home = () => {
	return (
		<PageBodyContainer simpleFooter>
			<DualColorContainer>
				<div className='gap-12 lg:gap-20   flex-col lg:flex-row   flex items-center'>
					<img
						src={images['red-stars-cover.png']}
						alt='EP cover for "in the static"'
						className='w-3/4 lg:w-1/3   h-3/4 lg:h-1/3   flex'
					/>
					<div className='gap-4 lg:gap-8   flex flex-col'>
						<p className='text-4xl lg:text-6xl   font-semibold'> red stars </p>
						<a href='https://distrokid.com/hyperfollow/angora2/red-stars' className='text-lg lg:text-2xl   underline'>
							out 2/14, presave now
						</a>
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
