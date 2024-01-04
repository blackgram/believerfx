import React from "react";
import Image from "next/image";
import download from "../assets/download.png";
import upload from "../assets/upload.png";
import fprofit from "../assets/financial-profit.png";
import ladypic from "../assets/why_trade.png"

const HowSection = () => {
  return (
    <div className="w-full bg-secondary flex flex-col items-center justify-center px-2 pt-2">
      <div className="text-headtext text-[36px] font-bold pt-7">
        How it Works
      </div>
      <div className="w-[60px] h-[5px] bg-black mb-5" />

      <div className="flex flex-wrap gap-4">
        <div className="flex gap-4 bg-[#c29651] p-4 rounded-md">
          <div className="font-bold min-w-16">
            <div>Deposit</div>
            <Image src={download} width={60} height={100} alt="deposit" />
          </div>
          <div className="">
            Open real account and add funds. We work with more than 20 payment
            systems.
          </div>
        </div>
        <div className="flex gap-4 bg-[#c29651] p-4 rounded-md">
          <div className="font-bold min-w-16">
            <div>Trade</div>
            <Image src={fprofit} width={60} height={100} alt="deposit" />
          </div>
          <div>
          Trade any of 100 assets and stocks. Use technical analysis and trade the news
          </div>
        </div>
        <div className="flex justify-end gap-4 bg-[#c29651] p-4 rounded-md">
          <div className="font-bold min-w-16">
            <div>Withdraw</div>
            <Image src={upload} width={60} height={100} alt="deposit" />
          </div>
          <div>
          Get funds easily to your bank card or e-wallet. We take no commission.
          </div>
        </div>
      </div>
      <div className="px-4 pt-6">
      <Image src={ladypic} width={200} height={200} />
      </div>
    </div>
  );
};

export default HowSection;
