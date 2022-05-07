import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useItem from "../../../hook/useItem";
import MyPersonalItem from "../MyPersonalItem/MyPersonalItem";

const MyAddItem = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useItem();
  const product = products.filter((p) => p.email === user?.email);
  return (
    <div className="container mt-3">
      <h1 className="text-center text-info">My Item</h1>
      <hr />
      <div className="row">
        {product.map((p) => (
          <MyPersonalItem key={p._id} product={p}></MyPersonalItem>
        ))}
      </div>
    </div>
  );
};

export default MyAddItem;
