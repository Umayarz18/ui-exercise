import React from "react";
import PropTypes from "prop-types";

import { Card } from "../Card";
import { Button } from "../Button";

export const MovieCard = ({ title, releaseDate, openShows }) => {
	function transformDate(date) {
		const [month, day, year] = [
			date.getMonth(),
			date.getDate(),
			date.getFullYear(),
		];

		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return `${monthNames[month]} ${day}, ${year}`;
	}

	return (
		<Card classes="movie-card">
			<h2 className="text-mocha-80 font-semi text-20">{title}</h2>
			<p className="text-14 font-semi text-mocha-80 ">
				Release Date: <i className="fa fa-clock-o"></i>{" "}
				<span className="text-12 font-reg text-mocha-60">
					{transformDate(releaseDate)}
				</span>
			</p>
			<ul className="card__list m-20">
				{openShows.map((showing) => (
					<li
						key={`${transformDate(showing.showDate)}-${title}`}
						className=""
					>
						<span className="text-14 font-semi text-mocha-60">
							{transformDate(showing.showDate)}
						</span>{" "}
						<Button
							label="Buy Tickets"
							primary={true}
							onClick={() =>
								alert(
									"Would be purchase link: " + showing.purchaseLink
								)
							}
						/>
					</li>
				))}
			</ul>
		</Card>
	);
};

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.instanceOf(Date).isRequired,
	openShows: PropTypes.arrayOf(
		PropTypes.shape({
			showDate: PropTypes.instanceOf(Date).isRequired,
			purchaseLink: PropTypes.string.isRequired,
		})
	).isRequired,
};

MovieCard.defaultProps = {
	title: "Movie",
	releaseDate: new Date(2015, 0, 4),
	openShows: [
		{
			showDate: new Date(),
			purchaseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		{
			showDate: new Date(),
			purchaseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
	],
};
