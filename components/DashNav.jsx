"use client";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebaseConfig";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const DashNv = () => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const userSession = sessionStorage.getItem('user')

  if (!user && !userSession){
    router.push('/Login')
  }

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // close the dropdown when user clicks outside the menu
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, title: "Home", link: "/", active: true },
    { id: 2, title: "Markets", link: "/", active: false },
    { id: 3, title: "About Us", link: "/", active: false },
    { id: 4, title: "FAQ", link: "/", active: false },
    { id: 5, title: "Careers", link: "/", active: false },
    { id: 6, title: "Contact Us", link: "/", active: false },
  ];

  return (
    <div className="bg-black w-full flex justify-between items-center px-4 py-4 font-poppins text-[14px] font-bold">
      <div className="flex items-center justify-center gap-2">
        <div ref={dropdownRef}>
          <GiHamburgerMenu
            size={"2rem"}
            onClick={() => (setShowDropdown(!showDropdown), toggleMenu)}
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

      <div
        active={showDropdown}
        className={`${
          showDropdown ? "flex" : "none"
        }  absolute flex-col left-0 top-[60px] w-1/2 h-screen bg-black z-100 overflow-hidden transition duration-[0.5s] ease ${
          showDropdown ? "visible" : "invisible"
        } ${showDropdown ? "opacity-100" : "opacity-0"} origin-left ${
          showDropdown ? "scale-x-100" : "scale-x-[0.3]"
        } `}
      >
        <div className="w-full h-[1px] bg-ash" />
        <div className="p-2 gap-1 font-medium flex">
          Account Status:{" "}
          <span className="flex items-center text-red-500 animate-pulse">
            <IoMdCloseCircle size={15} />
            inactive
          </span>{" "}
        </div>
        {menuItems.map((item, i) => (
          <div
            key={item.i}
            className={`p-4 text-[20px]  ${
              item.active == true ? "text-primary" : "text-white"
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
            <div className="w-full h-[2px] bg-ash" />
          </div>
        ))}
      </div>

      {/* end of dropdown */}
      <div className="flex items-center justify-center gap-2">
        <div className=""></div>
        <Link href="/SignUp">
          <div className="text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-md p-1 bg-primary ">
            <div>Deposit</div>
            <div>
              <FaArrowRight size={"12px"} />
            </div>
          </div>
        </Link>
        <button type="submit" onClick={() => {
          signOut(auth)
          sessionStorage.removeItem('user')}} className="flex items-center justify-center gap-1">
          Logout <FaArrowRight size={15} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default DashNv;
