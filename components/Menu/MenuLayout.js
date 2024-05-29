import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMainMenu } from "@/Redux/features/activeMainMenuSlice";
import { useRouter } from "next/router";

const MenuLayout = ({back, children}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const activeMenu = useSelector(
    (state) => state.data.activeMainMenu.activeMenu
  );

  let backLink
  back? backLink = back : backLink = "Home";

  return (
    <div className="min-h-screen pt-[6rem] xl:pt-[5rem]">
      <div className="text-white p-[4rem] w-full bg-forex bg-cover bg-center ">
        <div className="text-[36px] font-bold pb-2">{activeMenu}</div>
        <div className="flex gap-2 font-semibold">
          <span
            className="cursor-pointer"
            onClick={() => {
            dispatch(setActiveMainMenu(backLink));
            router.push('/')
          }}
          >
            {backLink}
          </span>
          <span className="text-primary">{">>>"}</span>
          <span className="text-primary">{activeMenu}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default MenuLayout;
