import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Image from "next/image";
import heroImage from "../assets/hero_thumb.png";
import { TbTools } from "react-icons/tb";
import { FaFastForward } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full bg-[#141414] pt-10">
      <div className="bg-hero-pattern bg-no-repeat items-center justify-center">
        <div className="py-2 px-5">
          <div className="text-primary font-bold mb-3">
            The No.1 Trading Platform
          </div>
          <div className="text-headtext font-bold text-[48px] text-white leading-tight mb-5">
            Believers FX Profit
          </div>
          <div className="font-medium text-[16px] text-ash mb-5">
            Trade Cryptocurrencies, Stock Indexes, Commodities, and Foreign
            Exchange with a single platform
          </div>
          <Link href="/">
            <div className="text-black font-bold flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary leading-7 ">
              <div>Start Trading</div>
              <div>
                <FaArrowTrendUp />
              </div>
            </div>
          </Link>
        </div>
        <div className="py-5 px-2">
          <Image src={heroImage} width={800} height={800} alt="" />
        </div>
        <div className="py-6 px-4 font-headtext text-white font-bold text-[20px] flex flex-wrap gap-5  ">
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black "><TbTools /></div>
            Enhanced Tools
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black "><FaArrowTrendUp /></div>
            Trading Assistance
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black "><FaFastForward /></div>
            Fast Execution
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-secondary rounded-full p-3 text-black "><GiProfit /></div>
            Guaranteed Profit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
