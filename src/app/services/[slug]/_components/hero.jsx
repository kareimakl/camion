"use client";
import React from "react";
const stats = [
  { number: "296+", label: "عميل حول العالم" },
  { number: "8+", label: "سنوات الخبرة" },
  { number: "23+", label: "أعضاء الفريق" },
  { number: "312+", label: "مشاريع سنوية" },
];
export default function heroAbout({ id, service }) {
  return (
    <div className=" w-full  relative bg-[#eff4fe] py-2 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className=" absolute h-[600px] !z-0   -translate-y-[162px] left-0 top-0 bg-[#8700ff] md:w-[400px] w-[15px]"></div>
      <div className="md:max-w-[1200px]  flex md:flex-row  flex-col justify-between  ">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col gap-6 md:w-[50%] items-start justify-center p-8  text-right">
          <h2 className="text-xl  text-[#2B00FF] md:text-3xl font-bold">
            {service.title} ...
          </h2>
          <p className="text-gray-700  leading-loose">{service.dce}</p>

          <div className="flex md:gap-4 gap-2 w-full ">
            <button className=" cursor-pointer md:text-[14px] text-[12px] text-center flex justify-center items-center  font-bold md:block bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[35px] px-[15px] py-[5px]  rounded-[3px]  transition  font[600] shadow-sm">

              {`
          سابقة الأعمال     >>  `}
            </button>
            <button className=" cursor-pointer md:text-[14px] text-[12px] text-center flex justify-center items-center  font-bold md:block bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[35px] px-[15px] py-[5px]  rounded-[3px]  transition  font[600] shadow-sm">

              {`طلب عرض سعر    >> `}
            </button>
          </div>
        </div>
        <section className="bg-gradient-to-r relative md:w-[50%] w-[100%] m-auto  md:py-20 md:px-4 flex justify-center items-center">
          <div className=" absolute md:h-[274px] h-[174px] w-[100%] !z-0    md:translate-y-[156px] left-0 top-0 bg-[#2B00FF]  "></div>
          <div className=" md:h-[300px] z-50 border-8 border-[#fff] md:mt-0 mt-3  rounded-2xl flex justify-center items-center m-auto h-[150px] bg-[#FFF]     shadow-xl md:w-[400px] w-[60%] ">
            <img
              src="/assets/logos/logo-tajhouse.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
