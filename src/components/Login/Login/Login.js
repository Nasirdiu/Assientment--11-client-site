import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handeleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
  };
  return (
    <div className="container bg-info w-75 rounded mt-3">
      <h1 className="text-center text-primary">Login</h1>
      <Form onSubmit={handeleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          Password Forget?
          <Link
            //   onClick={resetPassword}
            className="from-link text-decoration-none text-danger"
            to=""
          >
            Forget Password
          </Link>
        </p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p>
          Sign Up For Your Account First?
          <Link
            className="from-link text-decoration-none text-danger"
            to="/singUp"
          >
            Register Now..
          </Link>
        </p>
        <Button
          variant="primary"
          className="d-block mx-auto w-50"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
