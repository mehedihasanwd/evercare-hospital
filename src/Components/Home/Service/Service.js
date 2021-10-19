import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, img, id, desc, price } = props.service;
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" height="300px" src={img} />
        <Card.Body>
          <Card.Title>
            <span className="text-primary">Name: </span> {name}
          </Card.Title>
          <Card.Title>
            <span className="text-primary">Price: </span> ${price}
          </Card.Title>
          <Card.Text>{desc.slice(0, 250)}</Card.Text>
          <Link to={`/service/${id}`}>
            <button className="btn-primary fs-5 rounded-1 border-0 px-3 py-1">
              Full Details
            </button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Service;
