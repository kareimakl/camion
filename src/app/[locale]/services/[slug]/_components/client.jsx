// components/ClientsSection.tsx
"use client";
import CountUp from "react-countup";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const clientLogos = [
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
];

export default function ClientsSection() {
  return (
    <div className="bg-[#f7f7f7]">
      <section className=" md:py-16 py-8 px-4 text-right m-auto max-w-[1200px]">
        <h2 className="text-sm font-bold mb-10 "> عملاؤنا...</h2>
        <p className="text-2xl font-bold  mb-10 space-x-1">
          {` عملاء شرفنا     `}
          <span className="text-[#0000ff]">بالعمل معهم ...</span>
        </p>

        <div className="max-w-[1200px]  mx-auto">
          {/* Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {clientLogos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="md:w-44 md:h-44  w-26 h-26 mb-4 mx-auto rounded-full p-1   relative overflow-hidden">
                  <Image
                    src={src}
                    alt={`Client ${index}`}
                    width={200}
                    height={200}
                    className="object-contain  w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
