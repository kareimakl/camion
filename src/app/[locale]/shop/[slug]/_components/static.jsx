import React from "react";

function Static() {
  return (
    <div>
      <section className="flex flex-col gap-4">
        <div className="relative cursor-grab w-full h-[210px]">
          <img
            src="/assets/images/banner-s-mb-cover-bf.jpg"
            alt="Samsung Galaxy Flip5"
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute inset-0  flex flex-col pt-10 justify-start items-start px-10 text-left text-white rounded-xl">
            <p className="text-md mb-2 text-[#FFF]">Unbeatable offers</p>
            <h2 className="text-2xl font-bold mb-4 text-[#FFF]">
              Black Friday <br /> Blowout!
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Static;
