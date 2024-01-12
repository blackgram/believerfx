import React, { useState } from "react";
import InputBtn from "../components/InputBtn";
import Link from "next/link";
import Image from "next/image";
import gBtn from "../assets/google.png";
import fBtn from "../assets/facebook.png";
import star from "../assets/star.png";


const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Real-time validation
    if (confirmPassword !== newPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Real-time validation
    if (password !== newConfirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col bg-primary md:flex-row md:w-full md:h-full">
      <div className="h-[30vh] md:h-auto md:w-[40vw]">
        <div className="h-full  bg-primary text-black flex items-center justify-center text-[50px]  text-headtext font-[700] p-9 leading-0 text-center md:text-left">
          Hi!
          <br />
          Welcome
        </div>{" "}
      </div>
      <div className="bg-black flex flex-col justify-center items-center md:min-h-[100vh] md:w-full md:pt-9">
        <div className="logo">
          <Link href='/'>
          <div className="font-bold text-[40px] text-primary p-4 pb-1">
            B<span className="italic text-secondary text-[40px]">fx</span>
          </div></Link>
        </div>
        <div className="text-white font-bold">Sign Up to your account</div>

        {/* user inputs start */}
        <div className="inputs text-white flex flex-col  w-full md:w-[316px] p-2 text-[14px] gap-5 ">
          <div className="">
            <div className="mb-2">First Name</div>
            <InputBtn placeholder="Your first name" type="text" />
          </div>
          <div className="">
            <div className="mb-2">Last Name</div>
            <InputBtn placeholder="Your last name" type="text" />
          </div>
          <div className="">
            <div className="mb-2">User Name</div>
            <InputBtn placeholder="Username" type="text" />
          </div>
          <div className="">
            <div className="mb-2">Email Address</div>
            <InputBtn placeholder="youremail@mail.com" type="email" />
          </div>
          <div>
            <div className="mb-2" onChange={handlePasswordChange}>
              Password
            </div>
            <InputBtn placeholder="Password" type="password" />
          </div>
          <div>
            <div className="mb-2" onChange={handleConfirmPasswordChange}>
              Confirm Password
            </div>
            <InputBtn placeholder="Confirm password" type="password" />
            {error && <div className="text-red">{error}error</div>}
          </div>
        </div>
        {/* user inputs start */}

        <div className="text-white w-full md:w-[316px] p-4 flex justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <div>I accept the privacy policy</div>
          </div>
        </div>
        <div className="w-full md:w-[316px] md:px-0 p-4">
          <Link href="#">
            <div className=" bg-primary rounded-full py-2 flex items-center justify-center ">
              Sign Up
            </div>
          </Link>
        </div>
        <div className="text-ash w-full flex items-center text-[14px] mt-3">
          <div className="h-[2px] w-full bg-nb3" />
          <div className="w-full text-center">Or Sign up with</div>
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
          Already have an account?
          <span className="text-primary">
            <Link href="/Login"> Log In</Link>
          </span>
        </div>
      </div>
      <Image
        src={star}
        width={100}
        height={100}
        className="hidden md:block md:absolute top-40 left-10 previewSkew z-100"
      />

    </div>
  );
};

export default SignUp;
