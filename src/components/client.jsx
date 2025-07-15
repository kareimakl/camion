"use client";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useTranslations } from "next-intl";
const clientLogos = [
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
];

export default function ClientsSection() {
  const t = useTranslations("HomePage");
  const stats = [
    { number: "10+", label: t("client.1") },
    { number: "9,000+", label: t("client.2") },
    { number: "11,000+", label: t("client.3") },
    { number: "689+", label: t("client.4") },
  ];

  return (
    <section className="bg-white md:py-16 py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10  text-[#2B00FF]">
        {t("client.0")}
      </h2>

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

      {/* Stats */}

      <div className="grid max-w-[1200px] m-auto grid-cols-2 md:grid-cols-4 gap-8 md:mt-16 mt-8 text-center">
        {stats.map((stat, idx) => {
          const rawNumber = parseInt(stat.number.replace(/[^\d]/g, ""));

          return (
            <div key={idx}>
              <p className="text-[#2B00FF] md:text-[69px] text-[30px] font-[700] ">
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
