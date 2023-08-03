import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Banner
        vid={
          "https://res.cloudinary.com/domthgc9v/video/upload/v1691027350/chimdi/_import_60c1b58d543887.29807799_FPpreview_fgcouq.mp4"
        }
        heading={"Pricing"}
        text={"all services - what we do"}
      />
    </div>
  );
};

export default Pricing;
