import React, { useState, useEffect } from "react";
import { DataVisCard } from "./components/DataVisCard";
import { MovieCard } from "./components/MovieCard";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieVisData, setMovieVisData] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(new Date());

  useEffect(() => {
    const movies = [
      {
        title: "Movie 1",
        data: [48, 48, 60, 38, 56, 37, 30],
        totalOrders: 2346,
        releaseDate: new Date(2015, 0, 4),
        openShows: [
          {
            showDate: new Date(2015, 4, 3),
            purchaseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          },
          {
            showDate: new Date(2015, 4, 4),
            purchaseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          },
        ],
      },
      {
        title: "Movie 2",
        data: [65, 60, 40, 50, 35, 24, 39],
        totalOrders: 4422,
        releaseDate: new Date(2015, 0, 4),
        openShows: [
          {
            showDate: new Date(2015, 4, 3),
            purchaseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          },
          {
            showDate: new Date(2015, 4, 4),
            purchaseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          },
        ],
      },
    ];


    setMovieList(movies.filter(({ title, releaseDate, openShows }) => {
      return ({ title, releaseDate, openShows })
    }))

    setMovieVisData(movies.filter(({ title, data, totalOrders }) => {
      return ({ title, data, totalOrders })
    }))
  }, [updatedAt])



  return (
    <main>
      <section className="app-wrapper bg-mocha-20 p-40">
        <DataVisCard
          location="United States"
          moviesData={movieVisData}
          updatedAt={updatedAt}
        />
        {movieList.map(({ title, releaseDate, openShows }) => (
          <MovieCard
            key={`${title}-movie-card`}
            title={title}
            releaseDate={releaseDate}
            openShows={openShows}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
