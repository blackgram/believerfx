"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import DashMain from "@/components/Dashboard/DashMain";
import { auth, db } from "../../components/firebaseConfig";
import { loginUser, setLoading } from "@/Redux/features/userSlice";
import DashNv from "@/components/Dashboard/DashNav";
import { setShowMenu } from "@/Redux/features/menuSlice";
import { setIsSmallScreen } from "@/Redux/features/screenSizeSlice";
import Funding from "@/components/Dashboard/Funding";
import { Toaster } from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import Profile from "@/components/Dashboard/Profile";
import { Footer } from "@/components/Home";
import Withdrawal from "@/components/Dashboard/Withdrawal";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Support from "@/components/Dashboard/Support";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";

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
  const [authUser, setAuthUser] = useState(null);

  const getUserDataFromFirestore = async (uid) => {
    try {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap);
        return docSnap.data();
      } else {
        console.error("User document not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    const handleResize = () =>
      dispatch(setIsSmallScreen(window.innerWidth < 1024));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    isSmallScreen ? dispatch(setShowMenu(false)) : dispatch(setShowMenu(true));
  }, [isSmallScreen, dispatch]);

  useEffect(() => {
    !user ? router.push("/Login") : null;
  }, [user, router]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setAuthUser(authUser);
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "Users", authUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          dispatch(
            loginUser({
              ...user,
              firstname: docSnap.data().firstName,
              lastname: docSnap.data().lastName,
              phoneNumber: docSnap.data().phoneNumber,
            })
          );
        } else {
          console.error("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (authUser) {
      fetchUserData();
    }
  }, [authUser]);

  let componentToRender;

  switch (activeDashElement) {
    case "Profile":
      componentToRender = <Profile />;
      break;
    case "Funding":
      componentToRender = <Funding />;
      break;
    case "Withdrawal":
      componentToRender = <Withdrawal />;
      break;
    case "Support":
      componentToRender = <Support />;
      break;
    default:
      componentToRender = <DashMain />;
      break;
  }

  return (
    <div className="overflow-hidden">
      <DashNv />
      <Toaster />
      <ToastContainer />
      {componentToRender}
      <Footer />
      
      <TradingViewTickerTape display='down' />
    </div>
  );
};

export default Dashboard;
