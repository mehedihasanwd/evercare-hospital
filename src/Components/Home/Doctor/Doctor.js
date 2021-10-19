import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Doctor = (props) => {
  const { name, img, job, fee } = props.doctor;
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" height="100%" src={img} />
        <Card.Body>
          <Card.Title>
            <span className="text-primary">Name: </span> {name}
          </Card.Title>
          <Card.Title>
            <span className="text-success">Job: </span> {job}
          </Card.Title>
          <Card.Title>
            <span className="text-danger">Fee:</span> ${fee}
          </Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Doctor;
