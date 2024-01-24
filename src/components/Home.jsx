import React from "react";
import NavBar from "./NavBar";
import "../styles/index.css";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
function Home() {
  return (
    <div className="HomeContainer">
      <NavBar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default Home;
