import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { DisplayMode } from './types/display';
import { getCookieByName, themeCookieName } from './utils/cookies';

const App = () => {
	const startingTheme = getCookieByName(themeCookieName);
	const [theme, setTheme] = useState<DisplayMode>((startingTheme ?? 'dark') as DisplayMode);
	return (
		<BrowserRouter>
			<Navbar theme={theme} setTheme={setTheme} />
			<Routes>
				<Route path="/" element={<Home theme={theme} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
