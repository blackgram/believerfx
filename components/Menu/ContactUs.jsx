import React from "react";
import MenuLayout from "./MenuLayout";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {


  return (
    <MenuLayout>
      <div className="w-full bg-nb4 p-2 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-evenly p-2 md:p-[3rem] lg:p-[5rem] items-evenly gap-4">
          <div className="w-full md:w-[40%] text-ash lg:text-[18px] p-4 flex flex-col gap-4">
            <div className=" text-[22px] lg:text-[30px] text-[#fefefe] font-medium ">
              Business Submissions
            </div>
            <div className="text-ash">
              For business plan submissions, please use this
            </div>
            <div className=" flex flex-col py-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full p-2 text-black text-[20px]">
                  <MdOutlineMailOutline />
                </div>
                <div>business@believersfx.com</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full p-2 text-black text-[20px]">
                  <FaPhoneAlt />
                </div>
                <div>(+1) 425 26 2628</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full p-2 text-black text-[20px]">
                <FaLocationDot />
                </div>
                <div>11 Wall St, New York, NY 10005</div>
              </div>
            </div>

            <div className="line h-[2px] w-full bg-nb3" />

            <div className="text-[22px] lg:text-[30px] text-[#fefefe] font-medium ">
              Connect with us on social media
            </div>

            <div className="line h-[2px] w-full bg-nb3" />
          </div>

          <div className=" w-full md:w-[60%] text-ash md:text-[14px] lg:text-[16px] p-4 flex flex-col gap-4">
            <div className="text-[22px] lg:text-[30px] text-[#fefefe] font-medium pb-8 ">
              Enquiry Form
            </div>
            <form>
              <div className="row1 flex flex-col md:flex-row gap-4 py-2 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="bg-nb4 w-full border-b border-b-nb1 py-4 focus:border-b-nb4 focus:outline-primary focus:outline-none focus:outline-1"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="bg-nb4 w-full border-b border-b-nb1 py-4 focus:border-b-nb4 focus:outline-primary focus:outline-none focus:outline-1"
                />
              </div>
              <div className="row2 flex flex-col md:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="Email"
                  required
                  className="bg-nb4 w-full border-b border-b-nb1 py-4 focus:border-b-nb4 focus:outline-primary focus:outline-none focus:outline-1"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  required
                  className="bg-nb4 w-full border-b border-b-nb1 py-4 focus:border-b-nb4 focus:outline-primary focus:outline-none focus:outline-1"
                />
              </div>
              <textarea
                rows="4"
                required
                placeholder="Message"
                spellCheck={false}
                className="bg-nb4 border-b border-b-nb1 mt-2 py-4 w-full focus:border-b-nb4 focus:outline-primary focus:outline-none focus:outline-1"
              />
              <div className="w-full flex justify-end my-8">
                <button type="submit" className="text-[#030303] text-[16px] py-3 px-5 flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary transition-all duration-500 ease-in-out close hover:bg-secondary  ">
                  <div>Send Message</div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-[20rem] px-5 lg:px-[7rem] mb-5 lg:mb-[10rem] rounded-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.471537925831!2d-74.010775!3d40.707634999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1721b556e9%3A0x326f0128a0f35c86!2s11%20Wall%20St%2C%20New%20York%2C%20NY%2010005%2C%20USA!5e0!3m2!1sen!2sng!4v1717082898959!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </MenuLayout>
  );
};

export default ContactUs;
