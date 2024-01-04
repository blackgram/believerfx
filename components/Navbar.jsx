import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black w-full flex justify-between items-center px-2 py-4 font-poppins text-[14px] font-bold">
      <div>
        <GiHamburgerMenu size={"2rem"} className="text-primary" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="">
          <Link
            href="/"
            className="no-underline flex items-center justify-center text-white gap-1"
          >
            <div>Login</div>
            <div>
              <FaArrowRight size={"12px"} className="text-white" />
            </div>
          </Link>
        </div>
        <Link>
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
