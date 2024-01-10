import React from 'react';
import { DisplayMode } from '../../types/display';

interface Props {
	theme: DisplayMode;
}

const Videos = (props: Props) => {
	const { theme } = props;

	return (
		<div
			className={`min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]   p-8 ${
				theme === 'dark' ? 'bg-angora-black' : 'bg-angora-white'
			}`}
		>
			<p className={`${theme === 'dark' ? 'text-angora-green' : 'text-angora-dark-purple'} text-xl`}>VIDEOS PAGE</p>
		</div>
	);
};

export default Videos;
