import React from "react";
import images from "../../../images/img/apple.jpg";
const Mobile = () => {
  return (
    <div className="container mt-5" >
      <h1 className="text-center text-info">Water Prove Mobile</h1>
      <hr />
      <div className="d-flex ">
        <div>
          <img src={images} className="img-fluid rounded" alt="" />
        </div>
        <div>
          <p className="m-5 p-4">
            <h1 className="text-center text-info">Mobile Details</h1>
            <hr />
            <p>
              If you want a waterproof smartphone on a limited budget, then look
              no further than the Redmi Note 10. Replete with modern features,
              the handset has the powerful Qualcomm Snapdragon 678 with Kryo 460
              Octa-core processor. This mid-range smartphone is splash, water
              and dust resistant with IP53 rating
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
