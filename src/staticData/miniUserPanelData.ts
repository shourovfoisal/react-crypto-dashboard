type Items = {
	name: string;
	url: string;
	children?: Items[];
};
type Segment = Pick<Required<Items>, "name" | "children">;

export const miniUserPanelLinks: Segment[] = [
	{
		name: "User Options",
		children: [
			{ name: "Messages", url: "messages" },
			{
				name: "Settings",
				url: "/settings",
			},
			{
				name: "Customer Service",
				url: "/customer-service",
			},
		],
	},
	{
		name: "User Actions",
		children: [{ name: "Log Out", url: "/log-out" }],
	},
];
