import { useContext } from "react";
import "./navbar.scss";
import { HiOutlineBell } from "react-icons/hi2";
import {
	ThemeContext,
	bgResolver,
	colorResolver,
} from "@/contexts/themeContext";
import { AppInput } from "@/components/common";

export const Navbar = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<div className="navbar">
			<div className="search">
				<AppInput
					type="text"
					placeholder="Search."
					className={colorResolver(
						"colorPlaceholderGray",
						"colorPlaceholderDarkGray"
					)}
					wrapperClassName={colorResolver("colorGray", "colorDarkGray")}
				/>
			</div>
			<div className="icons">
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
				{/* <div className="user">
					<img
						src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&fm=jpg&w=640&h=959&lazy=load"
						alt=""
					/>
					<span>Shourov</span>
				</div>
				<img src="settings.svg" alt="" className="icon" /> */}
			</div>
		</div>
	);
};
