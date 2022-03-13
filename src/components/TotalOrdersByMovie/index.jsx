import React from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "../ProgressBar";

export const TotalOrdersByMovie = ({
	movieTitle,
	totalOrders,
	progressColor,
}) => {
	return (
		<div className="pl-16 text-12 font-reg text-mocha-60">
			<strong className="font-reg text-mocha-80 text-24">
				{totalOrders.toLocaleString("en-US")}
			</strong>
			<br />
			Total Orders - {movieTitle}
			<br />
			<ProgressBar color={progressColor} />
		</div>
	);
};

TotalOrdersByMovie.propTypes = {
	movieTitle: PropTypes.string.isRequired,
	totalOrders: PropTypes.number.isRequired,
	progressColor: PropTypes.oneOf([
		"hi-alert",
		"acknowledge",
		"mocha-50",
		"alert",
		"gold",
	]),
};
