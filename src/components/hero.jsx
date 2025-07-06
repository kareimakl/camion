import React from "react";

export default function hero() {
  return (
    <div className=" md:w-[ 1200px] m-auto mt-8 w-[95%] flex flex-col gap-1 justify-center items-center text-center">
      <h1 className="text-[#0000ff] md:text-[60px] text-[26px] font-[700]">
        تاج هاوس{" "}
        <span className="text-[#000] md:text-[60px] text-[26px] ">
          {" "}
          لخدمات البرمجة
        </span>
      </h1>
      <h2 className="md:text-[20px]  text-[16px] mb-6  text-[#50595f]">
        شركة رائدة في صناعة المواقع الإلكترونة، المتاجر الإلكترونية والأنظمة
        البرمجية
      </h2>
      <div className="flex md:gap-10 gap-2 w-full   justify-center items-center m-auto">
        <button className="cursor-pointer font-bold md:block text-[16px] bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[25px] py-[6px] rounded-[3px]  transition   font[600] shadow-sm">
          {`
          سابقة أعمالنا >>
`}
        </button>
        <button className=" cursor-pointer  font-bold md:block bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[25px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm">
          {`
طلب عرض سعر >>
  
`}
        </button>
      </div>
    </div>
  );
}
