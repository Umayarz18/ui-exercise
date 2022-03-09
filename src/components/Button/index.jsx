import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label, ...props }) => {
	const mode = primary ? "primary" : "";
	return (
		<button
			type="button"
			className={["btn font-semi text-14", mode].join(" ")}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	primary: false,
	label: "button",
	onClick: undefined,
};
