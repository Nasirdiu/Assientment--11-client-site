import React from "react";
import useItem from "../../../hook/useItem";
import AllMyItemShow from "../AllMyItemShow/AllMyItemShow";

const MyItemAll = () => {
  const [products] = useItem();
  return (
    <div className="container mt-3">
      <h1 className="text-center text-info">My Item:{products.length}</h1>
      <div className="row">
        {products.map((product) => (
          <AllMyItemShow key={product._id} product={product}></AllMyItemShow>
        ))}
      </div>
    </div>
  );
};

export default MyItemAll;
