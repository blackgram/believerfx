import React,{useState, useEffect} from "react";
import Image from "next/image";
import download from "../../assets/download.png";
import upload from "../../assets/upload.png";
import fprofit from "../../assets/financial-profit.png";
import ladypic from "../../assets/why_trade.png";
import star from "../../assets/star.png";
import sun from "../../assets/sun.png";
import { useInView } from "react-intersection-observer";

const HowSection = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });


  return (
    <div className="w-full h-full bg-secondary flex flex-col items-center justify-center px-2 pt-2 ">
      <div className="text-headtext text-[36px] font-bold pt-7">
        How it Works
      </div>
      <div className="w-[60px] h-[5px] bg-black mb-5" />
      <div ref={ref} className=" flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center">
        <div className={`flex flex-col gap-4  md:px-2 md:pb-4 lg:w-[50vw]`}>
          <div className={`flex gap-6 bg-[#c29651] max-w-[21rem] ${inView ? 'translate-x-0 opacity-100' : ' -translate-x-80 opacity-0'} transition-all  duration-500 lg:gap-12 lg:max-w-[45rem] text-[18px] items-center p-4 rounded-md`}>
            <div className="font-bold lg:text-[20px] w-16 ">
              <div>Deposit</div>
              <Image
                src={download}
                width={60}
                height={100}
                alt="deposit"
                className="w-[60px]"
              />
            </div>
            <div className="">
              Open real account and add funds. We work with 3 secure payment
              systems.
            </div>
          </div>
          <div className={`flex gap-6 bg-[#c29651] max-w-[21rem] ${inView ? 'translate-x-0 opacity-100' : ' -translate-x-80 opacity-0'} transition-all duration-1000 lg:gap-12 lg:max-w-[45rem] text-[18px] items-center p-4 rounded-md`}>
          <div className="font-bold w-16 lg:text-[20px]">
              <div>Trade</div>
              <Image
                src={fprofit}
                sizes="100vw"
                alt="deposit"
                className="min-w-[60px]"
              />
            </div>
            <div>
              Trade any of 100 assets and stocks. Take advantaged of our
              &quot;managed trading&quot; feature where we make trades for you and earn
              you profit. Or Self Trade if you feel confident. There&apos;s no limit!.
            </div>
          </div>
          <div className={`flex gap-6 bg-[#c29651] max-w-[21rem] ${inView ? 'translate-x-0 opacity-100' : ' -translate-x-80 opacity-0'} transition-all duration-[1.5s] lg:gap-12 lg:max-w-[45rem] text-[18px] items-center p-4 rounded-md`}>
            <div className="font-bold w-16 lg:text-[20px]">
              <div>Withdraw</div>
              <Image
                src={upload}
                width={60}
                height={100}
                alt="deposit"
                className="w-[60px]"
              />
            </div>
            <div>
              Get funds easily to your crypto wallet. We take no
              commission.
            </div>
          </div>
        </div>

        <div className="px-0 pt-6  max-w-[210px] md:px-2 md:max-w-full md md:pt-0 md:max-h-full lg:max-w-[35vw]  ">
          <Image src={ladypic} sizes="100vw" alt="" />
        </div>
      </div>
      <Image
        src={sun}
        width={100}
        height={100}
        className="hidden md:absolute top-20 left-20 push_animat"
      />
      <Image
        src={star}
        width={100}
        height={100}
        className="hidden md:absolute top-40 right-40 previewSkew"
      />
    </div>
  );
};

export default HowSection;
