import React from 'react';
import { DisplayMode } from '../../types/display';
import DualColorContainer from '../../Components/Containers/DualColorContainer';

interface Props {
	theme: DisplayMode;
}

const Home = (props: Props) => {
	const { theme } = props;

	return (
		<div
			className={`min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]   p-8 ${
				theme === 'dark' ? 'bg-angora-black' : 'bg-angora-white'
			}`}
		>
			<DualColorContainer theme={theme}>
				<p className={`${theme === 'dark' ? 'text-angora-dark-white' : 'text-angora-black'} text-xl`}>HOME PAGE</p>
			</DualColorContainer>
		</div>
	);
};

export default Home;
