import React from 'react';
import { DisplayMode } from '../../types/display';

interface Props {
	theme: DisplayMode;
}

const Home = (props: Props) => {
	const { theme } = props;

	return (
		<div className={`h-screen p-8 ${theme === 'dark' ? 'bg-angora-black' : 'bg-angora-white'}`}>
			<p className="text-angora-dark-green">Hello world</p>
		</div>
	);
};

export default Home;
