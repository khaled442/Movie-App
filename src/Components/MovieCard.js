import React from "react";
import {Link} from 'react-router-dom'
import Rate from "./Rate";

const MovieCard = ({ el }) => {
  return (
    <div className="card">
      <img
        className="movie__image"
        style={{ width: "250px", height: "250px" }}
        src={el.url}
        alt= {el.title}
      ></img>
      <div className="flex__card">
        <h3 className="heading">{el.title}</h3>
        <p className="paragraph">{el.description}</p>
      </div>
      <Rate rating={el.rating} />
      <buton className="buton">
        <Link
          to={`Description/${el.id}`}
        >
          Regarder
        </Link>
      </buton>

    </div>
  );
};
export default MovieCard;
