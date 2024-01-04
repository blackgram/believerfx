import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ctaImg from '../assets/trade_on.png'
import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-black p-4">
      <div className="">
        <div className=" mb-5 text-secondary font-bold text-headtext text-[18px]">
          Trade On Our
        </div>
        <div className=" mb-4 text-white font-bold text-[24px] text-headtext">
          World-Class Platform
        </div>
        <div className="text-ash text-[14px]">
          Trading in financial markets involves a wide range of strategies that
          traders employ to make informed decisions. From trading to swing
          trading and long-term investing, each strategy has its own set of
          principles and risk factors.
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="text-ash flex items-center gap-3 text-[16px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20} />
            Charts Trading
          </div>
          <div className="text-ash flex items-center  gap-3 text-[16px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20}/>
            Understanding Trading Strategies
          </div>
          <div className="text-ash flex items-center gap-3 text-[16px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20}/>
            Risk Management in Trading
          </div>
          <div className="text-ash flex items-center gap-3 text-[16px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20}/>
            Technical vs Fundamental Analysis
          </div>
        </div>
        <Link href="/">
          <div className="mt-7 text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-secondary w-[150px] font-medium ">
            <div>Sign Up Now</div>
            <div>
              <FaArrowRight size={"12px"} />
            </div>
          </div>
        </Link>
      </div>
      <Image src={ctaImg} alt="call to action image" width={350} height={350} className="p-4 mt-4"/>
    </div>
  );
};

export default CTA;
