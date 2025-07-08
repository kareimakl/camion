import React from "react";

export default function Join() {
  return (
    <div className=" py-12 bg-[#e7e7e7] m-auto mt-8 w-[100%] flex flex-col gap-1 justify-center items-center text-center">
      <h1 className="text-[#0000ff] md:text-[30px] text-[20px] font-[700]">
        <span className="text-[#000]  md:text-[30px] text-[20px] ">
          {` أضف منصتك   إلى `}
        </span>
        {" سابقة أعمالنا "}
      </h1>
      <h2 className="md:text-[15px] md:w-[50%]  text-[12px] mb-6  text-[#50595f]">
        في تاج هاوس، نحن أكثر من مجرد مزود خدمات، نحن شريكك الرقمي الذي يساعدك
        على تحقيق أهدافك وتنمية أعمالك من خلال حلول مبتكرة وتقنيات حديثة.
      </h2>
      <div className="flex md:gap-10 gap-2 w-full   justify-center items-center m-auto">
        <button className="cursor-pointer font-bold md:block md:text-[16px] text-[12px] bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[20px] py-[6px] rounded-[3px]  transition   font[600] shadow-sm">
          {`
        خدماتنا >>
`}
        </button>
        <button className=" cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm">
          {`طلب عرض سعر >>
`}
        </button>
      </div>
    </div>
  );
}
