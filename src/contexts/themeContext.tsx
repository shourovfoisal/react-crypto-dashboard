import { ReactNode, createContext, useState, useContext } from "react";

interface Props {
	children: ReactNode;
}

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
	{} as ThemeContextType
);

export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<Theme>("dark");

	const toggleTheme = () => {
		setTheme(prev => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Detects theme and sends the right class for the component
type lightBgClasses = "bgWhite" | "bgLight";
type darkBgClasses = "bgLessDark" | "bgDark";

export const bgResolver = (
	lightClass: lightBgClasses,
	darkClass: darkBgClasses
): lightBgClasses | darkBgClasses => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};

type lightColorClasses = "colorPrimary" | "borderRightGray";
type darkColorClasses = "colorWhite" | "borderRightDarkGray";

export const colorResolver = (
	lightClass: lightColorClasses,
	darkClass: darkColorClasses
): lightColorClasses | darkColorClasses => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};
