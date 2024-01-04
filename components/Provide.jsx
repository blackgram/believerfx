import React from "react";
import { BiSolidMedal } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

const Provide = () => {
  return (
    <div className="w-full bg-hero-pattern bg-no-repeat bg-cover flex flex-col items-center justify-center py-10 px-4">
      <div className="text-center">
        <div className="text-primary font-bold text-[18px] mb-3">
          We provide
        </div>
        <div className="text-white font-bold text-[24px] mb-3">
          Join a community of over{" "}
          <span className="text-secondary">100,000</span> traders
        </div>
        <div className="text-[16px] text-ash mb-3">
          Trading is the art and science of buying and selling financial
          instruments, such as stocks bonds currencies commodities
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="bg-nb3 min-w-[350px] min-h-[200px] rounded-lg flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full p-3 text-primary" ><BiSolidMedal size={30} /></div>
            <div className="font-bold font-headtext text-[20px] text-white my-5">Best Reputation</div>
            <div className="text-ash text-[14px] text-center">transformed the trading landscape. Online trading platforms and mobile apps have made it easier than ever for individuals</div>
        </div>
        <div className="bg-nb3 min-w-[350px] min-h-[200px] rounded-lg flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full p-3 text-primary" ><MdPeopleAlt size={30} /></div>
            <div className="font-bold font-headtext text-[20px] text-white my-5">100,000+ Members</div>
            <div className="text-ash text-[14px] text-center">One of the fundamental principles of trading is risk management. Successful traders carefully manage their capital,</div>
        </div>
        <div className="bg-nb3 min-w-[350px] min-h-[200px] rounded-lg flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full p-3 text-primary" ><MdSecurity size={30} /></div>
            <div className="font-bold font-headtext text-[20px] text-white my-5">Trusted and Secure</div>
            <div className="text-ash text-[14px] text-center">Trading is not without its challenges, as markets can be highly volatile and unpredictable. It requires discipline</div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
