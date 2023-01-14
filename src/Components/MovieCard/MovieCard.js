import React from "react";
import { Card, Button } from "react-bootstrap";
import './MovieCard.css'
import MovieRating from "../Rate/Rating";
import {Link} from "react-router-dom";


const MovieCard = ({movies}) => {
  return (
    <div className="movie-card">
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movies.posterUrl}/>
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>
          <MovieRating isMovieRating={true} movieRating={movies.rate}/>
          <div>
            <Button variant="danger" href={movies.trailer} target={"new-page"}>
              Trailer
            </Button> &nbsp;&nbsp;
            <Link to={`movies/${movies.id}`} target={'new-page'} ><Button >Description</Button></Link>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
