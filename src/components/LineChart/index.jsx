import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const labels = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
];
export const LineChart = ({ options, data }) => {
	return (
		<div className="chart">
			<Line
				options={options}
				data={{
					labels: labels,
					datasets: data,
				}}
			/>
		</div>
	);
};

LineChart.propTypes = {
	/**Options configuration for Chart.js https://www.chartjs.org/docs/latest/general/options.html */
	options: PropTypes.object.isRequired,
	/** Provided data for the chart */
	data: PropTypes.array.isRequired,
};

LineChart.defaultProps = {
	options: {
		responsive: true,
		aspectRatio: 49489 / 19312,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: "top",
			},
		},
	},
	data: [
		{
			data: [48, 48, 60, 38, 56, 37, 30],
			fill: true,
			borderColor: "#4FA806",
			backgroundColor: "#4FA8062C",
			tension: 0.3,
		},
		{
			data: [65, 60, 40, 50, 35, 24, 39],
			fill: true,
			borderColor: "#9F9D9B",
			backgroundColor: "#9F9D9B2C",
			tension: 0.3,
		},
	],
};
