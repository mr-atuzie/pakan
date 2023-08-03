import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Banner
        vid={
          "https://res.cloudinary.com/domthgc9v/video/upload/v1691027329/chimdi/_import_60c1caa56dc975.96101826_FPpreview_wwicfi.mp4"
        }
        heading={"Blog"}
        text={"all services - what we do"}
      />
    </div>
  );
};

export default Blog;
