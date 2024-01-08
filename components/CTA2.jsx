import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import starFocus from "../assets/star_focus.png";
import Image from "next/image";

const CTA2 = () => {
  return (
    <div className=" hidden lg:absolute lg:flex items-center justify-between bg-nb3/75 rounded-[24px] w-[53rem] h-[10rem] bottom-[35rem] px-[3.5rem]  ">
      <div className="absolute h-full flex items-center right-[60px] z-0 rotate">
        <Image src={starFocus} width={150} height={150} className="" />
      </div>
      <div className=" w-full flex items-center justify-between z-10">
        <div className="flex flex-col gap-3">
          <div className="text-[34px] text-white font-bold]">
            Start earning today with $100
          </div>
          <div className="text-[18px] ">guranteed profits within 14 days</div>
        </div>
        <Link href="/">
          <div className=" text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-secondary w-[150px] lg:p-4 lg:h-[60px] lg:text-[20px] font-medium transition-all transition-transform duration-500 ease-in-out hover:bg-primary hover:scale-105 ">
            <div>Register</div>
            <div className="lg:text-[24px]">
              <FaArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTA2;
