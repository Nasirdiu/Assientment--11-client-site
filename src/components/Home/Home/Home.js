import React from "react";
import Factory from "../Factory/Factory";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h1 className="text-center text-info mt-3">Product option</h1>

      <Factory></Factory>
    </div>
  );
};

export default Home;
