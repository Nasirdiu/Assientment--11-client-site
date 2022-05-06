import React from "react";
import { useNavigate } from "react-router-dom";
import useItem from "../../../hook/useItem";
import MyItem from "../../All Item/MyItem/MyItem";
import Factory from "../Factory/Factory";
import Mobile from "../Mobile/Mobile";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  const [products] = useItem();
  const navigate = useNavigate();
  return (
    <div>
      <Slider></Slider>
      <h1 className="text-center text-info mt-3">Inventory Items option</h1>
      <hr />

      <div className="row">
        {products.slice(0, 6).map((product) => (
          <MyItem key={product._id} product={product}></MyItem>
        ))}
        <div>
          <button
            className="btn btn-info deliver-btn mt-5 mx-auto d-block w-25 h-50"
            onClick={() => navigate("/myadditem")}
          >
            Total Item
          </button>
        </div>
      </div>
      <Mobile></Mobile>
      <Factory></Factory>
    </div>
  );
};

export default Home;
