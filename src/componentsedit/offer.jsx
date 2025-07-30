import React from "react";
import ComOffer from "./ComOffer";

function Offer() {
  return (
    <main className=" mx-auto mt-10 container flex flex-col lg:flex-row gap-4 ">
      {/* Left Section - 80% */}
      <div className="w-full lg:w-[100%]">
        <ComOffer />
      </div>
    </main>
  );
}

export default Offer;
