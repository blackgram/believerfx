import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashMenu from "./DashMenu";

const DashLayout = ({ children }) => {
  const showMenu = useSelector((state) => state.data.menu.showMenu);
  const isSmallScreen = useSelector(
    (state) => state.data.screenSize.isSmallScreen
  );

  return (
    <div className="min-h-100vh pt-[3rem] max-w-[100vw] w-full text-white bg-black flex relative">
      {showMenu && <DashMenu />}
      <div
        className={`${
          showMenu && !isSmallScreen ? "w-[80vw]" : "w-full"
        }  transition-transform translate-x-0  duration-1000 ease `}
      >
        {children}
      </div>
    </div>
  );
};

export default DashLayout;
