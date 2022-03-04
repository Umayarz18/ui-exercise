import React from "react";
import PropTypes from 'prop-types';

export const ProgressBar = ({min, max, value, color})=>{
    return (
        <progress 
            min={min} 
            max={max} 
            value={value} 
            color={color}
        />
    )
}

ProgressBar.propTypes ={
    /**Minimum value of progress bar */
    min: PropTypes.number,
    /**Maximum value of progress bar */
    max: PropTypes.number,
    /**Current value to be shown */
    value: PropTypes.number.isRequired,
    /** Choose a color from the design system */
    color: PropTypes.string.isRequired,
}

ProgressBar.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    color: 'mocha50'
};