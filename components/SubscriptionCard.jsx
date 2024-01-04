import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';


const SubscriptionCard = (props) => {
  return (
    <div className='mb-5'>
      <div className="w-[21rem] bg-nb3 flex flex-col rounded-b-lg items-center justify-center">
        <div className="bg-secondary flex flex-col text-white items-center justify-center rounded-t-lg h-[100px] w-full">
          <div className="font-bold text-[24px]">{props.name}</div>
          <div className="bg-black h-[2px] w-[10px]" />
          <div>{props.desc}</div>
        </div>
        <div className="bg-nb3 text-white w-full flex flex-col items-center justify-center p-7 gap-3">
          <div>DAILY RETURN</div>
          <div className="bg-secondary h-[2px] w-[300px]" />
          <div>Compounding Total of {props.ct}</div>
          <div className="bg-secondary h-[2px] w-[300px]" />
          <div>HASHING FOR {props.hashing} DAYS</div>
          <div className="bg-secondary h-[2px] w-[300px]" />
        </div>
        <div className="w-full flex justify-between p-4 text-white">
          <div className="flex flex-col items-center justify-center">
            <div className="text-secondary">MINIMUM</div>
            <div>$ {props.min}</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-secondary">MAXIMUM</div>
            <div>$ {props.max}</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-5">
          <div className="slider w-[17rem] h-[10px] flex items-center relative ">
            <div className="absolute bottom-3 left-[35%] font-bold text-white">
              ${props.range}
            </div>
            <div className="w-full h-full bg-secondary opacity-50 rounded-full absolute" />
            <div className= {`bg-white h-full w-[${props.slider}%] opacity-100 rounded-full`} />
            <div className= {`bg-white h-[20px] w-[20px] absolute left-[${props.slider - 2}%]  rounded-full`} />
            <div />
          </div>
        </div>
        <Link>
          <div className="mb-4 text-black flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-secondary w-[150px] font-medium ">
            <div className='font-bold'>Sign Up Now</div>
            <div>
              <FaArrowRight size={"12px"} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SubscriptionCard