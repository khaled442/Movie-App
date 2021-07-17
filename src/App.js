import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { movieData } from "./Data";
import MoviesList from "./Components/MoviesList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(movieData);
  const [searchValue, setSerchValue] = useState("");
  const [searchRating, setSearchRating] = useState(5)
  const handleSearch = (e) => setSerchValue(e.target.value);
  const handelAdd = (newMovie) => setMovies([...movies, newMovie]);
  const handelRate = (rate)=> setSearchRating(rate);
  return (
    <div className="app">
      <Filter handleSearch={handleSearch} searchValue={searchValue} handelRate={handelRate} searchRating={searchRating}/>
      <div className="row">
        <MoviesList
          movies={movies.filter((el) =>
            el.title.toLowerCase().includes(searchValue.toLowerCase()) && el.rating <= searchRating
          )}
        />
        <AddMovie handelAdd={handelAdd} />
      </div>
    </div>
  );
};
export default App;
