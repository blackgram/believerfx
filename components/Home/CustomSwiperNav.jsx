import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const CustomSwiperNav = () => {
  const swiper = useSwiper();

  return (
    <div className="text-primary absolute right-9 bottom-9 flex gap-5">
      <FaArrowLeftLong onClick={() => swiper.slidePrev()} size={30} />
      <FaArrowRightLong onClick={() => swiper.slideNext()} size={30}/>
    </div>
  );
};

export default CustomSwiperNav;
