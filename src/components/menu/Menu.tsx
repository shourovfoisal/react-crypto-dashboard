import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "@/data";
import { colorResolver } from "@/contexts/themeContext";

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
					<span className="title">{item.title}</span>
					{item.listItems.map(listItem => (
						<Link to={listItem.url} className="listItem" key={listItem.id}>
							<img src={listItem.icon} alt={listItem.title} />
							<span className="listItemTitle">{listItem.title}</span>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};
