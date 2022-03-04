import React from "react";
import PropTypes from 'prop-types';

export const Card = ({children, hasShadow})=>{
    const shadow = hasShadow ? 'shadow' : '';
    return (
        <div className="m-4 bg">
            <React.Fragment className={["m-4", shadow].join(" ")}>
                {children}
            </React.Fragment>
        </div>
    )
}

Card.propTypes ={
    /**
     * The contents inside the card
     */
    children: PropTypes.any,
    /**
     * Should this card have a shadow?
     */
    hasShadow: PropTypes.bool,
    /**
     * 
     */
}

Card.defaultProps = {
    hasShadow: true,
    children: <p>hahahahah</p>,
};