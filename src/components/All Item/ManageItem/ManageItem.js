import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ManageItem = () => {
  const { id } = useParams();
  console.log(id);
  const [singleProduct, setSingelProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setSingelProduct(data));
  }, []);
  console.log(singleProduct);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(
      `http://localhost:5000/product/${id}?oldQuantity=${singleProduct.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("added successfyll, reload this page");
      });
  };

  // decrise one

  const decriseOne = () => {
    fetch(
      `http://localhost:5000/products/${id}?oldQuantity=${singleProduct.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Delivery successfyll, reload this page");
      });
  };

  return (
    <div className="mt-5 container text-center">
      <h2>Welcome to Infentory of : {singleProduct.name}</h2>
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img
            className="img-fluid w-75 rounded-3"
            src={singleProduct.image}
            alt=""
          />
          <h5>Name: {singleProduct.name}</h5>
          <h5>Discription: {singleProduct.discription}</h5>
          <h5>Seller: {singleProduct.seller}</h5>
          <h5>Quantity: {singleProduct.quantity}</h5>
          <button onClick={decriseOne} className="deliver-btn">
            Deliverd
          </button>
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Add quantity</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("quantity")} />
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
