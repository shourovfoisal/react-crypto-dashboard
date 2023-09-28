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
			className={`appInput ${wrapperClassName}`}
			onClick={() => inputRef.current?.focus()}
		>
			<input
				ref={inputRef}
				type={permittedInputTypes.includes(type) ? type : "text"}
				className={className}
				{...props}
			/>
			<span>
				<LuSearch />
			</span>
		</div>
	);
};

export const AppInput = BaseInput;
