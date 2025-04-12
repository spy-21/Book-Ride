import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Map from "../components/Map";
const Home = () => {
  return (
    <div>
      <HeroSection />;
      <Services />
      <Map />
    </div>
  );
};
export default Home;
