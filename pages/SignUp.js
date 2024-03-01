"use client";
import React, { useState } from "react";
import InputBtn from "../components/Authentication/InputBtn";
import Link from "next/link";
import Image from "next/image";
import gBtn from "../assets/google.png";
import fBtn from "../assets/facebook.png";
import star from "../assets/star.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"; // Import the hook from the correct path
import { auth, db } from "../components/firebaseConfig";
import { useRouter } from "next/router";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { setLoading } from "@/Redux/features/userSlice";
import { BarLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [leverage, setLeverage] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.data.user.isLoading);
  const user = useSelector((state) => state.data.user.user);

  const router = useRouter();

  const options = [
    { value: "1.20", label: "1.20" },
    { value: "1.25", label: "1.25" },
    { value: "1.33", label: "1.33" },
    { value: "1.50", label: "1.50" },
    { value: "1.100", label: "1.100" },
    { value: "1.200", label: "1.200" },
    { value: "1.400", label: "1.400" },
    { value: "1.500", label: "1.500" },
  ];
  const handleSelectChange = (selectedOption) => {
    setLeverage(selectedOption.value);
  };

  const addUserToFirestore = async (
    uid,
    firstName,
    lastName,
    username,
    phoneNumber,
    leverage
  ) => {
    const userDocRef = doc(db, "Users", uid);

    try {
      await setDoc(userDocRef, {
        userid: uid,
        firstName: firstName,
        lastName: lastName,
        username: username,
        phoneNumber: phoneNumber,
        leverage: leverage,
      });

      console.log("User data added to Firestore");
    } catch (error) {
      console.error("Error adding user data to Firestore: ", error);
      // Handle the error as needed
    }
  };

  // Using the correct hook from react-firebase-hooks
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        toast.success("Sign Up Successful. Redirecting...");
        updateProfile(auth.currentUser, { displayName: userName });
        console.log({ res });
        addUserToFirestore(
          auth.currentUser.uid,
          firstName,
          lastName,
          userName,
          phoneNumber,
          leverage
        );
        router.push("/Login");
      } else {
        toast.error("Signup error");
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

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
        <Toaster />
        <div className="logo">
          <Link href="/">
            <div className="font-bold text-[40px] text-primary p-4 pb-1">
              B<span className="italic text-secondary text-[40px]">fx</span>
            </div>
          </Link>
        </div>
        <div className="text-white font-bold">Sign Up to your account</div>

        {/* user inputs start */}
        <form>
          <div className="inputs text-white flex flex-col  w-full md:w-[316px] p-2 text-[14px] gap-5 ">
            <div className="">
              <div className="mb-1">First Name</div>
              <InputBtn
                placeholder="Your first name"
                type="text"
                value={firstName}
                onChange={(e) => handleInputChange(e, setFirstname)}
              />
            </div>
            <div className="">
              <div className="mb-1">Last Name</div>
              <InputBtn
                placeholder="Your last name"
                type="text"
                value={lastName}
                onChange={(e) => handleInputChange(e, setLastname)}
              />
            </div>
            <div className="">
              <div className="mb-1">User Name</div>
              <InputBtn
                placeholder="Username"
                type="text"
                value={userName}
                onChange={(e) => handleInputChange(e, setUsername)}
              />
            </div>
            <div className="">
              <div className="mb-1">Phone Number</div>
              <InputBtn
                onChange={(e) => handleInputChange(e, setPhoneNumber)}
                placeholder="+1 2345678"
                type="number"
                value={email}
              />
            </div>
            <div className="">
              <Select
                options={options}
                className="text-black w-full"
                onChange={handleSelectChange}
                value={leverage}
                placeholder="Select Leverage"
              />
            </div>
            <div className="">
              <div className="mb-1">Email Address</div>
              <InputBtn
                onChange={(e) => handleInputChange(e, setEmail)}
                placeholder="youremail@mail.com"
                type="email"
                value={email}
              />
            </div>
            <div>
              <div className="mb-1">Password</div>
              <InputBtn
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
              />
            </div>
            <div>
              <div className="mb-1">Confirm Password</div>
              <InputBtn
                placeholder="Confirm password"
                type="password"
                onChange={handleConfirmPasswordChange}
              />
              {error && <div className="text-red-500 py-2">{error}</div>}
            </div>
          </div>
          {/* user inputs end */}

          <div className="text-white w-full md:w-[316px] p-4 flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" onChange={() => console.log("Working")} />
              <div>I accept the privacy policy</div>
            </div>
          </div>
          <div className="w-full md:w-[316px] md:px-0 p-4">
            <button
              type="submit"
              className="bg-primary rounded-full py-2 min-h-[40px] w-full md:w-[316px] md:px-0 p-4 flex items-center justify-center"
              onClick={handleSignUp}
            >
              {isLoading ? <BarLoader /> : "Sign up"}
            </button>
          </div>
        </form>

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
