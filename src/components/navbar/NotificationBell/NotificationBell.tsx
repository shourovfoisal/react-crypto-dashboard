import { bgResolver, colorResolver } from "@/contexts/themeContext";
import "./notificationBell.scss";
import { PopupCard } from "@/components/common";
import { HiOutlineBell } from "react-icons/hi2";
import { useState } from "react";

export const NotificationBell = () => {
	const [showPanel, setShowPanel] = useState<boolean>(false);

	return (
		<div className="notificationContainer">
			<div
				className={`notification ${colorResolver(
					"colorPrimary",
					"colorWhite"
				)}`}
				onClick={() => setShowPanel(prev => !prev)}
			>
				<HiOutlineBell />
				<div className={bgResolver("bgWhite", "bgLessDark")}>
					<span className="bgRed"></span>
				</div>
			</div>
			{showPanel && (
				<PopupCard alignment="center">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</PopupCard>
			)}
		</div>
	);
};
