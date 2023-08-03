import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Service = () => {
  return (
    <div>
      <Navbar />
      <Banner
        vid={
          "https://res.cloudinary.com/domthgc9v/video/upload/v1691021992/chimdi/production_id_4468823_2160p_y6pd4o.mp4"
        }
        heading={"services"}
        text={"all services - what we do"}
      />
    </div>
  );
};

export default Service;
