import React from "react";
import error from "../../../images/error/error.jpg";
const NotFound = () => {
  return (
    <div className="container">
      <h1 className="text-center text-danger">Page Not Found</h1>
      <img className="d-block w-100" src={error} alt="First slide" />
    </div>
  );
};

export default NotFound;
