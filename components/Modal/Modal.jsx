import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="modal w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0">
          <div className="bg-[#313131cc] w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 z-40" />

          <div className=" bg-nb3 flex text-white flex-col p-4 items-center justify-center shadow-sm shadow-primary max-w-[500px]">
            <div className="w-full flex  justify-between items-center border-b-2 text-[20px] font-bold ">
              <div>Account Inactive</div>
              <div
                className="text-[30px] text-primary cursor-pointer "
                onClick={toggleModal}
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
      )}
    </>
  );
};

export default Modal;
