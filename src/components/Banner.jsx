import React from "react";

const Banner = ({ vid, heading, text }) => {
  return (
    <div className=" h-[50vh] w-full bg-gray-200 relative">
      <video
        autoPlay
        loop
        muted
        src={vid}
        alt="about"
        className=" w-full h-full object-cover  "
      />

      <div className="w-full absolute top-0 h-full bg-black/60 flex items-center  ">
        <div className="w-[80%] mx-auto  ">
          <p className=" capitalize text-gray-300 tracking-wide">{heading}</p>
          <div className=" capitalize text-2xl lg:text-4xl font-medium text-gray-100 tracking-wider">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
