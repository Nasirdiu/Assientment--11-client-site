import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      const url = "http://localhost:5000/product";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          localStorage.setItem("accessToken", data.token);
        });

      navigate("/home");
    }
  }, [user]);

  let errorhandle;
  if (error) {
    errorhandle = <p className="text-danger">Error:{error?.message}</p>;
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleRestPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Your Email Cheek");
    } else {
      toast("Please Your Email ");
    }
  };

  return (
    <div className="container bg-info w-75 rounded mt-3">
      <h1 className="text-center text-primary">Login</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
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
            onClick={handleRestPassword}
            className="from-link text-decoration-none text-danger"
            to=""
          >
            Forget Password
          </Link>
        </p>
        <hr />
        <p>
          Sign Up For Your Account First?
          <Link
            className="from-link text-decoration-none text-danger"
            to="/singUp"
          >
            Register Now..
          </Link>
        </p>
        {errorhandle}
        <Button
          variant="primary"
          className="d-block mx-auto w-50"
          type="submit"
        >
          Login
        </Button>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-danger w-50"></div>
          <p className="m-2 px-2">Or</p>
          <div style={{ height: "1px" }} className="bg-danger w-50"></div>
        </div>
        <Button
          variant="primary"
          className="d-block mx-auto w-50"
          type="submit"
          onClick={() => signInWithGoogle()}
        >
          Google Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
