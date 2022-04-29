import React from "react";
import useItem from "../../../hook/useItem";
import MyItem from "../../All Item/MyItem/MyItem";
import Factory from "../Factory/Factory";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  const [products] = useItem();
  return (
    <div>
      <Slider></Slider>
      <h1 className="text-center text-info mt-3">Inventory Items option</h1>
      <hr />
      <div className="container item-product m-3 p-4">
        {products.slice(0, 6).map((product) => (
          <MyItem key={product._id} product={product}></MyItem>
        ))}
      </div>
      <Factory></Factory>
    </div>
  );
};

export default Home;
