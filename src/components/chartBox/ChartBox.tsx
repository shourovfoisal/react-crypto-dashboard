import { Link } from "react-router-dom";
import "./chartBox.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

interface Props {
	title: string;
	number: number | string;
	icon: string;
	chartData: Record<string, any>[];
	dataKey: string;
	color: string;
	percentage: number;
}

export const ChartBox = ({
	title,
	icon,
	number,
	chartData,
	dataKey,
	color,
	percentage,
}: Props) => {
	return (
		<div className="chartBox">
			<div className="boxInfo">
				<div className="title">
					<img src={icon} alt="" />
					<span>{title}</span>
				</div>
				<h1>{number}</h1>
				<Link to="/" style={{ color }}>
					View All
				</Link>
			</div>
			<div className="chartInfo">
				<div className="chart">
					<ResponsiveContainer width="99%" height="100%">
						<LineChart data={chartData}>
							<Tooltip
								contentStyle={{
									backgroundColor: "transparent",
									border: "none",
								}}
								labelStyle={{ display: "none" }}
								position={{ x: 40, y: 60 }}
							/>
							<Line
								type="monotone"
								dataKey={dataKey}
								stroke={color}
								strokeWidth={2}
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className="texts">
					<div
						className="percentage"
						style={{ color: percentage >= 0 ? "limegreen" : "tomato" }}
					>
						{percentage}%
					</div>
					<div className="duration">this month</div>
				</div>
			</div>
		</div>
	);
};
