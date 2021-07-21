import React from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Description = ({ listMovie }) => {
  return (
    <div className='des'>
      {listMovie
        .filter((el) => el.title )
        .map((el, index) => (
          <Card
            key={index}
            style={{ width: "25rem" }}
            className="bg-dark text-white"
          >
            <Card.Body className="carb">
              <Card.Title>Title : {el.tilte}</Card.Title>
              <Card.Text>Bande annonce :<img src={el.url}></img> </Card.Text>
              <Card.Text>
                <Rate rating={el.rating} />
              </Card.Text>
              <Card.Text>Description : {el.description}</Card.Text>
              <Button variant="success">
                {" "}
                <Link to="/">Go back</Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Description;
