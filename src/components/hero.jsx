"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Lottie from "lottie-react";
export default function hero() {
  const t = useTranslations("HomePage");
  const heroTexts = t.raw("hero");

  return (
    <div className=" md:w-[ 1200px] m-auto mt-8 w-[95%] flex flex-col gap-1 justify-center items-center text-center">
      <h1 className="text-[#0000ff] flex md:gap-2  gap-1 md:text-[60px] text-[20px] font-[700]">
        {heroTexts[0]}
        <span className="text-[#000] md:text-[60px] text-[20px]  ">
          {heroTexts[1]}
        </span>
      </h1>
      <h2 className="md:text-[20px]  text-[16px] mb-6  text-[#50595f]">
        {heroTexts[2]}
      </h2>
      <div className="flex md:gap-10 gap-2 w-full   justify-center items-center m-auto">
        <Link
          href="/projects"
          className="cursor-pointer font-bold md:block md:text-[16px] text-[12px] bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[20px] py-[6px] rounded-[3px]  transition   font[600] shadow-sm"
        >
          {heroTexts[3]}
        </Link>
        <Link
          href="/contact"
          className=" cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm"
        >
          {heroTexts[4]}
        </Link>
      </div>
    </div>
  );
}
