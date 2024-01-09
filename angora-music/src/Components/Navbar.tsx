import React, { useEffect, useState } from 'react';
import { getCookieByName, setCookie, themeCookieName } from '../utils/cookies';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { images } from '../utils/images';
import { DisplayMode } from '../types/display';

interface Props {
	theme: DisplayMode;
	setTheme: React.Dispatch<React.SetStateAction<DisplayMode>>;
}

const Navbar = (props: Props) => {
	const { theme, setTheme } = props;

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const currCookie = getCookieByName(themeCookieName);
		if (currCookie !== theme) {
			setCookie(themeCookieName, theme);
		}
		console.log(document.cookie);
	}, [theme]);

	return (
		<div
			className={`flex flex-row   ${
				theme === 'dark' ? 'bg-angora-dark-purple' : 'bg-angora-purple'
			}   h-8 lg:h-16   p-1 lg:p-2`}
		>
			<div className={`absolute lg:hidden   left-1 top-1 ${theme === 'dark' ? 'text-angora-white' : 'text-angora-black'}`}>
				<GiHamburgerMenu size="1.5rem" /> {/* 1.5 rem is the equivalent of h-6 using tailwind */}
			</div>
			<img
				src={images['logo.png']}
				alt="Angora logo"
				className="flex lg:absolute   h-full lg:h-12   mx-auto lg:mx-0   lg:left-2 lg:top-2"
			/>
			<div
				className={`hidden lg:flex   text-base lg:text-2xl   flex-row m-auto gap-2 ${
					theme === 'dark' ? 'text-angora-white' : 'text-angora-black'
				}`}
			>
				LINKS GO HERE
			</div>
			<div
				className={`right-1 lg:right-2   top-1 lg:top-2   absolute border border-solid rounded-sm ${
					theme === 'dark' ? 'text-angora-white border-angora-white' : 'text-angora-black border-angora-black'
				}`}
			>
				{theme === 'dark' ? <FaRegMoon size="1.5rem" /> : <FaRegSun size="1.5rem" />}
			</div>
		</div>
	);
};

export default Navbar;
