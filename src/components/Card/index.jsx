import React from "react";
import PropTypes from "prop-types";

export const Card = ({ children, hasShadow, classes }) => {
	const shadow = hasShadow ? "shadow" : "";
	return (
		<div
			className={["p-24 card  bg-white", shadow, classes].join(" ")}
		>
			{children}
		</div>
	);
};

Card.propTypes = {
	/**
	 * The contents inside the card
	 */
	children: PropTypes.any,
	/**
	 * Should this card have a shadow?
	 */
	hasShadow: PropTypes.bool,
	/**
	 * Extra classes for more custom layouts
	 */
	classes: PropTypes.string,
};

Card.defaultProps = {
	hasShadow: true,
	children: <p>hahahahah</p>,
};
