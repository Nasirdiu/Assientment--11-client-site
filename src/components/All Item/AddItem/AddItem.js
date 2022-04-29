import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.img.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;

    // console.log(name, image, price, quantity, description, supplier);
    const url = `http://localhost:5000/uploadPd`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        image,
        price,
        quantity,
        description,
        supplier,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
      });
  };
  return (
    <div className="container mt-4 bg-light">
      <Form onSubmit={handleSubmit} className="w-50 mx-auto ">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="img">
          <Form.Label>Images</Form.Label>
          <Form.Control type="text" name="img" placeholder="img-url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="quantity"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textarea">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            name="description"
            placeholder="Description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textarea">
          <Form.Label>Supplier name</Form.Label>
          <Form.Control
            type="text"
            name="supplier"
            placeholder="supplier name"
            required
          />
        </Form.Group>

        <Button
          className="d-block mx-auto w-50"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
