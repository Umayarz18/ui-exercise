import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TotalOrdersByMovie } from "../TotalOrdersByMovie";
import { LineChart } from "../LineChart";
import { Card } from "../Card";

export const DataVisCard = ({ moviesData, location, updatedAt }) => {
	const [graphData, setGraphData] = useState([]);

	//Limitation of my knowledge of SASS + Chart.js
	// Manual color object
	//Probably prevented if used JSS
	const graphColors = [
		{
			label: "acknowledge",
			color: "#4fa806",
		},
		{
			label: "mocha-50",
			color: "#7F7D79",
		},
		{
			label: "hi-alert",
			color: "#e42508",
		},
		{
			label: "alert",
			color: "#e4a206",
		},
		{
			label: "gold",
			color: "#f7e0aa",
		},
	];

	useEffect(() => {
		const graphArray = [];
		moviesData.map((obj, index) => {
			return graphArray.push({
				title: obj.title,
				label: obj.title,
				totalOrders: obj.totalOrders,
				data: obj.data,
				fill: true,
				borderColor: graphColors[index].color,
				backgroundColor: graphColors[index].color + "2C",
				tension: 0.3,
			});
		});
		setGraphData(graphArray);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moviesData]);

	function transformDate(date) {
		const [month, day, year] = [
			date.getMonth(),
			date.getDate(),
			date.getFullYear(),
		];
		return `${month + 1}.${day}.${year}`;
	}

	//Would Calculate total sales
	function calculateTotalSales(numData) {
		const totalSalesAmount = numData.reduce(
			(previousValue, currentValue) =>
				numData[previousValue]?.totalOrders +
				numData[currentValue].totalOrders,
			0
		);

		return totalSalesAmount.toLocaleString("en-US");
	}

	const chartTitle = () => {
		let totalTitle = "Comparision - ";
		for (let i = 0; i < moviesData.length; i++) {
			if (i === 3) {
				totalTitle += " etc..."
				break;
			}
			else if (i + 1 === moviesData.length) {
				totalTitle += `and ${moviesData[i].title}`;
				break;
			}
			else {
				totalTitle += moviesData[i].title + ", ";
			}
		}
		return totalTitle;
	}

	/**
	 * A would be function that takes a look at movie data then generates an
	 * AI message about the results
	 */
	function analyzeMovieData() {
		//would look at the results and place through an imaginary
		//implementation of ML model then return a message based on model

		return "The value has been changed over time, and last month reached a level over $50,000";
	}

	return (
		<Card classes="data-card card--xl">
			<div className="card-header text-14 font-reg text-mocha-60">
				<h2 className="section-title text-20 font-semi text-mocha-80">
					Total Movie Sales
				</h2>
				<p className="chart-title">
					{chartTitle()}
				</p>
				<p className="average-sales-location">
					Average value of sales in the past month in:{" "}
					<strong>{location}</strong>
				</p>
				<p className="all-sales">All sales: {162862}</p>
			</div>
			<div className="card-body">
				<LineChart
					data={graphData}
					options={{
						responsive: true,
						maintainAspectRatio: true,
						plugins: {
							legend: {
								display: false,
								position: "top",
								align: "start",
							},
						},
					}}
				/>
				<div className="compared-movies">
					{moviesData.map((movie, index) => (
						<TotalOrdersByMovie
							key={`${movie.title}-total-orders-by-movie`}
							movieTitle={movie.title}
							totalOrders={movie.totalOrders}
							progressColor={graphColors[index].label}
						/>
					))}
				</div>
			</div>
			<div className="card-footer mt-24 text-mocha-60 text-12 font-reg">
				<div className="text-14 font-semi">
					<strong>Analysis of sales:</strong>
					<p className="font-reg">{analyzeMovieData()}</p>
				</div>
				<p>
					<i className="fa fa-clock-o text-mocha-80"></i> Update on{" "}
					{transformDate(updatedAt)}
				</p>
			</div>
		</Card>
	);
};

DataVisCard.propTypes = {
	moviesData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			releaseDate: PropTypes.instanceOf(Date).isRequired,
			data: PropTypes.arrayOf(PropTypes.number).isRequired,
			totalOrders: PropTypes.number.isRequired,
		})
	).isRequired,
	location: PropTypes.string.isRequired,
	updatedAt: PropTypes.PropTypes.instanceOf(Date).isRequired,
};

DataVisCard.defaultProps = {
	location: "United States",
	updatedAt: new Date(),
	moviesData: [
		{
			title: "Movie 1",
			data: [48, 48, 60, 38, 56, 37, 30],
			totalOrders: 2346,
			releaseDate: new Date(2015, 0, 4),
		},
		{
			title: "Movie 2",
			data: [65, 60, 40, 50, 35, 24, 39],
			totalOrders: 4422,
			releaseDate: new Date(2015, 0, 4),
		},
	],
};
