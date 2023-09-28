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
type lightThemeBackgrounds = "bgWhite" | "bgLight" | "bgHoverPrimary";
type darkThemeBackgrounds = "bgLessDark" | "bgDark" | "bgHoverPrimaryDarker";

export const bgResolver = (
	lightClass: lightThemeBackgrounds,
	darkClass: darkThemeBackgrounds
): lightThemeBackgrounds | darkThemeBackgrounds => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};

type lightThemeColors =
	| "colorPrimary"
	| "borderRightGray"
	| "colorBlack"
	| "colorGray"
	| "colorPlaceholderGray";
type darkThemeColors =
	| "colorWhite"
	| "borderRightDarkGray"
	| "colorDarkGray"
	| "colorPlaceholderDarkGray";

export const colorResolver = (
	lightClass: lightThemeColors,
	darkClass: darkThemeColors
): lightThemeColors | darkThemeColors => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};
