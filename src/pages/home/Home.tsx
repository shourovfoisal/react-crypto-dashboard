import { BarChartBox, ChartBox, PieChartBox, TopBox } from "@/components";
import "./home.scss";
import {
	chartBoxUser,
	chartBoxProduct,
	chartBoxRevenue,
	chartBoxConversion,
	barChartBoxVisit,
	barChartBoxRevenue,
} from "@/data";
import { bgResolver } from "@/contexts/themeContext";

export const Home = () => {
	return (
		<div
			className={`home ${bgResolver(
				"bgImmediateDescendantsWhite",
				"bgImmediateDescendantsLessDark"
			)}`}
		>
			<div className="box box1">{/* <TopBox /> */}1</div>
			<div className="box box2">{/* <ChartBox {...chartBoxUser} /> */}2</div>
			<div className="box box3">{/* <ChartBox {...chartBoxProduct} /> */}3</div>
			<div className="box box4">{/* <PieChartBox /> */}4</div>
			<div className="box box5">
				{/* <ChartBox {...chartBoxConversion} /> */}5
			</div>
			<div className="box box6">{/* <ChartBox {...chartBoxRevenue} /> */}6</div>
			<div className="box box7">7</div>
			<div className="box box8">
				{/* <BarChartBox {...barChartBoxVisit} /> */}8
			</div>
			<div className="box box9">
				{/* <BarChartBox {...barChartBoxRevenue} /> */}9
			</div>
		</div>
	);
};
