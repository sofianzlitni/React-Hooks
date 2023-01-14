import React from 'react';
import {useParams } from "react-router-dom";


const Movie = ({ movies }) => {
  const { moviesId  } = useParams();
  return (
    <div>
    
        {movies
          .filter((movies) => movies.id == moviesId)
          .map((movies, index) => (
            <p key={index}>{movies.description}</p>
          ))}
      </div>
  );
  
};

export default Movie;
