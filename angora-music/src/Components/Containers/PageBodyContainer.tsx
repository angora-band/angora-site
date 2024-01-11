import React, { PropsWithChildren } from 'react';
import { DisplayMode } from '../../types/display';
import Footer from '../Footer/Footer';

interface Props extends PropsWithChildren {
	theme: DisplayMode;
	simpleFooter?: boolean;
}

const PageBodyContainer = (props: Props) => {
	const { theme, simpleFooter, children } = props;

	return (
		<div
			className={`min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]   ${
				theme === 'dark' ? 'bg-angora-black text-angora-dark-white' : 'bg-angora-white text-angora-black'
			} flex flex-col`}
		>
			<div className={`p-4 lg:p-8   gap-12 lg:gap-20   flex flex-col`}>{children}</div>
			{<Footer simplify={simpleFooter} />}
		</div>
	);
};

export default PageBodyContainer;
