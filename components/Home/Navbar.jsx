import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMainMenu } from "@/Redux/features/activeMainMenuSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter()

  const activeMenu = useSelector((state) => state.data.activeMainMenu.activeMenu);


  const handleMenu = (element) => {
    dispatch(setActiveMainMenu(element));
    setShowDropdown(false)
    router.push('/')
  };

  const menuItems = [
    { id: 1, title: "Home", active: activeMenu == "Home" ? true : false, onclick: handleMenu },
    { id: 2, title: "Markets", active: activeMenu == "Markets" ? true : false, onclick: handleMenu },
    { id: 3, title: "About Us", active: activeMenu == "About Us" ? true : false, onclick: handleMenu },
    { id: 5, title: "Careers", active: activeMenu == "Careers" ? true : false, onclick: handleMenu },
    { id: 6, title: "Contact Us", active: activeMenu == "Contact Us" ? true : false, onclick: handleMenu },
  ];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      } else if (event.target.classList.contains("dropdown-item")) {
        setShowDropdown(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);



  return (
    <div className="bg-black z-50 w-full flex justify-between items-center px-4 py-4 font-poppins text-[14px] font-bold fixed">
      <div className="flex items-center justify-center gap-2">
        <div >
        {showDropdown ? (
            <FaTimes
              size={"2rem"}
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-primary cursor-pointer"
            />
          ) : (
            <GiHamburgerMenu
              size={"2rem"}
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-primary cursor-pointer"
            />
          )}
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
      ref={dropdownRef}
        active={showDropdown}
        className={`${
          showDropdown ? "flex" : "none"
        } absolute flex-col left-0 top-[60px] w-full bg-black z-100 overflow-hidden transition duration-[0.5s] ease ${
          showDropdown ? "visible" : "invisible"
        } ${showDropdown ? "opacity-100" : "opacity-0"} origin-top ${
          showDropdown ? "scale-y-100" : "scale-y-[0.3]"
        } `}
      >
        {menuItems.map((item, i) => (
          <div
            key={item.id}
            onClick={() => item.onclick(item.title)}
            className={`p-2 text-[16px]  ${
              item.active == true ? "text-primary" : "text-white"
            }`}
          >
              <div>{item.title}</div>
          </div>
        ))}
      </div>

      {/* end of dropdown */}
      <div className="flex items-center justify-center gap-2">
        <div className="">
          <Link
            href="/Login"
            className="no-underline flex items-center justify-center text-white gap-1"
          >
            <div>Login</div>
            <div>
              <FaArrowRight size={"12px"} className="text-white" />
            </div>
          </Link>
        </div>
        <Link href="/SignUp">
          <div className="text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary ">
            <div>Sign Up</div>
            <div>
              <FaArrowRight size={"12px"} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
