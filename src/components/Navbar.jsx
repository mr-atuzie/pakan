import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about-us", name: "about" },
    { id: 3, link: "/services", name: "services" },
    { id: 4, link: "/blog", name: "blog" },
    { id: 5, link: "/pricing", name: "pricing" },
    { id: 6, link: "/contact-us", name: "contacts" },
  ];
  return (
    <div className=" p-4 absolute top-0 z-40  w-full   ">
      <div className=" w-[90%] lg:w-[80%] mx-auto  flex justify-between items-center">
        <div>
          <h1 className=" text-red-600 z-10 text-3xl lg:text-5xl font-semibold  uppercase  ">
            CHIMDI
          </h1>
        </div>

        <ul className="hidden md:flex text-white">
          {links.map(({ id, link, name }) => {
            return (
              <li
                key={id}
                className=" capitalize px-4 cursor-pointer font-medium  hover:scale-105 duration-200"
              >
                <Link to={link}> {name}</Link>
              </li>
            );
          })}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className=" text-white cursor-pointer z-40 pr-4 md:hidden"
        >
          {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
        </div>
      </div>
      {nav && (
        <div className=" z-50 duration-300 flex flex-col fixed  shadow-md bg-black/90 top-0 right-0  w-[80vw] h-screen">
          <div className=" bg-red-500 p-4 flex justify-between items-center">
            <div>
              <h1 className="text-white text-xl lg:text-5xl font-semibold ">
                CHIMDI
              </h1>
              <p className=" text-gray-500 font-medium text-xs">Instructor</p>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className=" cursor-pointer  p-4 md:hidden"
            >
              {nav ? (
                <IoCloseOutline size={30} />
              ) : (
                <HiOutlineBars3 size={30} />
              )}
            </div>
          </div>
          <ul className=" mt-11  ">
            {links.map(({ id, link, name }) => {
              return (
                <Link to={link} onClick={() => setNav(!nav)}>
                  <li
                    key={id}
                    className=" px-4 cursor-pointer text-gray-50 capitalize py-4 text-xl  hover:scale-105 duration-200"
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
