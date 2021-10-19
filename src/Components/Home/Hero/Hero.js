import React from "react";
import { Carousel } from "react-bootstrap";
import "./Hero.css";
import img from "./bannerImg/hero-img.jpg";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block hero w-100" src={img} alt="First slide" />
        <Carousel.Caption>
          <div className="mt-5">
            <h1 className="text-danger fs-1">Welcome To Evercare Hospital</h1>
            <p className="text-primary fs-4">
              Empowering People to Improve Their Lives. Evercare Hospital.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
