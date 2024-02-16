import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const SubscriptionCard = (props) => {
  const [sliderValue, setSliderValue] = useState(props.min);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };


  return (
    <div className="mb-5">
      <div className="  xl:w-[24rem] bg-nb3 flex flex-col rounded-b-lg items-center justify-center">
        <div className={`${props.color} flex flex-col text-white items-center justify-center rounded-t-lg h-[100px] w-full`}>
          <div className="font-bold text-[24px]">{props.name}</div>
          <div className="bg-black h-[2px] w-[10px]" />
          <div>{props.desc}</div>
        </div>
        <div className="bg-nb3 text-white w-full flex flex-col items-center justify-center p-7 gap-3">
          <div>DAILY RETURN</div>
          <div className={`${props.color} h-[2px] w-[15rem]`} />
          <div>Compounding Total of {props.ct}%</div>
          <div className={`${props.color} h-[2px] w-[15rem]`} />
          <div>HASHING FOR {props.hashing} DAYS</div>
          <div className={`${props.color} h-[2px] w-[15rem]`} />
        </div>
        <div className="w-full flex justify-between p-4 text-white">
          <div className="flex flex-col items-center justify-center">
            <div className={props.accent}>Amount</div>
            <div>$ {sliderValue} </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className={props.accent}>Expected profit</div>
            <div>${(+sliderValue * +props.ct/100 + +sliderValue).toFixed(2)}</div>
          </div>  
        </div>
        <div className="w-full p-4 text-white gap-2 flex items-center justify-center pb-5">
          <div>
            <span>$</span>
            <span>{props.min}</span>
          </div>{" "}
          <input
            type="range"
            id="slider"
            name="slider"
            min={props.min}
            max={props.max}
            value={sliderValue}
            onChange={handleSliderChange}
            className={`w-full h-[10px] appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full ${props.sliderBg} [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:rounded-full  ${props.sliderThumb}`}
          />
          <div>
            <span>$</span>
            <span>{props.max}</span>
          </div>
        </div>
        <Link href="/SignUp">
          <div className={`mb-4 text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 ${props.color} w-[150px] font-medium `}>
            <div className="font-bold">Sign Up Now</div>
            <div>
              <FaArrowRight size={"12px"} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
