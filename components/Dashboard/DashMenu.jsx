import React, { useState, useEffect } from "react";
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

const DashMenu = ({ handleLogOut }) => {
  const showMenu = useSelector((state) => state.data.menu.showMenu);
  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      link: "/UserMain/Dashboard",
      active: true,
      icon: <IoMdHome />,
      onclick: "",
    },
    {
      id: 2,
      title: "Profile",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <FaUser />,
      onclick: "",
    },
    {
      id: 3,
      title: "Self Trading",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <MdOutlinePsychology />,
      onclick: "",
    },
    {
      id: 4,
      title: "Managed Trading",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <FaArrowTrendUp />,
      onclick: "",
    },
    {
      id: 5,
      title: "Funding",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <MdCurrencyExchange />,
      onclick: "",
    },
    {
      id: 7,
      title: "Reports",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <MdOutlineReportGmailerrorred />,
      onclick: "",
    },
    {
      id: 8,
      title: "Support",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <MdOutlineSupportAgent />,
      onclick: "",
    },
    {
      id: 9,
      title: "Log Out",
      link: "/UserMain/Dashboard",
      active: false,
      icon: <BiLogOut />,
      onclick: handleLogOut,
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <Link href={item.link} onClick={item.onclick}>
                <div className="flex items-center gap-1">
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              </Link>
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
          }  flex-col  bg-[#171818] z-100  transition-transform duration-[0.5s] ease `}
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
              key={item.i}
              className={`p-5 text-[20px] hover:text-secondary  ${
                item.active == true ? "text-primary" : "text-white"
              }`}
            >
              <Link href={item.link}>
                <div className="flex items-center gap-1">
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              </Link>
              {/* <div className="w-full h-[2px] bg-ash" /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashMenu;
