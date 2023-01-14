import React, { useState } from "react";
import { moviesData } from "./Components/Data/Data";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import Movie from "./Pages/MovieDesc";
import Home from "./Pages/Home";


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);
  

  return (
    
<div>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} inputSearch={inputSearch} setInputSearch={setInputSearch} 
        rating={rating} setRating={setRating}/>}/>
        <Route
          path="/movies/:moviesId"
          element={<Movie movies={movies} />}
        />
            <Route exaxt path="/*" element={<Error/>} />

      </Routes>
    </div>
  );
}

export default App;
