import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import useItem from "../../../hook/useItem";
const AllMyItemShow = (props) => {
  const [products, setProducts] = useItem();
  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 
  const { _id, name, image, price, quantity, description, supplier } =
    props.product;
  //delete option
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Delete?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      console.log(url);
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
      className="g-5 col-sm-12 col-md-6 col-lg-4"
    >
      <Card className="bg-info cards " style={{ width: "18rem" }}>
        <Card.Img
          className="img-fluid w-75 d-block mx-auto"
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
            className="d-block w-50 mx-auto"
            variant="primary"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMyItemShow;
