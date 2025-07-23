
import React from "react";
import SliderHero from "./SliderHero";

function Hero() {
  return (
    <main className="mt-4 container mx-auto flex flex-col lg:flex-row gap-4 ">
      {/* Left Section - 40% */}
      <div className="w-full lg:w-[40%]">
      <SliderHero/>
      </div>

      {/* Right Section - 60% */}
      <div className="w-full lg:w-[60%] flex flex-col gap-4">
        {/* Top Part (Washing Machine + Categories) */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Washing Machine */}
          <div className="w-full md:w-[40%]">
            <img
              src="/assets/images/banner-l-washmachine-opt.jpg"
              alt="Washing Machine"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          {/* Hot Categories */}
          <div className="w-full md:w-[60%] pb-2">
            <h2 className="font-semibold text-xl flex gap-2 text-center justify-start items-center  mb-2">
              <img src="/assets/icons/mp2-fire.svg" alt="" className="w-5 h-5"/>
              Hot categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <img
                    src="/assets/images/Laptops.jpg"
                    alt="Category"
                    className=" w-[150px] h-[150px rounded-full shadow-xl"
                  />
                  <p className="text-sm font-semibold">Laptops</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best Pick of the Week */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Best pick of the week</h2>
            <span className="text-sm text-blue-600 cursor-pointer">
              Show all
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg"
              >
                <img
                  src="/assets/images/Laptops.jpg"
                  alt="Product"
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Oculus Quest 2</p>
                  <p className="text-red-500 text-sm">$800</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
