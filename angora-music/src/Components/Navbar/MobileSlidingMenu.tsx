import React, { useEffect, useRef } from 'react';
import { NamedLink } from '../../types/navigation';
import { DisplayMode } from '../../types/display';
import { Link, useLocation } from 'react-router-dom';

interface Props {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	theme: DisplayMode;
	links: NamedLink[];
}

const MobileSlidingMenu = (props: Props) => {
	const { show, setShow, theme, links } = props;
	const location = useLocation();
	const menuRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		if (show) {
			menuRef.current?.focus();
		}
	}, [show]);

	return (
		<div
			className={`lg:hidden fixed w-full h-full top-0 ${
				show ? 'bg-angora-dark-black/50 left-0' : 'transparent -left-[100vw]'
			} transition-all duration-500`}
		>
			<div
				ref={menuRef}
				className={`flex flex-col w-1/2 h-full pt-24 pl-8 gap-8 outline-none text-2xl ${
					theme === 'dark' ? 'bg-angora-dark-purple text-angora-dark-white' : 'bg-angora-purple text-angora-white'
				}`}
				tabIndex={0}
				onBlur={() => setShow(false)}
			>
				{links.map((link) => {
					const onPage = location.pathname === link.link;
					return (
						<Link
							to={link.link}
							className={`${onPage ? 'underline' : ''}`}
							key={link.text}
							onClick={() => setShow(false)}
						>
							{link.text}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default MobileSlidingMenu;
