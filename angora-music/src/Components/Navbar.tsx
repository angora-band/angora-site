import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCookieByName, setCookie, themeCookieName } from '../utils/cookies';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { images } from '../utils/images';
import { DisplayMode } from '../types/display';
import { GlobalNavLinkKey, globalNavLinks } from '../utils/navigation';

const navLinks: { text: string; link: string }[] = Object.keys(globalNavLinks).map((key) => ({
	text: key.toUpperCase(),
	link: globalNavLinks[key as GlobalNavLinkKey],
}));

interface Props {
	theme: DisplayMode;
	setTheme: React.Dispatch<React.SetStateAction<DisplayMode>>;
}

const Navbar = (props: Props) => {
	const { theme, setTheme } = props;
	const location = useLocation();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const currCookie = getCookieByName(themeCookieName);
		if (currCookie !== theme) {
			setCookie(themeCookieName, theme);
		}
	}, [theme]);

	return (
		<div className='sticky w-full top-0'>
			<div
				className={`flex flex-row   ${
					theme === 'dark' ? 'bg-angora-dark-black' : 'bg-angora-dark-white'
				}   h-16 lg:h-24   p-2 lg:p-4`}
			>
				<div
					className={`absolute lg:hidden   left-2 top-2 text-angora-white cursor-pointer`}
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<GiHamburgerMenu size='3rem' /> {/* 3 rem is the equivalent of h-12 using tailwind */}
				</div>
				<Link to='/' className='flex lg:absolute   h-12 lg:h-16   mx-auto lg:mx-0   lg:left-4 lg:top-4'>
					<img src={images['logo.png']} alt='Angora logo' />
				</Link>
				<div
					className={`hidden lg:flex   text-base lg:text-2xl   flex-row m-auto gap-16 font-bold ${
						theme === 'dark' ? 'text-angora-white' : 'text-angora-black'
					}`}
				>
					{navLinks.map((link) => {
						const onPage = location.pathname === link.link;
						return (
							<Link to={link.link} className={`${onPage ? 'underline' : ''}`}>
								{link.text}
							</Link>
						);
					})}
				</div>
				<div
					className={`right-2 lg:right-4   top-2 lg:top-4   h-12 lg:h-16   w-12 lg:w-16   p-[7px]   absolute border border-solid rounded-lg cursor-pointer ${
						theme === 'dark' ? 'text-angora-white border-angora-white' : 'text-angora-black border-angora-black'
					}`}
					onClick={() => {
						if (theme === 'dark') {
							setTheme('light');
						} else {
							setTheme('dark');
						}
					}}
				>
					{theme === 'dark' ? (
						<FaRegMoon style={{ width: '100%', height: '100%' }} />
					) : (
						<FaRegSun style={{ width: '100%', height: '100%' }} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
