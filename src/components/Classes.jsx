import React from "react";
import { reviews } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
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
    <div className=" py-10 lg:py-16 bg-gray-50 ">
      <div className="w-[80%] mt-10 lg:mt-0 mx-auto ">
        <div>
          <div className=" text-red-600 text-center capitalize text-3xl font-semibold">
            Our Classes
          </div>
          <p className="font-medium text-center">
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
          className=" w-full h-72 object-cover rounded-t-lg "
        />
        <div className=" bg-red-500/25 w-full h-full absolute top-0 "></div>
      </div>

      <div className="p-4 ">
        <div className=" flex  items-center">
          <div className=" bg-red-200 p-1 h-fit rounded-full"></div>
          <p className=" ml-1 uppercase font-semibold">{name}</p>
        </div>
        <div className="flex items-center">
          <GiAlarmClock size={20} color="red" />
          <p className=" ml-1 text-gray-700 my-1">{time}</p>
        </div>
        <div className="flex">
          <BiSolidQuoteAltLeft size={20} color="red" />
          <p className="text-sm font-medium capitalize ml-1 mt-1">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
