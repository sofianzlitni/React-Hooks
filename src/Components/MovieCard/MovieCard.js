import React from "react";
import { Card, Button } from "react-bootstrap";
import './MovieCard.css'
import MovieRating from "../Rate/Rating";




const MovieCard = ({movies}) => {
  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movies.posterUrl} />
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>
          <MovieRating isMovieRating={true} movieRating={movies.rate}/>
          <Button variant="primary">Trailer</Button>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
