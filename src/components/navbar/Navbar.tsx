import { HTMLAttributes, useContext } from "react";
import "./navbar.scss";
import { HiOutlineBell } from "react-icons/hi2";
import {
	ThemeContext,
	bgResolver,
	colorResolver,
} from "@/contexts/themeContext";
import { AppInput, ToggleButton } from "@/components/common";
import { MiniUserPanel } from "./miniUserPanel/MiniUserPanel";

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
				<div
					className={`notification ${colorResolver(
						"colorPrimary",
						"colorWhite"
					)}`}
				>
					<HiOutlineBell />
					<div className={bgResolver("bgWhite", "bgLessDark")}>
						<span className="bgRed"></span>
					</div>
				</div>
				<MiniUserPanel />
			</div>
		</div>
	);
};
