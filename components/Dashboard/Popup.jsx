import React from "react";

const Popup = () => {
  return (
    <div className=" bg-nb3 flex flex-col p-4 items-center justify-center shadow-sm shadow-primary max-w-[500px]">
      <div className="w-full flex  justify-between items-center border-b-2 text-[20px] font-bold ">
        <div>Account Inactive</div>
        <div>
          {/* <IoClose className="text-[30px] text-primary " /> */}
        </div>
      </div>
      <div className="p-2 text-justify">
        Your Account is currently inactive, please head to the
        &quot;funding&quot; page, select a plan and fund your account at which
        point you will be able to access this page. If you are experiencing any
        difficulties please contact support.
      </div>
    </div>
  );
};

export default Popup;
