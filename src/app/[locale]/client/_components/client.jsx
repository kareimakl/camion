"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const clientLogos = [
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
  "/assets/images/client-7.avif",
  "/assets/images/client-8.avif",
  "/assets/images/client-9.avif",
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
  "/assets/images/client-7.avif",
  "/assets/images/client-8.avif",
  "/assets/images/client-9.avif",
  "/assets/images/client-1.avif",
  "/assets/images/client-2.avif",
  "/assets/images/client-3.avif",
  "/assets/images/client-4.avif",
  "/assets/images/client-5.avif",
  "/assets/images/client-6.avif",
];
export default function Client() {
  const t = useTranslations("HomePage");

  return (
    <div className=" w-full  relative bg-[#fff] py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <h2 className="text-[#2B00FF] mb-8 text-3xl font-bold">
        {t("client.0")}
      </h2>
      <div className="max-w-[1200px] grid md:grid-cols-8 grid-cols-4  mx-auto">
        {clientLogos.map((src, index) => (
          <div
            key={index}
            className="md:w-36 md:h-36  w-26 h-26 mb-4 mx-auto rounded-full p-1   relative overflow-hidden"
          >
            <Image
              src={src}
              alt={`Client ${index}`}
              width={200}
              height={200}
              className="object-contain  w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
