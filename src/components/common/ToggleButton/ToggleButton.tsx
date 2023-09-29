import "./toggleButton.scss";

type Props = React.HTMLAttributes<HTMLInputElement>;

export const ToggleButton = ({ onChange }: Props) => {
	return (
		<div className="buttonBox">
			<input id="darkModeButton" type="checkbox" onChange={onChange} />
			<label htmlFor="darkModeButton"></label>
		</div>
	);
};
