import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

const Faq = ({question, answer}) => {

  const [faqDrop, setFaqDrop] = useState(false);

  const handleFAQ = () => {
    setFaqDrop(!faqDrop);
  };

  return (
    <div
      onClick={handleFAQ}
      className={` transition-all duration-500 ease-in-out  cursor-pointer bg-nb3 w-full rounded-lg p-4 font-bold text-2xl hover:bg-primary hover:text-nb4 ${faqDrop? " bg-primary text-nb4" : ""} `}
    >
      <div className="flex justify-between items-center">
        <div>{question}</div>
        <FaRegPlusSquare />
      </div>
      <div
        className={`${
          faqDrop ? " opacity-100 h-auto" : " h-0 opacity-0"
        } transition-all ease-in-out duration-500 origin-top text-lg font-normal`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Faq;
