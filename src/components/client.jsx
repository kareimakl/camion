// components/ClientsSection.tsx
"use client";
import CountUp from "react-countup"; // أضف هذا السطر في أعلى الملف

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

const stats = [
  { number: "10+", label: "سنوات الخبرة" },
  { number: "9,000+", label: "عملاء سعداء" },
  { number: "11,000+", label: "مشروعات منتهية" },
  { number: "689+", label: "مشروع تحت التنفيذ" },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-700">عملاؤنا</h2>

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
          loop
          autoplay={{ delay: 1000 }}
        >
          {clientLogos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-32 h-32 mb-4 mx-auto rounded-full p-1 bg-white shadow-lg relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Client ${index}`}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats */}

      <div className="grid max-w-[1000px] m-auto grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
        {stats.map((stat, idx) => {
          // نزيل علامة "+" من الرقم ونحول النص لرقم
          const rawNumber = parseInt(stat.number.replace(/[^\d]/g, ""));

          return (
            <div key={idx}>
              <p className="text-blue-700 md:text-[69px] text-[30px] font-[700] ">
                <CountUp end={rawNumber} duration={2} separator="," />
                <span>+</span>
              </p>
              <p className="text-gray-600 text-xl mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
