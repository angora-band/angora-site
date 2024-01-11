import React from 'react';
import { DisplayMode } from '../../types/display';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import { images } from '../../utils/images';

interface Props {
	theme: DisplayMode;
}

const Home = (props: Props) => {
	const { theme } = props;

	return (
		<div
			className={`min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]   p-4 lg:p-8   ${
				theme === 'dark' ? 'bg-angora-black text-angora-dark-white' : 'bg-angora-white text-angora-black'
			}`}
		>
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
		</div>
	);
};

export default Home;
