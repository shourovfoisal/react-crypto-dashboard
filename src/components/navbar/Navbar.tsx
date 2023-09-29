import { useContext } from "react";
import "./navbar.scss";
import { HiOutlineBell } from "react-icons/hi2";
import { PiDotsNineThin } from "react-icons/pi";
import {
	ThemeContext,
	bgResolver,
	colorResolver,
} from "@/contexts/themeContext";
import { AppInput, ToggleButton } from "@/components/common";

export const Navbar = () => {
	const { toggleTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		toggleTheme();
	};

	return (
		<div className="navbar">
			<div className="search">
				<AppInput
					type="text"
					placeholder="Search"
					className={colorResolver(
						"colorPlaceholderGray",
						"colorPlaceholderDarkGray"
					)}
					wrapperClassName={colorResolver("colorGray", "colorDarkGray")}
				/>
			</div>
			<div className="userPanel">
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
				<div
					className={`user ${bgResolver("bgLight", "bgDark")} ${colorResolver(
						"colorDarkGray",
						"colorGray"
					)}`}
				>
					<div className="image">
						<img src="/user.png" alt="user avatar" />
					</div>
					<div className="nameEmail">
						<div>Shourov Foisal</div>
						<div>hello@devshourov.com</div>
					</div>
					<div className="icon">
						<PiDotsNineThin />
					</div>
				</div>
			</div>
		</div>
	);
};
