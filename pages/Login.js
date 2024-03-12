"use client";
import InputBtn from "../components/Authentication/InputBtn";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import gBtn from "../assets/google.png";
import fBtn from "../assets/facebook.png";
import star from "../assets/star.png";
import {
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../components/firebaseConfig";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/Redux/features/userSlice";
import { BarLoader } from "react-spinners";


const Login = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.data.user.isLoading)

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        toast.success('Login successful')
        setEmail("");
        setPassword("");
        router.push("/UserMain/Dashboard");
      }
      else {
        dispatch(setLoading(false));
        toast.error('Login failed')
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-primary flex flex-col md:flex-row md:w-full">
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
      <Toaster />
        <div className="logo">
          <Link href="/">
            <div className="font-bold text-[40px] text-primary p-4 pb-1">
              B<span className="italic text-secondary text-[40px]">fx</span>
            </div>
          </Link>
        </div>
        <div className="text-white font-bold">Login to your account</div>

        {/* user inputs start */}

        <div className="inputs text-white flex flex-col w-full md:w-[350px] p-2 text-[14px] gap-5 ">
          <div className="">
            <div className="mb-2">Email</div>
            <InputBtn
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2">Password</div>
            <InputBtn
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* user inputs end */}

        <div className="text-white w-full md:w-[316px] md:px-0 p-4 flex justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <div>Remember me</div>
          </div>
          <Link href="#">
            <div>Forgot Password?</div>
          </Link>
        </div>
        <div className="w-full md:w-[316px] md:px-0 p-4">
          <Link href="/UserMain/Dashboard">
            <div
              onClick={handleSignIn}
              className=" bg-primary rounded-full py-2 min-h-[40px] flex items-center justify-center "
            >
              {isLoading ? <BarLoader /> : 'Sign in'}
            </div>
          </Link>
        </div>
        {/* <div className="text-ash w-full flex items-center text-[14px] mt-3">
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
        </div> */}
        <div className="h-[2px] w-full bg-nb3" />
        <div className="text-ash p-4 pb-6">
          Don&apos;t have an account?
          <span className="text-primary">
            <Link href="/SignUp"> Register Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
