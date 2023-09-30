import { HTMLAttributes, useEffect, useRef } from "react";
import "./popupCard.scss";

type HTMLDivElementProps = HTMLAttributes<HTMLDivElement>;
type Props = HTMLDivElementProps & {
	orientation: "left" | "right" | "center";
};

export const PopupCard = ({ children, orientation }: Props) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// setting distance from the top
		const parentHeight = cardRef.current?.parentElement?.clientHeight;
		if (cardRef.current && parentHeight) {
			cardRef.current.style.top = `${parentHeight / 16 + 1}rem`;
			if (orientation !== "center") {
				cardRef.current.style[orientation] = "0";
			} else {
				cardRef.current.style.left = "50%";
				cardRef.current.style.transform = "translateX(-50%)";
			}
		}
	}, []);

	return (
		<div ref={cardRef} className="popupCard softShadow">
			{children}
		</div>
	);
};
