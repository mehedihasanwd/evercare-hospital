import React from "react";
import { Carousel } from "react-bootstrap";

const img =
  "https://i.pinimg.com/originals/80/9c/44/809c44c528b340bcb26e302d2466569e.jpg";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="100%"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-danger fs-1">Welcome To Evercare Hospital</h1>
          <p className="text-primary fs-4">
            Empowering People to Improve Their Lives. Evercare Hospital.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
