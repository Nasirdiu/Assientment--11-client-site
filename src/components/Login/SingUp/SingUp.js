import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingUp = () => {
  const handeleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container bg-info w-75 rounded mt-3 ">
      <h1 className="text-center text-primary">Sing Up</h1>
      {/* <p className="w-50 mx-auto">
        <hr />
      </p> */}
      <Form onSubmit={handeleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <p>
          Login Your Account?
          <Link
            className="from-link text-decoration-none text-danger"
            to="/login"
          >
            Login Now..
          </Link>
        </p>
        <Button
          variant="primary"
          className=" d-block mx-auto w-50"
          type="submit"
        >
          Sing Up
        </Button>
      </Form>
    </div>
  );
};

export default SingUp;
