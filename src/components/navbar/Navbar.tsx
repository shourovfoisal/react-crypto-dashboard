import { useContext } from "react";
import "./navbar.scss";
import { HiOutlineBell } from "react-icons/hi2";
import {
	ThemeContext,
	bgResolver,
	colorResolver,
} from "@/contexts/themeContext";

export const Navbar = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<div className="navbar">
			<div className="logo">
				<img src="logo.svg" alt="Logo" />
				<span>lamadmin</span>
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
