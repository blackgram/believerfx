import InputBtn from "@/components/inputBtn";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import gBtn from "../assets/google.png";
import fBtn from "../assets/facebook.png";
import star from "../assets/star.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full">
      <div className="h-[30vh] md:h-[100vh] md:w-[40vw] bg-primary text-black flex items-center justify-center text-[50px]  text-headtext font-[700] p-9 leading-0 text-center md:text-left">
        Welcome <br /> Back!
      </div>
      <Image
        src={star}
        width={100}
        height={100}
        alt=""
        className="hidden md:block md:absolute top-40 left-10 previewSkew z-100"
      />
      <div className="bg-black flex flex-col justify-center items-center min-h-[70vh] md:min-h-[100vh] md:w-full">
        <div className="logo">
          <div className="font-bold text-[40px] text-primary p-4 pb-1">
            B<span className="italic text-secondary text-[40px]">fx</span>
          </div>
        </div>
        <div className="text-white font-bold">Login to your account</div>

        {/* user inputs start */}

        <div className="inputs text-white flex flex-col w-full md:w-[350px] p-2 text-[14px] gap-5 ">
          <div className="">
            <div className="mb-2">User Name</div>
            <InputBtn placeholder="Username" type="text" />
          </div>
          <div>
            <div className="mb-2">Password</div>
            <InputBtn placeholder="Password" type="password" />
          </div>
        </div>

        {/* user inputs end */}

        <div className="text-white w-full md:w-[316px] md:px-0 p-4 flex justify-between">
          <div className="flex gap-2">
            <input type="checkbox" />
            <div>Remember me</div>
          </div>
          <Link href="#">
            <div>Forgot Password?</div>
          </Link>
        </div>
        <div className="w-full md:w-[316px] md:px-0 p-4">
          <Link href="#">
            <div className=" bg-primary rounded-full py-2 flex items-center justify-center ">
              Sign In
            </div>
          </Link>
        </div>
        <div className="text-ash w-full flex items-center text-[14px] mt-3">
          <div className="h-[2px] w-full bg-nb3" />
          <div className="w-full text-center">Or Sign in with</div>
          <div className="h-[2px] w-full bg-nb3" />
        </div>
        <div className="flex gap-4 p-4">
          <Link href="/">
            <Image src={gBtn} sizes="100vw" />
          </Link>
          <Link href="/">
            <Image src={fBtn} sizes="100vw" />
          </Link>
        </div>
        <div className="text-ash p-4 pb-6">
          Don't have an account?
          <span className="text-primary">
            <Link href="/SignUp">Register Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
