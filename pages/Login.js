import InputBtn from "@/components/inputBtn";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="h-[30vh] bg-primary text-black flex items-center justify-center text-[50px] text-headtext font-[700] p-9 leading-0 text-center">
        Welcome Back
      </div>
      <div className="bg-black flex flex-col justify-center items-center">
        <div className="logo">
          <div className="font-bold text-[40px] text-primary p-4 pb-1">
            B<span className="italic text-secondary text-[40px]">fx</span>
          </div>
        </div>
        <div className="text-white font-bold">Login to your account</div>
        <div className="inputs text-ash justify-start items-start w-full p-2 text-[14px] ">
          <div>
            <div>User Name</div>
            <InputBtn placeholder='Username' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
