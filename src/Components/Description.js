import React from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Description = ({ match, listMovie }) => {
  const movie = listMovie.find((el) => el.id.toString() === match.params.id);

  return (
    <div className="des">
      <Card
        key={movie.id}
        style={{ width: "25rem" }}
        className="bg-dark text-white"
      >
        <Card.Body className="carb">
          <Card.Title>Title : {movie.tilte}</Card.Title>
          <Card.Text>
            Bande annonce :<img src={movie.url}></img>{" "}
          </Card.Text>
          <Card.Text>
            <Rate rating={movie.rating} />
          </Card.Text>
          <Card.Text>Description : {movie.description}</Card.Text>
          <Button variant="success">
            {" "}
            <Link to="/">Go back</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
