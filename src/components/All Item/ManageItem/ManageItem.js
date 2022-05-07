import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "./ManageItem.css";
const ManageItem = () => {
  const { id } = useParams();
  const [reload, SetReload] = useState(false);
  const nagtive = useNavigate();
  const [singleProduct, setSingelProduct] = useState({});
  useEffect(() => {
    fetch(`https://stark-earth-37268.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setSingelProduct(data));
  }, [reload]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://stark-earth-37268.herokuapp.com/product/${id}?oldQuantity=${singleProduct.quantity}`,
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
        SetReload(!reload);
        alert("added success, reload this page");
      });
  };

  // decrise one

  const decriseOne = () => {
    fetch(
      `https://stark-earth-37268.herokuapp.com/products/${id}?oldQuantity=${singleProduct.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        SetReload(!reload);
        alert("Delivery success");
      });
  };

  return (
    <div className="mt-5 container text-center">
      <h2 className="text-info">Welcome To Inventory : {singleProduct.name}</h2>
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img
            className="img-fluid w-75 rounded-3"
            src={singleProduct.image}
            alt=""
          />
          <h5>Name: {singleProduct.name}</h5>
          <h5>Description: {singleProduct.description}</h5>
          <h5>Supplier: {singleProduct.supplier}</h5>
          <h5>Quantity: {singleProduct.quantity}</h5>
          <button onClick={decriseOne} className="deliver-btn btn btn-info">
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
      <button
        className="btn btn-info deliver-btn w-25 h-25"
        onClick={() => nagtive("/myadditem")}
      >
        Manage inventory
      </button>
    </div>
  );
};

export default ManageItem;
