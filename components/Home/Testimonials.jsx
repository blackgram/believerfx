import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/autoplay"; // Import Swiper navigation styles
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { testimonialData as data } from "./Data";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import CustomSwiperNav from "./CustomSwiperNav";

const Testimonials = () => {
  return (
    <div className="p-5 gap-4 bg-primary flex flex-col items-center justify-center">
      <div className="font-bold text-[18px]">Testimonials</div>
      <div className="font-bold text-[24px]">What people say</div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-black p-3 gap-3 text-ash  min-h-[290px] rounded-lg"
            >
              <div className="text-primary">
                <FaQuoteLeft size={30} />
              </div>
              <div className="text-[16px] mt-3">{item.note}</div>
              <div className="text-primary font-bold text-[18px] mt-3 text-headtext">
                {item.name}
              </div>
              <div className="italic ">{item.position}</div>
              <CustomSwiperNav />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
