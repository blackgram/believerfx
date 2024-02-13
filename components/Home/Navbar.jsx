import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
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
    <div className="bg-black z-50 w-full flex justify-between items-center px-4 py-4 font-poppins text-[14px] font-bold fixed">
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
        } absolute flex-col left-0 top-[60px] w-full bg-black z-100 overflow-hidden transition duration-[0.5s] ease ${
          showDropdown ? "visible" : "invisible"
        } ${showDropdown ? "opacity-100" : "opacity-0"} origin-top ${
          showDropdown ? "scale-y-100" : "scale-y-[0.3]"
        } `}
      >
        {menuItems.map((item, i) => (
          <div
            key={item.i}
            className={`p-2 text-[16px]  ${
              item.active == true ? "text-primary" : "text-white"
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
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
