"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import DashMain from "@/components/Dashboard/DashMain";
import { auth } from "../../components/firebaseConfig";
import { loginUser, setLoading } from "@/Redux/features/userSlice";
import DashNv from "@/components/Dashboard/DashNav";
import { Footer } from "@/components/Home";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import DashMenu from "@/components/Dashboard/DashMenu";

const Dashboard = () => {
  const router = useRouter();

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    !user ? router.push("/Login") : null;
  }, [user, router]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is not logged in");
      }
    });
  }, []);

  return (
    <div className="">
      <DashNv />
      <DashMain />
      {/* <Footer  /> */}
      {/* <TradingViewTickerTape display='fixed' /> */}
    </div>
  );
};

export default Dashboard;
