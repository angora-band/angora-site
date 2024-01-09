export const themeCookieName = 'AngoraTheme';

export const getCookieByName = (name: string): string | undefined => {
	const cookies = document.cookie;
	const cookieValue = cookies
		.split('; ')
		.find((c) => c.startsWith(name + '='))
		?.split('=')[1];
	return cookieValue;
};

export const setCookie = (name: string, value: string): void => {
	document.cookie = `${name}=${value}`;
};
