import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);
  const navtigte = useNavigate();
  useEffect(() => {
    if (user) {
      navtigte("/home");
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
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handeleSubmit = async (event) => {
    event.preventDefault();
    if (email || password || confirmPassword) {
      await createUserWithEmailAndPassword(email, password, confirmPassword);
      toast("Submit Success");
    } else {
      toast("Submit Not Success");
    }
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
          <Form.Control
            type="name"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPassword}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
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
        {errorhandle}
        <Button
          variant="primary"
          className=" d-block mx-auto w-50"
          type="submit"
        >
          Sing Up
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
          onClick={()=>signInWithGoogle()}
        >
          Google Login
        </Button>
      </Form>
    </div>
  );
};

export default SingUp;
