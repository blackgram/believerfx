"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import DashMain from "@/components/Dashboard/DashMain";
import { auth } from "../../components/firebaseConfig";
import { loginUser, setLoading } from "@/Redux/features/userSlice";
import DashNv from "@/components/Dashboard/DashNav";
import { setShowMenu } from "@/Redux/features/menuSlice";

import { Footer } from "@/components/Home";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import DashMenu from "@/components/Dashboard/DashMenu";
import Profile from "@/components/Dashboard/Profile";
import { setIsSmallScreen } from "@/Redux/features/screenSizeSlice";
import Funding from "@/components/Dashboard/Funding";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.data.user.user);
  const showMenu = useSelector((state) => state.data.menu.showMenu);
  const activeDashElement = useSelector(
    (state) => state.data.activeDash.activeComponent
  );
  const isSmallScreen = useSelector(
    (state) => state.data.screenSize.isSmallScreen
  );

  useEffect(() => {
    const handleResize = () =>
      dispatch(setIsSmallScreen(window.innerWidth < 1024));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    isSmallScreen ? dispatch(setShowMenu(false)) : dispatch(setShowMenu(true));
  }, []);

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

  let componentToRender;

  switch (activeDashElement) {
    case "Profile":
      componentToRender = <Profile />;
      break;
    case "Funding":
      componentToRender = <Funding />;
      break;
    default:
      componentToRender = <DashMain />;
      break;
  }

  return (
    <div className="overflow-hidden">
      <DashNv />
      {componentToRender}
      {/* <DashMain /> */}
      <Footer />
      <TradingViewTickerTape display="down" />
    </div>
  );
};

export default Dashboard;
