import React from "react";
import { BiSolidMedal } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

const Provide = () => {
  return (
    <div className="w-full lg:min-h-[80vh] bg-hero-pattern bg-no-repeat bg-cover flex flex-col items-center justify-center py-10 px-4">
      <div className="text-center">
        <div className="text-primary font-bold text-[18px] lg:text-[20px] mb-3">
          We provide
        </div>
        <div className="text-white font-bold text-[24px] lg:text-[30px] mb-3">
          Join a community of over{" "}
          <span className="text-secondary">100,000</span> traders
        </div>
        <div className="text-[16px] lg:text-[18px] lg:max-w-[615px] text-ash mb-3">
          Trading is the art and science of buying and selling financial
          instruments, such as stocks bonds currencies commodities
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="bg-nb3 hover:bg-primary text-ash hover:text-black max-w-[300px] lg:max-w-[416px] lg:h-[300px] rounded-lg flex flex-col items-center justify-center p-4">
          <div className="bg-black rounded-full lg:h-[80px] lg:w-[80px] flex items-center justify-center p-3 text-primary">
            <BiSolidMedal size={32} />
          </div>
          <div className="font-bold font-headtext text-[20px] text-white hover:text-black my-5">
            Best Reputation
          </div>
          <div className="text-[14px] lg:text-[16px] text-center hover:text-black">
            Transformed the trading landscape. Online trading platforms and
            mobile apps have made it easier than ever for individuals
          </div>
        </div>

        <div className="bg-nb3 hover:bg-primary text-ash hover:text-black max-w-[300px] lg:max-w-[416px] lg:h-[300px]  rounded-lg flex flex-col items-center justify-center p-4">
          <div className="bg-black rounded-full p-3 text-primary lg:h-[80px] lg:w-[80px] flex items-center justify-center">
            <MdPeopleAlt size={32} />
          </div>
          <div className="font-bold font-headtext text-[20px] text-white hover:text-black my-5">
            100,000+ Members
          </div>
          <div className=" text-[14px] lg:text-[16px] text-center">
            One of the fundamental principles of trading is risk management.
            Successful traders carefully manage their capital,
          </div>
        </div>
        <div className="bg-nb3 hover:bg-primary text-ash hover:text-black max-w-[300px] lg:max-w-[416px] lg:h-[300px]  rounded-lg flex flex-col items-center justify-center p-4">
          <div className="bg-black rounded-full p-3 text-primary lg:h-[80px] lg:w-[80px] flex items-center justify-center">
            <MdSecurity size={32} />
          </div>
          <div className="font-bold font-headtext text-[20px] text-white hover:text-black my-5">
            Trusted and Secure
          </div>
          <div className=" text-[14px] lg:text-[16px] text-center">
            Trading is not without its challenges, as markets can be highly
            volatile and unpredictable. It requires discipline
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
