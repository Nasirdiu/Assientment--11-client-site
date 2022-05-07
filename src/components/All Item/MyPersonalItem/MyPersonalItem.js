import React from "react";
import { Button, Card } from "react-bootstrap";
import useItem from "../../../hook/useItem";

const MyPersonalItem = (props) => {
  const [products, setProducts] = useItem();
  const { _id, name, image, price, quantity, description, supplier } =
    props.product;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Delete?");
    if (proceed) {
      const url = `https://stark-earth-37268.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }
    window.location.reload();
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
            onClick={() => handleDelete(_id)}
            className="d-block w-50 h-50 mx-auto deliver-btn"
            variant="primary"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyPersonalItem;
