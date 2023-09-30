import { HTMLAttributes, useContext } from "react";
import "./navbar.scss";
import { ThemeContext } from "@/contexts/themeContext";
import { AppInput, ToggleButton } from "@/components/common";
import { MiniUserPanel } from "./MiniUserPanel/MiniUserPanel";
import { NotificationBell } from "./NotificationBell/NotificationBell";

type HTMLDivElementProps = HTMLAttributes<HTMLDivElement>;

type Props = HTMLDivElementProps;

export const Navbar = ({ className }: Props) => {
	const { toggleTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		toggleTheme();
	};

	return (
		<div className={`navbar ${className}`}>
			<div className="search">
				<AppInput type="text" placeholder="Search" />
			</div>
			<div className="quickAccess">
				<ToggleButton onChange={changeTheme} />
				<NotificationBell />
				<MiniUserPanel />
			</div>
		</div>
	);
};
