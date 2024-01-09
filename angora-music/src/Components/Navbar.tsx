import React, { useEffect, useState } from "react";
import { getCookieByName, setCookie, themeCookieName } from "../utils/cookies";
import { GiHamburgerMenu } from "react-icons/gi";
import { images } from "../utils/images";
import { DisplayMode } from "../types/display";

const Navbar = () => {
    const startingTheme = getCookieByName(themeCookieName);
    const [theme, setTheme] = useState<DisplayMode>((startingTheme ?? 'dark') as DisplayMode);

    useEffect(() => {
        const currCookie = getCookieByName(themeCookieName);
        if (currCookie !== theme) {
            setCookie(themeCookieName, theme);
        }
        console.log(document.cookie);
    }, [theme]);

    return (
        <div className={`flex flex-row   ${theme === 'dark' ? 'bg-angora-dark-purple' : 'bg-angora-purple'}   h-8 lg:h-16   p-1 lg:p-2`}>
            <div className='absolute lg:hidden   left-1 top-1 text-angora-white'>
                <GiHamburgerMenu size='1.5rem'/> {/* 1.5 rem is the equivalent of h-6 using tailwind */}
            </div>
            <img src={images['logo.png']} alt='Angora logo' className='flex lg:absolute   h-full lg:h-12   mx-auto lg:mx-0   lg:left-2 lg:top-2' />
        </div>
    );
};

export default Navbar;