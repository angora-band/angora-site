import React, { useState, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import { DisplayMode } from './types/display';
import { getCookieByName, themeCookieName } from './utils/cookies';
import { GlobalNavLinkKey, globalNavLinks } from './utils/navigation';

const App = () => {
	const startingTheme = getCookieByName(themeCookieName);
	const [theme, setTheme] = useState<DisplayMode>((startingTheme ?? 'dark') as DisplayMode);

	const getComponent = (navKey: GlobalNavLinkKey): ReactElement => {
		switch (navKey) {
			case 'home':
				return <Home theme={theme} />;
			case 'about':
				return <Home theme={theme} />;
			case 'videos':
				return <Home theme={theme} />;
			case 'live':
				return <Home theme={theme} />;
		}
	};

	return (
		<BrowserRouter>
			<Navbar theme={theme} setTheme={setTheme} />
			<Routes>
				{Object.keys(globalNavLinks).map((key) => (
					<Route path={globalNavLinks[key as GlobalNavLinkKey]} element={getComponent(key as GlobalNavLinkKey)} />
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
