"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function SliderHero() {
  return (
    <div className="w-full relative main-slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {[...Array(1)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative cursor-grab w-full h-[510px]">
              <img
                src="/assets/images/mplc-slider-slide-2-opt.jpg"
                alt="Samsung Galaxy Flip5"
                className="w-full h-full rounded-xl object-cover"
              />
              <div className="absolute inset-0  flex flex-col pt-10 justify-start items-start px-10 text-left text-white rounded-xl">
                <p className="text-md mb-2 text-[#84a3b5]">
                  Nordic inspiration for decor
                </p>
                <h2 className="text-4xl font-bold mb-4 text-[#84a3b5]">
                  Inborn Nordic <br /> Chair Collection
                </h2>
                <button className="bg-white  cursor-pointer  text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {[...Array(1)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative cursor-grab w-full h-[510px]">
              <img
                src="/assets/images/mplc-slider-slide-1-opt.jpg-1.webp"
                alt="Samsung Galaxy Flip5"
                className="w-full h-full rounded-xl object-cover"
              />
              <div className="absolute inset-0  flex flex-col pt-10 justify-start items-start px-10 text-left text-white rounded-xl">
                <p className="text-md mb-2 text-[#ad7d61]">
                  Fresh design in an elegant case
                </p>
                <h2 className="text-4xl font-bold mb-4 text-[#ad7d61]">
                  Samsung Galaxy Flip5
                </h2>
                <button className="bg-white  cursor-pointer  text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderHero;
