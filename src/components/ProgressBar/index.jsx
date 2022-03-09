import React from "react";
import PropTypes from "prop-types";

export const ProgressBar = ({ min, max, value, color }) => {
	return (
		<progress
			className={`status-${color}`}
			min={min}
			max={max}
			value={value}
		/>
	);
};

ProgressBar.propTypes = {
	/**Minimum value of progress bar */
	min: PropTypes.number,
	/**Maximum value of progress bar */
	max: PropTypes.number,
	/**Current value to be shown */
	value: PropTypes.number.isRequired,
	/** Choose a color from the design system */
	color: PropTypes.oneOf([
		"acknowledge",
		"hi-alert",
		"mocha-50",
		"alert",
		"gold",
	]),
};

ProgressBar.defaultProps = {
	min: 0,
	max: 100,
	value: 50,
	color: "mocha-50",
};
