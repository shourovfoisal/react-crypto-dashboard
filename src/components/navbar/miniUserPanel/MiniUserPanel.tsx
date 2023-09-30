import "./miniUserPanel.scss";
import { PiDotsNineThin } from "react-icons/pi";
import { bgResolver, colorResolver } from "@/contexts/themeContext";
import { miniUserPanelLinks } from "@/staticData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PopupCard } from "@/components/common";

export const MiniUserPanel = () => {
	const [panelVisible, setPanelVisible] = useState<boolean>(false);

	const handleExpand = () => {
		setPanelVisible(prev => !prev);
	};

	return (
		<div
			className={`user ${bgResolver("bgLight", "bgDark")} ${colorResolver(
				"colorDarkGray",
				"colorGray"
			)} ${panelVisible && "softShadow"}`}
		>
			<div className="userTop">
				<div className="image">
					<img src="/user.png" alt="user avatar" />
				</div>
				<div className="nameEmail">
					<div>Shourov Foisal</div>
					<div>hello@devshourov.com</div>
				</div>
				<div className="icon" onClick={handleExpand}>
					<PiDotsNineThin />
				</div>
			</div>
			{panelVisible && (
				<PopupCard alignment="right" padded>
					<div className={`userBottom`}>
						<div className="links whitespaceNowrap">
							{miniUserPanelLinks.map(segment => (
								<div className="segment" key={segment.name}>
									{segment.children.map(link => (
										<Link to={link.url} className="link" key={link.url}>
											{link.name}
										</Link>
									))}
								</div>
							))}
						</div>
					</div>
				</PopupCard>
			)}
		</div>
	);
};
