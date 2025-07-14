
import Link from "next/link";
import React from "react";

export default function services({servicesAll}) {
  return (
    <div className=" w-full bg-[#eff5fe]   flex flex-col gap-1 justify-center items-center text-center">
      <h2 className=" mt-4 md:text-[33px] text-[20px] font-[700]">
        خدمات
        <span className="text-[#0000ff]"> تاج هاوس </span>
      </h2>
      <p className="md:text-[18px] md:w-full w-[80%]  text-[15px] mb-2  text-[#50595f]">
        منذ عام 2016 وحتى الآن نحن ملتزمون بتقديم خدمات احترافية متكاملة تلبي
        احتياجات عملائنا
      </p>

      <section className="py-4 px-4 ">
        <div className="max-w-[1200px]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
          {servicesAll.map((item) => (
            <div
              key={item?.id}
              className="border relative bg-white cursor-pointer border-gray-200 rounded-lg p-5 md:text-right text-center hover:shadow-md transition-all duration-300"
            >
              <Link
                className="absolute w-full h-full z-10 "
                href={`/services/${item?.id}-${encodeURIComponent(
                  item?.title.replace(/\s+/g, "-")
                )}`}
              ></Link>
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-blue-700 text-md font-bold mb-2">
                {item?.title}
              </h3>
              <p className="text-sm font-semibold text-[#50595f] leading-loose line-clamp-3 ">
                {item?.dce}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
