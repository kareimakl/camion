import React from "react";
import SliderHero from "./SliderHero";

function Hero() {
  return (
    <main className=" mx-auto flex flex-col lg:flex-row gap-4 ">
      {/* Left Section - 40% */}
      <div className="w-full lg:w-[100%]">
        <SliderHero />
      </div>
    </main>
  );
}

export default Hero;
