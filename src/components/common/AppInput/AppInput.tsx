import {
	bgResolver,
	borderResolver,
	colorResolver,
	placeholderResolver,
} from "@/contexts/themeContext";
import "./appInput.scss";
import { useRef } from "react";
import type { HTMLAttributes } from "react";
import { LuSearch } from "react-icons/lu";

type HTMLInputElementAttributes = HTMLAttributes<HTMLInputElement>;

const permittedInputTypes = ["text", "password", "email"] as const;

type Props = Omit<HTMLInputElementAttributes, "type"> & {
	type?: (typeof permittedInputTypes)[number];
	wrapperClassName?: HTMLInputElementAttributes["className"];
};

const BaseInput = ({
	type = "text",
	className,
	wrapperClassName,
	...props
}: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div
			className={`appInput ${wrapperClassName} ${colorResolver(
				"colorGray",
				"colorLightGray"
			)} ${borderResolver("borderGray", "borderLightGray")} ${bgResolver(
				"bgWhite",
				"bgLessDark"
			)}`}
			onClick={() => inputRef.current?.focus()}
		>
			<input
				ref={inputRef}
				type={permittedInputTypes.includes(type) ? type : "text"}
				className={`${className} ${colorResolver(
					"colorDarkGray",
					"colorGray"
				)} ${placeholderResolver(
					"colorPlaceholderGray",
					"colorPlaceholderLightGray"
				)}`}
				{...props}
			/>
			<span>
				<LuSearch />
			</span>
		</div>
	);
};

export const AppInput = BaseInput;
