import React from "react";
// import crypto1 from "../assets/crypto2.mp4";

const Hero = () => {
  return (
    <div className="relative h-[70vh] lg:h-[80vh]  bg-black w-full">
      {/* <video
        src={crypto1}
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
      /> */}

      <div className=" w-full h-full absolute top-0 z-30 bg-black/80 flex  items-center">
        <div className=" w-[80%] mx-auto text-center">
          <h1 className=" text-white text-3xl lg:text-5xl font-bold capitalize">
            BUY, RECEIVE , INVEST
            <span className=" text-blue-700"> ACHIEVE</span>
          </h1>

          <p className="text-gray-300 tracking-wide capitalize text-sm lg:text-base my-6">
            Seamlessly buy , recieve , invest and save money with absolute ease.
            Experiemce the efficiency and commenient banking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
