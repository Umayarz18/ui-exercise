import React from "react";
import PropTypes from 'prop-types';
import {ProgressBar} from '../ProgressBar';
export const TotalOrdersByMovie = ({movieTitle, totalOrders})=>{
    return (
        <React.Fragment>
            <p>
                {totalOrders}
            </p>
            <p>Total Orders - {movieTitle}</p>
            <ProgressBar/>
        </React.Fragment>
    )
}