import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, inputSearch, rating }) => {
  return (
    <div className="movies">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
            movie.rate >= rating
        )

        .map((movies) => (
          <MovieCard movies={movies} key={movies.id} />
        ))}
    </div>
  );
};

export default MovieList;
