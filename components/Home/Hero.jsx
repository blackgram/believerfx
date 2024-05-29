import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Image from "next/image";
import heroImage from "../../assets/hero_thumb.png";
import { TbTools } from "react-icons/tb";
import { FaFastForward } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full bg-[#141414] pt-[6rem] md:pt-[8rem] lg:justify-center lg:items-center lg:min-h-[100vh] lg:p-9 lg:pt-[7rem] ">
      <div className="bg-hero-pattern lg:bg-cover bg-no-repeat md:flex items-center justify-evenly lg:items-start lg:pt-10 z-5 ">
        <div className="py-2 px-5 text-[20px] mb-3 z-1">
          <div className="text-primary font-bold mb-3">
            The No.1 Trading Platform
          </div>
          <div className="text-headtext font-bold text-[48px] lg:text-[68px] text-white leading-tight mb-5 lg:mb-6">
            Believers FX Profit
          </div>
          <div className="font-medium text-[16px] lg:text-[18px] text-ash mb-5">
            Trade Cryptocurrencies, Stock Indexes, Commodities, and Foreign
            Exchange with a single platform
          </div>
          <Link href="/Login">
            <div className="text-black font-bold flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary leading-7 lg:h-[54px] lg:w-[210px] lg:mt-10 transition-all duration-500 ease-in-out close hover:bg-secondary hover:scale-105 ">
              <div>Start Trading</div>
              <div>
                <FaArrowTrendUp />
              </div>
            </div>
          </Link>
        </div>
        <div className="py-5 px-2 md:max-w-[450px] md:w-full ">
          <Image src={heroImage} width={800} height={800} alt="" className="" />
        </div>
        <div className="glowing "/>
      </div>
        <div className="py-6 px-4 font-headtext text-white font-bold text-[20px] lg:text-[30px] flex flex-wrap md:items-center md:justify-evenly gap-5 lg:gap-  ">
          <div className="flex gap-3 items-center justify-center ">
            <div className="bg-secondary rounded-full p-3 text-black lg:h-[64px] lg:w-[64px] flex items-center justify-center"><TbTools className="lg:text-[32px]" /></div>
            Enhanced Tools
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black flex items-center justify-center lg:h-[64px] lg:w-[64px]"><FaArrowTrendUp className="lg:text-[32px]"/></div>
            Trading Assistance
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black flex items-center justify-center lg:h-[64px] lg:w-[64px]"><FaFastForward className="lg:text-[32px]"/></div>
            Fast Execution
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black flex items-center justify-center lg:h-[64px] lg:w-[64px]"><GiProfit className="lg:text-[32px]"/></div>
            Guaranteed Profit
          </div>
        </div>
    </div>
  );
};

export default Hero;
