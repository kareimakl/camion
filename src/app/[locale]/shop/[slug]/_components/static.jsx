import React from "react";

function Static() {
  return (
    <div>
      <section className="flex flex-col gap-4">
        {/* <div className="lg:col-span-1 border border-[#0000001f] p-6 rounded-xl space-y-6 font-sans text-sm text-gray-700 shadow-sm">
          <h2 className="font-semibold text-lg text-black">
            Shipping & Delivery
          </h2>


          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span className="text-rose-500 text-xl">🚚</span>
              <div>
                <p className="font-medium text-black">Courier delivery</p>
                <p className="text-gray-500 text-sm">
                  Our courier will deliver to the specified address
                </p>
              </div>
            </div>
            <div className="text-right text-sm">
              <p className="text-gray-500">2–3 Days</p>
              <p className="font-semibold text-black">From $20</p>
            </div>
          </div>


          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/DHL_Logo.svg/120px-DHL_Logo.svg.png"
                alt="DHL"
                className="w-6 h-6 object-contain"
              />
              <div>
                <p className="font-medium text-black">DHL Courier delivery</p>
                <p className="text-gray-500 text-sm">
                  DHL courier will deliver to the specified address
                </p>
              </div>
            </div>
            <div className="text-right text-sm">
              <p className="text-gray-500">
                1–3
                <br />
                Days
              </p>
              <p className="font-semibold text-black">From $40</p>
            </div>
          </div>

          <hr className="my-2 border-gray-200" />


          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-rose-500 text-lg">🛡️</span>
              <p className="text-black font-medium">Warranty 1 year</p>
            </div>
            <a href="#" className="text-blue-500 text-sm">
              More details
            </a>
          </div>


          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-rose-500 text-lg">🔄</span>
              <p className="text-black font-medium">Free 30-Day returns</p>
            </div>
            <a href="#" className="text-blue-500 text-sm">
              More details
            </a>
          </div>
        </div> */}
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
