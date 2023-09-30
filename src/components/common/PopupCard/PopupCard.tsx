import { HTMLAttributes, useEffect, useRef } from "react";
import "./popupCard.scss";
import { bgResolver, colorResolver } from "@/contexts/themeContext";

type HTMLDivElementProps = HTMLAttributes<HTMLDivElement>;
type Props = HTMLDivElementProps & {
	alignment: "left" | "right" | "center";
	padded?: boolean;
};

export const PopupCard = ({ children, alignment, padded }: Props) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// setting distance from the top
		const parentHeight = cardRef.current?.parentElement?.clientHeight;
		if (cardRef.current && parentHeight) {
			cardRef.current.style.top = `${parentHeight / 16 + 1}rem`;
			if (alignment !== "center") {
				cardRef.current.style[alignment] = "0";
			} else {
				cardRef.current.style.left = "50%";
				cardRef.current.style.transform = "translateX(-50%)";
			}
		}
	}, []);

	return (
		<div
			ref={cardRef}
			className={`popupCard softShadow ${bgResolver(
				"bgWhite",
				"bgDark"
			)} ${colorResolver("colorDarkGray", "colorWhiteDimmed")}`}
		>
			<div style={{ ...(padded && { padding: "1.5rem" }) }}>{children}</div>
		</div>
	);
};
