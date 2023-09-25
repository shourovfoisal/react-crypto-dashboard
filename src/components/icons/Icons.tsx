import { ReactNode } from "react";
import { MdCandlestickChart } from "react-icons/md";
import { RxExit, RxPerson } from "react-icons/rx";
import { BsGearWide } from "react-icons/bs";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";

export const iconCollection = {
	candlestick: <MdCandlestickChart />,
	exit: <RxExit />,
	gear: <BsGearWide />,
	transaction: <LiaExchangeAltSolid />,
	person: <RxPerson />,
	question: <AiOutlineQuestionCircle />,
	dashboard: <BiSolidDashboard />,
};

export type IconCollection = keyof typeof iconCollection;

interface Props {
	name: IconCollection;
}

export const Icons = ({ name }: Props): ReactNode => {
	return name in iconCollection ? iconCollection[name] : null;
};
