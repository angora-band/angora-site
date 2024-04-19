import React, { useContext, useState } from 'react';
import { DisplayMode } from '../types/display';
import { getCookieByName, themeCookieName } from '../utils/cookies';

export interface ThemeContextValue {
    theme: DisplayMode,
    setTheme: React.Dispatch<React.SetStateAction<DisplayMode>>
};

export const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const startingTheme = getCookieByName(themeCookieName);
    const [theme, setTheme] = useState<DisplayMode>((startingTheme ?? 'dark') as DisplayMode);

    return (<ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>);
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used with a ThemeProvider');
    }
    return context;
};
