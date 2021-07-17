import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div  className="list">
      {movies.map((el) => (
        <MovieCard el={el}/>
      ))}
    </div>
  );
};

export default MoviesList;
