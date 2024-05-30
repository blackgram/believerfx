import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";

import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { setActiveDash } from "@/Redux/features/activeDashSlice";
import { handleLogout } from "./AuthUtils";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { setShowMenu } from "@/Redux/features/menuSlice";
import Popup from "./Popup";

const DashMenu = () => {
  const showMenu = useSelector((state) => state.data.menu.showMenu);
  const isSmallScreen = useSelector(
    (state) => state.data.screenSize.isSmallScreen
  );
  const activeDashElement = useSelector(
    (state) => state.data.activeDash.activeComponent
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleItemClick = (element) => {
    dispatch(setActiveDash(element));
  };

  const LogOut = () => {
    handleLogout(dispatch, auth, router);
  };

  useEffect(() => {
    // close the dropdown when user clicks outside the menu
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  const [modal, setModal] = useState(false);


  const handleUnauthorizedPage = () => {
    setModal(!modal);
  };

  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      link: "/UserMain/Dashboard",
      active: activeDashElement == "Dashboard" ? true : false,
      icon: <IoMdHome />,
      onclick: handleItemClick,
    },
    {
      id: 2,
      title: "Profile",
      link: "/UserMain/Dashboard",
      active: activeDashElement == "Profile" ? true : false,
      icon: <FaUser />,
      onclick: handleItemClick,
    },
    {
      id: 3,
      title: "Self Trading",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <MdOutlinePsychology />,
      onclick: handleUnauthorizedPage,
    },
    {
      id: 4,
      title: "Managed Trading",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <FaArrowTrendUp />,
      onclick: handleUnauthorizedPage,
    },
    {
      id: 5,
      title: "Funding",
      link: "/UserMain/Dashboard",
      active: activeDashElement == "Funding" ? true : false,
      icon: <MdCurrencyExchange />,
      dropdownItems: [
        {
          id: 1,
          title: "Deposit",
          link: "/UserMain/Dashboard",
          active: false,
          icon: <MdOutlinePsychology />,
          onclick: handleUnauthorizedPage,
        },
        {
          id: 2,
          title: "Withdraw",
          link: "/UserMain/Dashboard",
          active: false,
          icon: <FaArrowTrendUp />,
          onclick: handleUnauthorizedPage,
        },
      ],
      onclick: handleItemClick,
    },
    {
      id: 6,
      title: "Withdrawal",
      link: "/UserMain/Dashboard",
      active: activeDashElement == "Withdrawal" ? true : false,
      icon: <MdCurrencyExchange />,
      onclick: handleUnauthorizedPage,
    },
    {
      id: 8,
      title: "Support",
      link: "/UserMain/Dashboard",
      active: activeDashElement == "Support" ? true : false,
      icon: <MdOutlineSupportAgent />,
      onclick: handleItemClick,
    },
    {
      id: 9,
      title: "Log Out",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <BiLogOut />,
      onclick: LogOut,
    },
  ];

  return (
    <div>
      {/* For small screens */}
      {isSmallScreen ? (
        <div
          active={showMenu}
          className={`${
            showMenu ? "flex" : "none"
          } absolute flex-col left-0 top-[60px] h-screen bg-black z-50 overflow-hidden transition duration-[0.5s] ease ${
            showMenu ? "visible" : "invisible"
          } ${showMenu ? "opacity-100" : "opacity-0"} origin-left ${
            showMenu ? "scale-x-100" : "scale-x-[0.3]"
          } `}
        >
          <div className="w-full h-[1px] bg-ash" />
          <div className="p-2 gap-1 font-medium flex text-white">
            Account Status:{" "}
            <span className="flex items-center text-red-500 animate-pulse">
              <IoMdCloseCircle size={15} />
              inactive
            </span>{" "}
          </div>
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className={`p-5 text-[20px] hover:text-secondary  ${
                item.active == true ? "text-primary" : "text-white"
              }`}
            >
              <div
                className={`flex items-center gap-1 cursor-pointer ${
                  item.id == 9 && "text-red-500"
                }`}
                onClick={() => item.onclick(item.title)}
              >
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
              {/* <div className="w-full h-[2px] bg-ash" /> */}
            </div>
          ))}
        </div>
      ) : (
        // for big screens
        <div
          active={showMenu}
          className={`${
            showMenu
              ? "visible scale-x-100 opacity-100 origin-left flex "
              : "none invisible opacity-0 scale-x-[0.3]  "
          }  flex-col  bg-[#171818] z-100 h-full  transition-transform duration-[0.5s] ease `}
        >
          <div className="w-full h-[1px] bg-ash" />
          <div className="p-2 gap-1 font-medium flex text-white">
            Account Status:{" "}
            <span className="flex items-center text-red-500 animate-pulse">
              <IoMdCloseCircle size={15} />
              inactive
            </span>{" "}
          </div>
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className={`p-5 text-[20px] hover:text-secondary  ${
                item.active == true ? "text-primary" : "text-white"
              }`}
            >
              
              <Link href={item.link}>
                <div
                  className={`flex items-center gap-1 cursor-pointer ${
                    item.id == 9 && "text-red-500"
                  }`}
                  onClick={() => item.onclick(item.title)}
                >
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              </Link>
              {/* <div className="w-full h-[2px] bg-ash" /> */}
            </div>
          ))}
        </div>
      )}
      
        <div className={`modal transition-all ease-in-out duration-1000 w-[100vw] h-[100vh] ${ modal ? " fixed top-0 left-0 right-0 bottom-0 z-40 opacity-100 scale-100" : " hidden invisible opacity-0 scale-50"} `}>
          <div onclick={handleUnauthorizedPage} className="bg-[#313131cc] w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 z-40" />

          <div className={` ${modal? " scale-100" : " scale-50"} transition-all duration-500 centered z-50 bg-nb3 flex text-white flex-col p-4 items-center justify-center shadow-sm shadow-primary max-w-[500px]`}>
            <div className="w-full flex  justify-between items-center border-b-2 text-[20px] font-bold ">
              <div>Account Inactive</div>
              <div
                className="text-[30px] text-primary cursor-pointer "
                onClick={handleUnauthorizedPage}
              >
                <IoClose />
              </div>
            </div>
            <div className="p-2 text-justify">
              Your Account is currently inactive, please head to the
              &quot;funding&quot; page, select a plan and fund your account at
              which point you will be able to access this page. If you are
              experiencing any difficulties please contact{" "}
              <span className="text-primary">support@believersfx.com</span>.
            </div>
          </div>
        </div>
    </div>
  );
};

export default DashMenu;
