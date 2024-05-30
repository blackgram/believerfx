import React, { useState } from "react";
import DashLayout from "./DashLayout";
import Image from "next/image";
import Faq from "./Faq";
import faq from "../../assets/faq.png";
import { RiMailSendFill } from "react-icons/ri";

const Support = () => {
  const [faqDrop, setFaqDrop] = useState(false);

  const handleFAQ = () => {
    setFaqDrop(!faqDrop);
  };

  return (
    <DashLayout>
      <div className="px-4 py-6 lg:p-8 min-h-full flex flex-col  items-center gap-20">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-full text-center font-medium text-[24px] xl:text-[32px] ">
            Anytime Support from our team
          </div>
          <div className="max-w-[500px] text-ash mt-2">
            We're constantly improving our trading platform, trying to make it
            the best on the market and we would love your feedback
          </div>
        </div>

        <div className="bg-secondary cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 flex flex-col justify-center items-center gap-5 md:w-1/2 p-10 rounded-md font-bold text-2xl">
          <div className="flex justify-center items-center gap-5">
            <div>Send us a mail</div>
            <RiMailSendFill className="text-primary text-4xl" />
          </div>
          <div className="text-lg text-center">
            Let us know how we can assist you.
            <br />
            (15mins average response time)
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-primary text-[20px]">FAQ's</div>
            <div className="text-[30px] font-bold ">
              Frequently Asked Questions
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center py-14 w-full gap-10">
            <div className="lg:w-[60%] flex flex-col gap-4">
              <Faq
                question={"What is trading"}
                answer="Trading involves buying and selling financial instruments like stocks advantage of price fluctuations in these assets."
              />
              <Faq
                question={"How can I get started with trading?"}
                answer="lorem"
              />
              <Faq
                question={"What are the different types of trading?"}
                answer="lorem"
              />
              <Faq
                question={"What are the risks associated with trading?"}
                answer="lorem"
              />
              <Faq question={"How do i fund my wallet"} answer="lorem" />
              <Faq question={"How do I withdraw my funds"} answer="lorem" />
            </div>
            <Image src={faq} sizes="100%" alt="faq" className="lg:w-[40%]" />
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Support;
