import React from "react";
import { whyUs } from "../data";

const WhyUs = () => {
  return (
    <div className=" py-10 lg:py-16">
      <div className="w-[80%] mt-10 lg:mt-0 mx-auto  flex lg:justify-between flex-col lg:flex-row">
        <div className=" lg:w-[45%]">
          <img
            className=" rounded-lg shadow-lg"
            src="https://ifitness.ng/wp-content/uploads/2022/11/were-here-fitness-portrait-group-confident-young-people-working-out-together-gym-min-1024x1024.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-[50%] ">
          <p className="font-medium text-red-600 text-xl  uppercase my-2 lg:mt-0 ">
            Why chimdi
          </p>
          <h1 className=" capitalize text-5xl font-semibold">
            Unique <span className="text-red-500"> Experiences </span>Tailored
            To Your <span className="text-red-500"> Lifestyle.</span>
          </h1>
          <div className=" my-4">
            {whyUs.map(({ text, id, img, title }) => {
              return (
                <div
                  key={id}
                  className="flex bg-red-600 items-center p-4 mb-4 rounded-lg border-red-50 border-2"
                >
                  <div className=" bg-white  w-[70px] h-[70px] p-2 rounded-full">
                    {img}
                  </div>
                  <div className=" p-3">
                    <h3 className="text-white uppercase font-medium text-lg lg:text-xl">
                      {title}
                    </h3>
                    <p className=" text-gray-50">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
