import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "@/static-data";
import { bgResolver, colorResolver } from "@/contexts/themeContext";
import { Icons } from "@/components";

export const Menu = () => {
	return (
		<div className="menu">
			<div className="logo">
				<img src="/logo.svg" alt="app logo" />
				<h2>
					Blue
					<span className={colorResolver("colorBlack", "colorWhite")}>
						Trade.
					</span>
				</h2>
			</div>
			{menu.map(item => (
				<div className="item" key={item.id}>
					{item.menuItems.map(menuItem => (
						<Link
							to={menuItem.url}
							className={`menuItem ${colorResolver(
								"colorBlack",
								"colorWhite"
							)} colorHoverPrimary ${bgResolver(
								"bgHoverPrimary",
								"bgHoverPrimaryDarker"
							)}`}
							key={menuItem.id}
						>
							<Icons name={menuItem.icon} />
							<span className="menuItemTitle">{menuItem.title}</span>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};
