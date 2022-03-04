import React from "react";
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  );

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const Chart = ({min, max, options, data})=>{
    return (
        <Line 
            options={options}
            data={data}
        />
    )
}

Chart.propTypes ={
    /**Minimum value of progress bar */
    min: PropTypes.number,
    /**Maximum value of progress bar */
    max: PropTypes.number,
    /**Options configuration for Chart.js */
    options: PropTypes.object.isRequired,
    /** Provided data for the chart */
    data: PropTypes.object.isRequired,
}

Chart.defaultProps = {
    min: 0,
    max: 100,
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
       
          labels: {
              display: false,
          }
        }
      },
    data: {
        labels: labels,
        datasets: [{
          data: [48, 48, 60, 38, 56, 37, 30],
          fill: true,
          borderColor: '#4FA806',
          backgroundColor: '#4FA8062C',
          tension: 0.3
        },
        {
            data: [65, 60, 40, 50, 35, 24, 39],
            fill: true,
            borderColor: '#9F9D9B',
            backgroundColor: '#9F9D9B2C',
            tension: 0.3
          }]}
};