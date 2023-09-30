import { bgResolver, colorResolver } from "@/contexts/themeContext";
import "./notificationBell.scss";
import { PopupCard } from "@/components/common";
import { HiOutlineBell } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { getNotificationData } from "@/staticData";
import { NotificationData } from "@/staticData/notificationData";

export const NotificationBell = () => {
	const [showPanel, setShowPanel] = useState<boolean>(false);
	const [showRedCircle, setShowRedCircle] = useState<boolean>(false);
	const [notificationData, setNotificationData] =
		useState<NotificationData[]>();

	useEffect(() => {
		const getNotification = async () => {
			const data = await getNotificationData();
			if (data.length > 0) {
				setShowRedCircle(true);
				setNotificationData(data);
			}
		};
		getNotification();
	}, []);

	useEffect(() => {
		if (showPanel) {
			setShowRedCircle(false);
		}
	}, [showPanel]);

	const handleNotificationClick = () => {
		setShowPanel(false);
	};

	return (
		<div className="notificationContainer">
			<div
				className={`notificationIcon ${colorResolver(
					"colorPrimary",
					"colorWhite"
				)}`}
				onClick={() => setShowPanel(prev => !prev)}
			>
				<HiOutlineBell />
				{showRedCircle && (
					<div className={bgResolver("bgWhite", "bgLessDark")}>
						<span className="bgRed"></span>
					</div>
				)}
			</div>
			{showPanel && (
				<PopupCard alignment="center">
					<div className="notification whitespaceNowrap">
						{notificationData?.map(notification => (
							<div
								className="notificationMessage selectNone"
								key={notification.whatHappened}
								onClick={handleNotificationClick}
							>
								<p className="whatHappened">{notification.whatHappened}</p>
								{notification.whenHappened && (
									<p className="whenHappened">
										{notification.whenHappened.toDateString()}
									</p>
								)}
							</div>
						))}
					</div>
				</PopupCard>
			)}
		</div>
	);
};
