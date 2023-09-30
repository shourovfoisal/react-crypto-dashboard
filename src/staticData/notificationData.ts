export type NotificationData = {
	whatHappened: string;
	whenHappened?: Date;
};

export const notificationData: NotificationData[] = [
	{
		whatHappened: "Price of SOL is increasing.",
		whenHappened: new Date(),
	},
	{
		whatHappened: "Read blog: How to analyze PNL",
		whenHappened: new Date(),
	},
	{
		whatHappened: "Perfect time to buy MATIC",
	},
];

export const getNotificationData = async (): Promise<NotificationData[]> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(notificationData);
		}, 1000);
	});
};
