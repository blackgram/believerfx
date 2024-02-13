import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import CTA2 from "./CTA2";

const Footer = (props) => {
  return (
    <div className=" text-ash bg-black flex flex-col gap-4 justify-center items-center p-4 lg:pt-[10rem] relative mb-5  ">
      {props.cta && <CTA2 />}
      <div className="flex flex-col  gap-5 md:flex-row md:w-full md:items-start md:justify-evenly lg:gap-8 ">
        <div className="flex flex-col text-center md:text-left gap-2  ">
          <div className="text-white text-[20px] lg:text-[24px] font-bold mb-1">
            Quick Links
          </div>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/">Sign Up</Link>
          </div>
          <div>
            <Link href="/">Login</Link>
          </div>
          <div>
            <Link href="/">Support</Link>
          </div>
          <div>
            <Link href="/">FAQ</Link>
          </div>
        </div>

        <div className="flex flex-col text-center md:text-left gap-2">
          <div className="text-white text-[20px] lg:text-[24px] font-bold mb-2">
            Company
          </div>
          <div>
            <Link href="/">About Us</Link>
          </div>
          <div>
            <Link href="/">Careers</Link>
          </div>
        </div>
        <div className="flex flex-col text-center md:text-left gap-2">
          <div className="text-white text-[20px] lg:text-[24px] font-bold mb-2">
            Legal
          </div>
          <div>
            <Link href="/">Terms & Conditions</Link>
          </div>
          <div>
            <Link href="/">Privacy & Policy</Link>
          </div>
        </div>
        <div className="flex flex-col text-center md:text-left gap-2">
          <div className="text-white text-[20px] lg:text-[24px] font-bold mb-2">
            Contact Us
          </div>
          <div>
            <Link href="/">help@beleiversfx.com</Link>
          </div>
          <div>
            <Link href="/">+44 1234567</Link>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-[21rem] lg:w-[53rem] bg-white " />

      <div className="text-justify text-[12px] lg:text-[16px] max-w-[21rem] max-w-[40rem] lg:max-w-[53rem]">
        <span className="font-bold">RISK WARNING: </span>
        The Financial Products offered by the company include Contracts for
        Difference (&apos;CFDs&apos;) and other complex financial products.
        Trading CFDs carries high level of risk since leverage can work both to
        your advantage and disadvantage. As a result, CFDs may not be suitable
        for all investors because it is possible to lose all of your invested
        capital. You should never invest money that you cannot afford to lose.
        Before trading in the complex financial products offered, please ensure
        to understand the risks involved.
      </div>

      <div className="h-[1px] w-[53rem] lg:w-[53rem] bg-white " />

      <div className="flex flex-col md:flex-row md:justify-between md:w-full md:px-12 items-center justify-center gap-4 py-5">
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="bg-nb3 rounded-lg w-[36px] h-[36px] flex items-center justify-center">
            <Link href="/">
              <FaFacebookF size={20} />
            </Link>
          </div>
          <div className="bg-nb3 rounded-lg w-[36px] h-[36px] flex items-center justify-center">
            <Link href="/">
              <FaInstagram size={20} />
            </Link>
          </div>
          <div className="bg-nb3 rounded-lg w-[36px] h-[36px] flex items-center justify-center">
            <Link href="/">
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>
        <div>Copyright @2024 Believers FX Profit</div>
      </div>
    </div>
  );
};

export default Footer;
