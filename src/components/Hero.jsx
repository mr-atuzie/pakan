import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[70vh] lg:h-[80vh]  bg-black w-full">
      <video
        src="https://res.cloudinary.com/domthgc9v/video/upload/v1691021929/chimdi/production_id_4812848_2160p_k8xdxb.mp4"
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      <div className=" w-full h-full absolute top-0 z-30 bg-black/60 flex  items-center">
        <div className=" w-[80%] mx-auto">
          <h1 className=" text-white text-3xl lg:text-5xl font-bold capitalize">
            IT'S ALL ABOUT WHAT YOU CAN{" "}
            <span className=" text-red-600"> ACHIEVE</span>
          </h1>

          <p className="text-gray-300 tracking-wide capitalize my-6">
            Chimdi programs are designed for universal scalability, making it
            the perfect application for any committed individual regardless of
            experience.
          </p>

          <button className=" rounded-lg bg-red-600 text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
