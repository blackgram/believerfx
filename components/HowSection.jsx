import React from "react";
import Image from "next/image";
import download from "../assets/download.png";
import upload from "../assets/upload.png";
import fprofit from "../assets/financial-profit.png";
import ladypic from "../assets/why_trade.png";
import star from '../assets/star.png'
import sun from '../assets/sun.png'

const HowSection = () => {
  return (
    <div className="w-full h-full bg-secondary flex flex-col items-center justify-center px-2 pt-2 relative">
      <div className="text-headtext text-[36px] font-bold pt-7">
        How it Works
      </div>
      <div className="w-[60px] h-[5px] bg-black mb-5" />
      <div className=" flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-4  md:px-2 md:pb-4 lg:w-[50vw]  ">
          <div className="flex gap-4 bg-[#c29651] lg:gap-12 lg:max-w-[45rem] text-[18px] items-center p-4 rounded-md">
            <div className="font-bold lg:text-[20px] w-16 ">
              <div>Deposit</div>
              <Image src={download} width={60} height={100} alt="deposit" className="w-[60px]" />
            </div>
            <div className="">
              Open real account and add funds. We work with more than 20 payment
              systems.
            </div>
          </div>
          <div className="flex gap-4 lg:gap-12 text-[18px] bg-[#c29651] lg:max-w-[45rem] p-4 items-center rounded-md">
            <div className="font-bold w-16 lg:text-[20px]">
              <div>Trade</div>
              <Image src={fprofit} width={70} height={100} alt="deposit" className="w-[60px]" />
            </div>
            <div>
              Trade any of 100 assets and stocks. Use technical analysis and
              trade the news
            </div>
          </div>
          <div className="flex gap-4 lg:gap-12 text-[18px] bg-[#c29651] p-4 items-center lg:max-w-[45rem] rounded-md">
            <div className="font-bold w-16 lg:text-[20px]">
              <div>Withdraw</div>
              <Image src={upload} width={60} height={100} alt="deposit" className="w-[60px]"/>
            </div>
            <div>
              Get funds easily to your bank card or e-wallet. We take no
              commission.
            </div>
          </div>
        </div>

        <div className="px-0 pt-6  max-w-[210px] md:px-2 md:max-w-full md md:pt-0 md:max-h-full lg:max-w-[35vw]  ">
          <Image src={ladypic} sizes="100vw" alt="" />
        </div>
      </div>
      <Image src={sun} width={100} height={100} className="hidden md:absolute top-20 left-20 push_animat" />
      <Image src={star} width={100} height={100} className="hidden md:absolute top-40 right-40 previewSkew"/>
    </div>
  );
};

export default HowSection;
