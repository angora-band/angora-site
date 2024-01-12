import React from 'react';
import { DisplayMode } from '../../types/display';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';
import { videos } from '../../utils/videos';
import DualColorContainer from '../../Components/Containers/DualColorContainer';

interface Props {
	theme: DisplayMode;
}

const Videos = (props: Props) => {
	const { theme } = props;

	return (
		<PageBodyContainer theme={theme}>
			{videos.map((video, ind) => (
				<DualColorContainer theme={theme} flip={ind % 2 === 1}>
					<iframe
						className='w-[19.2rem] lg:w-[38.4rem]   h-[10.8rem] lg:h-[21.6rem]   mx-auto'
						src={video.link}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
					<p className='max-w-3/4 lg:max-w-1/3   text-xl lg:text-2xl   flex justify-center mt-2 text-center'>
						{video.title}
					</p>
				</DualColorContainer>
			))}
		</PageBodyContainer>
	);
};

export default Videos;
