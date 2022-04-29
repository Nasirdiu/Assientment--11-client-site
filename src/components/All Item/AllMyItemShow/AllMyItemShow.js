import React from "react";
import { Button, Card } from "react-bootstrap";

const AllMyItemShow = (props) => {
  const { name, image, price, quantity, description, supplier } = props.product;
  return (
    <div className="container m-3 p-2 bg-light">
      <Card className="bg-info " style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name:{name}</Card.Title>
          <Card.Text>Price:{price}</Card.Text>
          <Card.Text>Quantity:{quantity}</Card.Text>
          <Card.Text>Description:{description.slice(0,50)}</Card.Text>
          <Card.Title>Supplier:{supplier}</Card.Title>
          <Button className="d-block w-50 mx-auto" variant="primary">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMyItemShow;