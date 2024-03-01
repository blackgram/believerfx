"use client";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "@/Redux/features/menuSlice";




const DashNv = () => {

  const dispatch = useDispatch();
  const showMenu = useSelector(state => state.data.menu.showMenu)


  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    !isSmallScreen ? dispatch(setShowMenu(true)) : dispatch(setShowMenu(false))
  }, [])

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const toggleMenu = (e) => {
    e.preventDefault();

    dispatch(setShowMenu(!showMenu))

  };

  

  return (
    <div className="bg-black fixed w-full z-50 flex justify-between items-center px-4 py-4 font-poppins text-[14px] font-bold">
      <div className="flex items-center justify-center gap-2">
        <div>
          <GiHamburgerMenu
            size={"2rem"}
            onClick={toggleMenu}
            className="text-primary"
          />
        </div>
        <div className="logo">
          <Link href="/">
            <div className="font-bold text-[30px] text-primary">
              B<span className="italic text-secondary text-[30px]">fx</span>
            </div>
          </Link>
        </div>
      </div>

      

      {/* end of dropdown */}
      <div className="flex items-center justify-center gap-2">
        <div className=""></div>
        <Link href="/UserMain/Dashboard">
          <div className=""><span className="text-primary font-bold text-[20px]">Believers</span><span className="italic text-secondary text-[20px]"> Fx</span></div>
        </Link>
      </div>
    </div>
  );
};

export default DashNv;
