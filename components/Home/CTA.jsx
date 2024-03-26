import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ctaImg from "../../assets/trade_on.png";
import coin from '../../assets/coin.png'
import Link from "next/link";
import { useInView } from "react-intersection-observer";


const CTA = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="bg-black p-4 z-0 lg:py-[8rem] lg:flex lg:items-center lg:justify-evenly relative">
      <div className="md:max-w-[50vw] ">
        <div className=" mb-5 text-secondary font-bold text-headtext text-[18px] md:text-[20px] lg:text-[24px] ">
          Trade On Our
        </div>
        <div className=" mb-4 text-white font-bold text-[24px] md:text-[30px] lg:text-[48px] text-headtext">
          World-Class Platform
        </div>
        <div className="text-ash text-[14px] md:text-[16px] lg:text-[20px] ">
          Trading in financial markets involves a wide range of strategies that
          traders employ to make informed decisions. From trading to swing
          trading and long-term investing, each strategy has its own set of
          principles and risk factors.
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="text-ash flex items-center gap-3 text-[16px] lg:text-[18px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20} />
            Charts Trading
          </div>
          <div className="text-ash flex items-center  gap-3 text-[16px] lg:text-[18px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20} />
            Understanding Trading Strategies
          </div>
          <div className="text-ash flex items-center gap-3 text-[16px] lg:text-[18px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20} />
            Risk Management in Trading
          </div>
          <div className="text-ash flex items-center gap-3 text-[16px] lg:text-[18px] font-medium">
            <FaRegCheckCircle className="text-secondary" size={20} />
            Technical vs Fundamental Analysis
          </div>
        </div>
        <Link href="/SignUp">
          <div className="mt-7 text-black flex items-center justify-center gap-1 border-solid border-1  rounded-lg p-1 bg-secondary w-[150px] lg:w-[195px] lg:h-[60px] lg:text-[20px] font-medium transition-all duration-500 ease-in-out hover:bg-primary hover:scale-105 ">
            <div>Sign Up Now</div>
            <div className="lg:text-[24px]">
              <FaArrowRight />
            </div>
          </div>
        </Link>
      </div>
      <div className={ `md:flex md:items-center md:justify-center ${inView? 'opacity-100' : 'opacity-50'} transition-all duration-1000 `}>
        <Image
          src={ctaImg}
          alt="call to action image"
          sizes="100vw"
          className="p-4 mt-4 md:max-w-[456px] "
        />
      </div>
      <div className="hidden md:block md:absolute top-10 right-10 w-[200px] previewShapeRevX">
        <Image src={coin} sizes="100vw" />
      </div>
    </div>
  );
};

export default CTA;
