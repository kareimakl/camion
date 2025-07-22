"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Categories() {
  return (
    <div>
      {/* Hot Categories */}
      <div className="w-full container pb-2 mt-10 m-auto">
        <h2 className="font-semibold text-xl mb-2">Shop by categories</h2>
        <div className="flex h-full gap-2">
          {/* Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 9 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {[...Array(20)].map((_, i) => (
              <SwiperSlide key={i}>
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <img
                    src="/assets/images/Laptops.jpg"
                    alt="Category"
                    className=" w-[120px] h-[120px] rounded-full shadow-xl"
                  />
                  <p className="text-sm font-semibold">Laptops</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
