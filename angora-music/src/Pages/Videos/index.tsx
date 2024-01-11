import React from 'react';
import { DisplayMode } from '../../types/display';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';

interface Props {
	theme: DisplayMode;
}

const Videos = (props: Props) => {
	const { theme } = props;

	return (
		<PageBodyContainer theme={theme}>
			<p className={`${theme === 'dark' ? 'text-angora-green' : 'text-angora-dark-purple'} text-xl`}>VIDEOS PAGE</p>
		</PageBodyContainer>
	);
};

export default Videos;
