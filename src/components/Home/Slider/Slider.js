import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/Banner/banner1.png'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'
const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-info">Stock Factory</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-info">Smart Phone</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-info">Smart Tv</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
