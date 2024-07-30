/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/images/logo.png"; // Adjust the path if necessary

function Logo() {
  return (
    <div>
      {/* <img src={logo} alt="Logo" /> */}

      <span className="flex justify-center items-center text-3xl text-blue-500 pt-4 font-bold">
        CloudArcOps
      </span>
      <span className="text-sm pl-6 text-blue-400 tracking-wider ">
        BUILT ON TRUST
      </span>
    </div>
  );
}

export default Logo;
