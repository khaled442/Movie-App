import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div  className="list">
      {movies.map((el) => (
        <MovieCard el={el} key={el.id}/>
      ))}
    </div>
  );
};

export default MoviesList;
