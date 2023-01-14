import React from 'react';
import "../App.css";
import MovieList from "../Components/MovieList/MovieList";
import AddMovie from "../Components/AddMovie/AddMovie";
import FilterByName from "../Components/FilterByName/FilterByName";
import FilterByRate from "../Components/Rate/Rating";


function Home({movies , setMovies ,inputSearch, setInputSearch, rating, setRating}) {
    
    const add = (newMovie) => {
      setMovies([...movies, newMovie]);
    };

  return (
    <div className="App">
        <h1>Movie App</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterByRate
        isMovieRating={false}
        rating={rating}
        setRating={setRating}
      />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
      <AddMovie add={add} />
      </div>
  )
}

export default Home