import React from "react";
import { Nav } from "react-bootstrap";

const MovieCard = ({ el }) => {
  return (
    <div className="card">
      <img
        className="movie__image"
        style={{ width: "250px", height: "250px" }}
        src={el.url}
        alt="Movie"
      ></img>
      <div className="flex__card">
        <h3 className="heading">{el.title}</h3>
        <p className="paragraph">{el.description}</p>
      </div>
      <Nav className="buton">
        <Nav.Link
          href="https://back.egybest.co/movies/"
          target="_blank"
        >
          Regarder
        </Nav.Link>
      </Nav>

    </div>
  );
};
export default MovieCard;
