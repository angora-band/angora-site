import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalNavLinkKey, globalNavLinks } from './utils/navigation';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Videos from './Pages/Videos';
import Live from './Pages/Live';
import { ThemeProvider } from './Contexts/ThemeContext';

const App = () => {

	const getComponent = (navKey: GlobalNavLinkKey): ReactElement => {
		switch (navKey) {
			case 'home':
				return <Home />;
			case 'about':
				return <About />;
			case 'videos':
				return <Videos />;
			case 'live':
				return <Live />;
		}
	};

	return (
		<ThemeProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					{Object.keys(globalNavLinks).map((key) => (
						<Route path={globalNavLinks[key as GlobalNavLinkKey]} element={getComponent(key as GlobalNavLinkKey)} />
					))}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
