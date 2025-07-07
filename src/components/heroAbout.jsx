"use client";
import React from "react";
import CountUp from "react-countup";
const stats = [
  { number: "296+", label: "عميل حول العالم" },
  { number: "8+", label: "سنوات الخبرة" },
  { number: "23+", label: "أعضاء الفريق" },
  { number: "312+", label: "مشاريع سنوية" },
];
export default function heroAbout() {
  return (
    <div className=" w-full  relative bg-[#fff] py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className=" absolute h-[650px] !z-0   -translate-y-[156px] left-0 top-0 bg-[#8700ff] md:w-[400px] w-[15px]"></div>
      <div className="md:max-w-[1200px] flex md:flex-row  flex-col justify-between  ">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col md:w-[50%] items-start justify-start p-8  text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            عن<span className="text-[#2B00FF]"> تاج هاوس </span>
            ...
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            تأسست <span className="font-bold">تاج هاوس</span> تاج هاوس عام 2022،
            وهي شركة متخصصة في تقديم حلول برمجية متكاملة، حيث تجمع بين الإبداع
            والتكنولوجيا لتحقيق أفضل النتائج لعملائها. يضم فريقنا نخبة من
            الخبراء الذين يتمتعون بخبرة ممتدة منذ عام 2016 في مجالات التصميم
            الإبداعي، وتطوير المواقع الإلكترونية، وتحسين محركات البحث (SEO)،
            وإدارة وسائل التواصل الاجتماعي، والإعلانات المدفوعة. نؤمن بأن النجاح
            في العصر الرقمي يعتمد على استراتيجيات مبتكرة ومبنية على البيانات،
            ولذلك نحرص على تقديم حلول مخصصة تلبي احتياجات كل عميل بدقة وفعالية.
          </p>
        </div>

        <section className="bg-gradient-to-r relative md:w-[50%] w-[95%] m-auto  md:py-20 md:px-4 flex justify-center items-center">
          <div className=" absolute z-0 w-[300px] bottom-0  h-[200px] "></div>
          <div className=" md:h-[350px] rounded-2xl flex justify-center items-center m-auto h-[100px] bg-[#FFF]     shadow-lg md:w-[400px] w-[200px] ">
            <img src="/assets/logos/logo-tajhouse.png" alt="" className="w-full object-contain" />
          </div>
        </section>
      </div>
      {/* Side Text Section (Badge) */}
      <div className="flex gap-2 md:flex-row-reverse flex-col justify-between m-auto max-w-[1200px]">
        <div className="flex flex-col bg-white md:h-[240px] shadow-xl rounded-2xl m-auto md:w-[50%] w-[95%] items-start justify-start py-4 px-4  text-right">
          <h2 className="text-xl md:text-xl font-bold mb-2">

            رؤية<span className="text-[#2B00FF]"> تاج هاوس </span>
            ...
          </h2>
          <p className="text-gray-700 md:text-sm text-xs md:mt-4 leading-loose">

            أن نكون الشريك الرقمي الأول للشركات والعلامات التجارية، من خلال
            تقديم حلول برمجية متكاملة تساعد على تحقيق النمو المستدام، وتعزز من
            حضور العملاء الرقمي، مما يمكنهم من تحقيق أهدافهم بسهولة وكفاءة في
            عالم متسارع التطور.
          </p>
        </div>
        <div className="flex flex-col bg-white md:h-[240px] shadow-xl rounded-2xl m-auto md:w-[50%] w-[95%] items-start justify-start py-4 px-4  text-right">
          <h2 className="text-xl md:text-xl font-bold mb-2">
            مهمة<span className="text-[#2B00FF]"> تاج هاوس </span>
            ...
          </h2>
          <p className="text-gray-700 md:text-sm text-xs md:mt-4 leading-loose">
            نلتزم في <span className="font-bold">تاج هاوس</span> تاج هاوس بتمكين
            العلامات التجارية من تحقيق النجاح الفضاء الرقمي، من خلال تقديم خدمات
            برمجية متقدمة تعتمد على أحدث التقنيات والاستراتيجيات الفعالة. نسعى
            إلى تحويل الأفكار الإبداعية إلى واقع ملموس، نساعد عملاءنا على تحقيق
            أقصى استفادة من الفرص المتاحة في الأسواق الرقمية، وتعزيز تفاعلهم مع
            جمهورهم المستهدف بطريقة فريدة وفعالة.
          </p>
        </div>
      </div>

      <div className="flex    gap-6 flex-col justify-center items-center md:mt-12 mt-2 rounded-2xl m-auto md:w-[50%]  py-4 px-4  text-center">
        <p className="text-sm">لماذا تختارنا؟</p>
        <h2 className="text-2xl md:text-xl font-bold mb-2">
          نقدم في<span className="text-[#2B00FF]"> تاج هاوس </span>
          حلول برمجية مبتكرة
        </h2>
        <p className="text-gray-700  leading-loose">
          نحن ملتزمون بمساعدتك على تحقيق أهدافك الرقمية وبناء حضور قوي في السوق.
          يتميز فريقنا بخبرة واسعة منذ عام 2016، مما يتيح لنا تقديم حلول مبتكرة
        </p>
      </div>

      {/* Stats */}

      <div className="grid max-w-[1200px] justify-between  m-auto grid-cols-2 md:grid-cols-4 md:gap-8 md:mt-16 mt-8 text-center">
        {stats.map((stat, idx) => {
          const rawNumber = parseInt(stat.number.replace(/[^\d]/g, ""));
          return (
            <div
              key={idx}
              className="flex  justify-center items-center text-center m-auto gap-2"
            >
              <div className="flex justify-between m-auto ">
                <img
                  src="/assets/logos/logo-tajhouse.png"
                  className=" w-44 "
                  alt=""
                />
              </div>
              <div>
                <p className="text-black text-[30px] font-[700] ">
                  <CountUp end={rawNumber} duration={2} separator="," />
                  <span>+</span>
                </p>
                <p className="text-black text-xs font-bold ">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
