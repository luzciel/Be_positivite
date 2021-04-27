import React from "react";
import apple from "../assets/img/Icon-apple.svg";
import facebook from "../assets/img/Icon-facenook.svg";
import google from "../assets/img/Icon-google.svg";

const IconsNetworks = () => {
  return (
    <div className="container-icons-networks">
      <div className="icon">
          <img src={apple} alt="apple"  />
      </div>
      <div className="icon">
          <img src={facebook} alt="facebook" />
      </div>
      <div className="icon">
          <img src={google} alt="google" />
      </div>
    </div>
  );
};

export default IconsNetworks;