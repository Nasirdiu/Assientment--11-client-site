import React from "react";
import { Button, Card } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import "./MyItem.css";
const MyItem = (props) => {
  const navigate = useNavigate();
  // console.log(props.product);
  const { _id, name, image, price, quantity, description, supplier } =
    props.product;
  const handleProduct = (id) => {
    // console.log(id);

    navigate(`/manageitem/${id}`);
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className=" g-5 col-sm-12 col-md-6 col-lg-4"
    >
      <Card className="bg-info cards text-center" style={{ width: "18rem" }}>
        <Card.Img
          className="img-fluid w-75 d-block mx-auto mt-2"
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>Name:{name}</Card.Title>
          <Card.Text>Price:{price}</Card.Text>
          <Card.Text>Quantity:{quantity}</Card.Text>
          <Card.Text>Description:{description.slice(0, 50)}</Card.Text>
          <Card.Title>Supplier:{supplier}</Card.Title>
          <Button
            onClick={() => handleProduct(_id)}
            className="d-block w-50 mx-auto"
            variant="primary"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyItem;
