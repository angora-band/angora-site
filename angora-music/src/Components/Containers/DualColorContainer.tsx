import React, { PropsWithChildren, useCallback } from 'react';
import { useTheme } from '../../Contexts/ThemeContext';

interface Props extends PropsWithChildren {
	flip?: boolean;
}

// if this doesn't end up getting used, remember to remove the border color classes from the tailwind safelist
const DualColorContainer = (props: Props) => {
	const { theme } = useTheme();
	const { flip, children } = props;

	const getBorderColorClass = useCallback(
		(whichColor: 1 | 2) => {
			let colorClass = 'border-angora-';
			if (theme === 'dark') {
				colorClass += 'dark-';
			}
			switch (whichColor) {
				case 1:
					if (flip) {
						colorClass += 'green';
					} else {
						colorClass += 'purple';
					}
					break;
				case 2:
					if (flip) {
						colorClass += 'purple';
					} else {
						colorClass += 'green';
					}
					break;
			}
			return colorClass;
		},
		[theme, flip]
	);

	return (
		<div className='relative m-8'>
			<div
				className={`absolute -top-8 -left-8 w-[calc(100%+3.5rem)] h-[calc(100%+3.5rem)] border border-1 ${getBorderColorClass(
					1
				)} rounded-lg pointer-events-none`}
			/>
			<div
				className={`absolute -bottom-8 -right-8 w-[calc(100%+3.5rem)] h-[calc(100%+3.5rem)] border border-1 ${getBorderColorClass(
					2
				)} rounded-lg pointer-events-none`}
			/>
			{children}
		</div>
	);
};

export default DualColorContainer;
