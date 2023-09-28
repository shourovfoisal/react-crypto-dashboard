import "./toggleButton.scss";

type Props = React.HTMLAttributes<HTMLInputElement>;

export const ToggleButton = ({ onClick }: Props) => {
	return (
		<div className="buttonBox" onClick={onClick}>
			<input id="darkModeButton" type="checkbox" />
			<label htmlFor="darkModeButton"></label>
		</div>
	);
};
