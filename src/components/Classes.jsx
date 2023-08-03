import React from "react";
import { reviews } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import "swiper/css";
// import "swiper/swiper-bundle.min.css";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Classes = () => {
  return (
    <div className=" py-8 lg:py-16 bg-gray-50 ">
      <div className=" w-[90%] lg:w-[80%] mt-10 lg:mt-0 mx-auto ">
        <div>
          <div className=" text-red-600 text-center capitalize text-3xl font-semibold">
            Our Classes
          </div>
          <p className="text-sm lg:text-base font-medium text-center">
            Build Your Body And Transform Your Life.
          </p>
        </div>

        {/* mobile silder */}
        <div className=" my-11 lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {reviews?.map(({ img, time, quote, name }, index) => {
              return (
                <SwiperSlide key={index}>
                  <PropertiesCard
                    time={time}
                    img={img}
                    name={name}
                    quote={quote}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* desktop */}
        <div className=" my-11 hidden lg:block ">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {reviews?.map(({ img, name, time, quote }, index) => {
              return (
                <SwiperSlide key={index}>
                  <PropertiesCard
                    time={time}
                    img={img}
                    name={name}
                    quote={quote}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const PropertiesCard = ({ name, img, time, quote }) => {
  return (
    <div className="  bg-white shadow-lg rounded-lg ">
      <div className=" relative">
        <img
          src={img}
          alt={name}
          className=" w-full h-80 object-cover rounded-t-lg "
        />
        <div className=" bg-red-500/25 w-full h-full absolute top-0 "></div>
      </div>

      <div className="p-4 ">
        <div className=" flex  items-center">
          <div className=" bg-red-300 p-1 h-fit rounded-full"></div>
          <p className=" ml-1 uppercase font-semibold">{name}</p>
        </div>
        <div className="flex text-gray-700 items-center">
          <GiAlarmClock size={20} />
          <p className=" ml-1  my-1 text-sm lg:text-base">{time}</p>
        </div>
        <div className="flex">
          <BiSolidQuoteAltLeft size={20} color="red" />
          <p className="text-xs lg:text-sm font-medium capitalize mx-1 mt-1">
            {quote}
          </p>
          <BiSolidQuoteAltRight size={20} color="red" />
        </div>
      </div>
    </div>
  );
};

export default Classes;
