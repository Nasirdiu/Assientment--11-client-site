import React from "react";
import images from "../../../images/img/images1.jpg";
const Factory = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-info">Factory</h1>
      <hr />
      <div className="d-flex">
        <div>
          <p className="m-5 p-4">
            <h1 className="text-center text-info">Factory Details</h1>
            <hr />
            <p>
              Evaluating the advantages of a warehouse management system is one
              of the many critical aspects of growing businesses. A warehouse
              management system will significantly help the growing companies
              possessing on-hand stocks and inventories.
            </p>
          </p>
        </div>
        <div>
          <img src={images} className="img-fluid rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Factory;
