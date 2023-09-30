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
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		setTheme(prev => {
			return prev === "light" ? "dark" : "light";
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

/**
 * Background Resolver
 */

type lightThemeBackgrounds =
	| "bgWhite"
	| "bgLight"
	| "bgImmediateDescendantsWhite";
type darkThemeBackgrounds =
	| "bgLessDark"
	| "bgDark"
	| "bgImmediateDescendantsLessDark";

export const bgResolver = (
	lightClass: lightThemeBackgrounds,
	darkClass: darkThemeBackgrounds
): lightThemeBackgrounds | darkThemeBackgrounds => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};

/**
 * Background Hover Resolver
 */

type LightThemeBackgroundHoverColor = "bgHoverPrimary" | "bgHoverWhiteDimmed";
type DarkThemeBackgroundHoverColor = "bgHoverPrimaryDarker" | "bgHoverLessDark";

export const bgHoverResolver = (
	lightClass: LightThemeBackgroundHoverColor,
	darkClass: DarkThemeBackgroundHoverColor
): LightThemeBackgroundHoverColor | DarkThemeBackgroundHoverColor => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};

/**
 * Color Resolver
 */

type LightThemeColor =
	| "colorPrimary"
	| "colorBlack"
	| "colorGray"
	| "colorDarkGray";
type DarkThemeColor =
	| "colorWhite"
	| "colorGray"
	| "colorLightGray"
	| "colorWhiteDimmed";

export const colorResolver = (
	lightClass: LightThemeColor,
	darkClass: DarkThemeColor
): LightThemeColor | DarkThemeColor => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightClass : darkClass;
};

/**
 * Border Resolver
 */

type LightThemeBorderColor = "borderRightGray" | "borderGray";
type DarkThemeBorderColor = "borderRightDarkGray" | "borderLightGray";

export const borderResolver = (
	lightThemeClass: LightThemeBorderColor,
	darkThemeClass: DarkThemeBorderColor
): LightThemeBorderColor | DarkThemeBorderColor => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightThemeClass : darkThemeClass;
};

/**
 * Placeholder Resolver
 */

type LightThemePlaceholderColor = "colorPlaceholderGray";
type DarkThemePlaceholderColor = "colorPlaceholderLightGray";

export const placeholderResolver = (
	lightThemeClass: LightThemePlaceholderColor,
	darkThemeClass: DarkThemePlaceholderColor
): LightThemePlaceholderColor | DarkThemePlaceholderColor => {
	const { theme } = useContext(ThemeContext);
	return theme === "light" ? lightThemeClass : darkThemeClass;
};
