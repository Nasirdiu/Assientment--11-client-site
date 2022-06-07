import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Electronics Warehouse
            </h5>
            <p>
              Evaluating the advantages of a warehouse management system is one
              of the many critical aspects of growing businesses. A warehouse
              management system will significantly help the growing companies
              possessing on-hand stocks and inventories.
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Usefull Link
            </h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Social Media
            </h5>
            <h3>
              {" "}
              <FaYoutube />{" "}
            </h3>
            <h3>
              {" "}
              <FaFacebook />{" "}
            </h3>
            <h3>
              {" "}
              <FaInstagram />{" "}
            </h3>
            <h3>
              {" "}
              <FaLinkedinIn />{" "}
            </h3>
          </div>
        </div>
        <div className="row align-item-center">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright 2022 All right reserved by:
              <Link to="/" className="text-warning text-decoration-none">
                <strong> ELECTRONICS HOUSE </strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
