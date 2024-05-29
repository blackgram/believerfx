import React from "react";
import MenuLayout from "./MenuLayout";
import { useInView } from "react-intersection-observer";
import { FaArrowTrendUp } from "react-icons/fa6";

const AboutUs = () => {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  return (
    <MenuLayout>
      <div ref={ref} className="w-full min-h-72  lg:min-h-96 flex flex-col justify-center items-start relative ">
        <div className=" text-secondary text-3xl p-8 xl:m-16 font-bold z-50 xl:max-w-96">
          {" "}
          FASTEST GROWING PLATFORM IN <span className="text-primary flex gap-1"> ONLINE TRADING <FaArrowTrendUp /> </span> 
        </div>

        <div className={` w-8 md:w-16 lg:w-32 bg-secondary absolute bottom-0 left-4 md:left-8 lg:left-16  ${inView ? 'h-[10%]' : ' h-0'} transition-all duration-[2000ms]`} />
        <div className={` w-8 md:w-16 lg:w-32 bg-secondary absolute bottom-0 left-[4rem] md:left-[8rem] lg:left-[16rem] ${inView ? 'h-[20%]' : ' h-0'} transition-all duration-[2000ms]`} />
        <div className={`  w-8 md:w-16 lg:w-32 bg-secondary absolute bottom-0 left-[7rem]  md:left-[14rem] lg:left-[28rem]  ${inView ? 'h-[30%]' : ' h-0'} transition-all duration-[2000ms] `} />
        <div className={`  w-8 md:w-16 lg:w-32  bg-secondary absolute bottom-0 left-[10rem] md:left-[20rem] lg:left-[40rem]  ${inView ? 'h-[40%]' : ' h-0'} transition-all duration-[2000ms]`} />
        <div className={`  w-8 md:w-16 lg:w-32 bg-secondary absolute bottom-0 left-[14rem] md:left-[26rem] lg:left-[52rem]  ${inView ? 'h-[50%]' : ' h-0'} transition-all duration-[2000ms] `} />
        <div className={`  w-8 md:w-16 lg:w-32  bg-secondary absolute bottom-0 left-[18rem] md:left-[32rem] lg:left-[64rem]  ${inView ? 'h-[60%]' : ' h-0'} transition-all duration-[2000ms] `} />
        <div className={`"  w-8 md:w-16 lg:w-32 bg-secondary absolute bottom-0 left-[21rem] md:left-[38rem] lg:left-[76rem]  ${inView ? 'h-[70%]' : ' h-0'} transition-all duration-[2000ms]`} />
        <div className={`  w-8 md:w-16 lg:w-32 h-96 bg-secondary absolute bottom-0 left-[24rem] md:left-[44rem] lg:left-[88rem]  ${inView ? 'h-[80%]' : ' h-0'} transition-all duration-[2000ms]`} />
      </div>
    </MenuLayout>
  );
};

export default AboutUs;
