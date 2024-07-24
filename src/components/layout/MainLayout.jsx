import { Outlet } from "react-router-dom";
import Headers from "../Headers";
import React from "react";
import Foter from "../Foter";
import Lettalk from "../Lettalk";

const MainLayout = () => {
  return (
    <>
      <Headers />
      <div className="pt-7">
        <Outlet />
      </div>
      {/* <Lettalk /> */}
      <Foter />
    </>
  );
};

export default MainLayout;
