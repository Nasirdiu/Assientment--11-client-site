import React from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import useItem from "../../../hook/useItem";

const MyItemAll = () => {
  const [products, setProducts] = useItem();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Delete?");
    if (proceed) {
      const url = `https://stark-earth-37268.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
            toast('Delete success')
          }
        });
    }
  };
  return (
    <div className="container mt-3">
      <h1 className="text-center text-info"> Total Item:{products.length}</h1>
      <div className="row">
        {products.map((p) => (
          <div
            key={p._id}
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" g-5 col-sm-12 col-md-6 col-lg-4"
          >
            <Card
              className="bg-info cards text-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="img-fluid w-75 d-block mx-auto mt-2"
                variant="top"
                src={p.image}
              />
              <Card.Body>
                <Card.Title>Name:{p.name}</Card.Title>
                <Card.Text>Price:{p.price}</Card.Text>
                <Card.Text>Quantity:{p.quantity}</Card.Text>
                <Card.Text>Description:{p.description?.slice(0, 50)}</Card.Text>
                <Card.Title>Supplier:{p.supplier}</Card.Title>
                <Button
                  onClick={() => handleDelete(p._id)}
                  className="d-block w-50 h-50 mx-auto deliver-btn"
                  variant="primary"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItemAll;
