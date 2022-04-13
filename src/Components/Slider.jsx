import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Assets/4.jpg")}
            alt="First slide"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Assets/2.jpg")}
            alt="Second slide"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Assets/3.jpg")}
            alt="Third slide"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
