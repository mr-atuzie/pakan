import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner
        vid={
          "https://res.cloudinary.com/domthgc9v/video/upload/v1691022052/chimdi/production_id_4761426_2160p_ail4bw.mp4"
        }
        heading={"About us"}
        text={"It's All About What You Can Achieve"}
      />
    </div>
  );
};

export default About;
