import { IconCollection } from "@/components";

interface MenuItems {
	id: number;
	title: string;
	url: string;
	icon: IconCollection;
}

export interface Menu {
	id: number;
	title: string;
	menuItems: MenuItems[];
}

export const menu: Menu[] = [
	{
		id: 1,
		title: "main",
		menuItems: [
			{
				id: 1,
				title: "Dashboard",
				url: "/",
				icon: "dashboard",
			},
		],
	},
	{
		id: 2,
		title: "user",
		menuItems: [
			{
				id: 1,
				title: "Markets",
				url: "/markets",
				icon: "candlestick",
			},
			{
				id: 2,
				title: "Transactions",
				url: "/transactions",
				icon: "transaction",
			},
			{
				id: 3,
				title: "Profile",
				url: "/profile",
				icon: "person",
			},
			{
				id: 4,
				title: "Setting",
				url: "/setting",
				icon: "gear",
			},
		],
	},
	{
		id: 3,
		title: "actions",
		menuItems: [
			{
				id: 1,
				title: "Help",
				url: "/help",
				icon: "question",
			},
			{
				id: 2,
				title: "Log Out",
				url: "/log-out",
				icon: "exit",
			},
		],
	},
];
