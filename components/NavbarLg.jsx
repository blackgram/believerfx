import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const NavbarLg = () => {
  const menuItems = [
    { id: 1, title: "Home", link: "/", active: true },
    { id: 2, title: "Markets", link: "/", active: false },
    { id: 3, title: "About Us", link: "/", active: false },
    { id: 4, title: "FAQ", link: "/", active: false },
    { id: 5, title: "Careers", link: "/", active: false },
    { id: 6, title: "Contact Us", link: "/", active: false },
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
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-evenly z-50">
      <div className={` ${ isScrolled? 'fixed top-0 w-full h-[5rem] ' : 'absolute top-[2rem] h-[90px] w-[58rem]'} transition-transform duration-500 ease-in-out bg-black flex justify-between items-center px-2 py-4 font-poppins text-[18px] font-bold`}>
        <div>
          <div className="font-bold text-[40px] text-primary p-4">
            B<span className="italic text-secondary text-[40px]">fx</span>
          </div>
        </div>

        <div className="flex">
          {menuItems.map((item, i) => (
            <div
              key={item.i}
              className={`p-3 text-[18px] hover:text-primary  ${
                item.active == true ? "text-primary" : "text-white" 
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
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
          <Link href="/">
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
