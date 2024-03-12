import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMainMenu } from "@/Redux/features/activeMainMenuSlice";

const NavbarLg = () => {
  const dispatch = useDispatch();

  const activeMenu = useSelector((state) => state.data.activeMainMenu.activeMenu);


  const handleMenu = (element) => {
    dispatch(setActiveMainMenu(element));
  };

  const menuItems = [
    { id: 1, title: "Home", active: activeMenu == "Home" ? true : false, onclick: handleMenu },
    { id: 2, title: "Markets", active: activeMenu == "Markets" ? true : false, onclick: handleMenu },
    { id: 3, title: "About Us", active: activeMenu == "About Us" ? true : false, onclick: handleMenu },
    { id: 4, title: "FAQ", active: activeMenu == "FAQ" ? true : false, onclick: handleMenu },
    { id: 5, title: "Careers", active: activeMenu == "Careers" ? true : false, onclick: handleMenu },
    { id: 6, title: "Contact Us", active: activeMenu == "Contact Us" ? true : false, onclick: handleMenu },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when the user has scrolled, adjust the threshold as needed
      const scrollThreshold = 50;
      const currentScroll = window.scrollY;

      if (currentScroll > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-evenly z-50 relative">
      <div
        className={` ${
          isScrolled || activeMenu !== 'Home'
            ? "fixed top-0 w-full h-[5rem] "
            : "absolute top-[2rem] h-[70px] w-[58rem]"
        } transition-transform duration-500 ease-in-out bg-black flex justify-between items-center px-2 py-4 font-poppins text-[18px] font-medium`}
      >
        <div>
          <div className="font-bold text-[40px] text-primary p-4">
            B<span className="italic text-secondary text-[40px]">fx</span>
          </div>
        </div>

        <div className="flex">
          {menuItems.map((item, i) => (
            <div
              key={item.i}
              className={`p-3 cursor-pointer text-[18px] hover:text-primary  ${
                item.active == true ? "text-primary" : "text-white"
              }`}
            >
              <div onClick={() => item.onclick(item.title)}>{item.title}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 p-4">
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
            <div className="text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary transition-all duration-500 ease-in-out close hover:bg-secondary  ">
              <div>Sign Up</div>
              <div>
                <FaArrowRight size={"12px"} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLg;
