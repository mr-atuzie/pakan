import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Classes from "../components/Classes";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Classes />
      <WhyUs />
    </div>
  );
};

export default Home;
