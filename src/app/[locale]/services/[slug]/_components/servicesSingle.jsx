
import React from "react";
const servicesAll = [
  {
    id: 1,
    title: "مناقشة مشروعك",
    desc: "أثناء هذه المرحلة يتم مناقشة مشروعك، والأهداف المراد تحقيقها من خلال إنشاء موقعك الإلكتروني.",
    img: "/assets/logos/logo-tajhouse.png",
  },
  {
    id: 2,
    title: "تحليل المنافسين",
    desc: "في هذه المرحلة يتم قياس نقاط القوة والضعف للمنافسين الحاليين والمحتملين للاستفادة منها أو تفادي وجودها في موقعك الإلكتروني.",
    img: "/assets/logos/logo-tajhouse.png",
  },
  {
    id: 3,
    title: "التصميم المبدئي",
    desc: "بمجرد فهم المشروع الخاص بك، يتم البدء في التصميم بناءً على المعلومات المقدّمة، ويتم عمل التصميم وإرساله لفريق المبرمجين.",
    img: "/assets/logos/logo-tajhouse.png",
  },
  {
    id: 4,
    title: "التنفيذ",
    desc: "بعد تحديد التصميم النهائي يتم البدء في إنشاء الموقع، ثم عملية إنشاء وتثبيت نظام إدارة المحتوى وإضافة أي ميزات ودمج التصميم النهائي، لبدء عملية الإحياء.",
    img: "/assets/logos/logo-tajhouse.png",
  },
  {
    id: 5,
    title: "المراجعة والتعديلات",
    desc: "بعد تنفيذ الموقع الإلكتروني يتم تحليل الموقع تحليل دقيق وتحديد مواضع التعديل والعمل عليها.",
    img: "/assets/logos/logo-tajhouse.png",
  },
  {
    id: 6,
    title: "تشغيل واختبار",
    desc: "موقعك جاهز للانطلاق! في هذه الخطوة يتم تشغيل الموقع مباشرة للزوار، ويتم توفير تدريب وشروحات تساعدك على التعرف على طرق استخدام نظام إدارة المحتوى.",
    img: "/assets/logos/logo-tajhouse.png",
  },
];

export default function services({id,service}) {
  return (
    <div className=" w-full bg-[#eff5fe] flex flex-col gap-1 justify-center items-center text-center">
      <p className="text-2xl font-bold space-x-1">{` مراحل العمل...    `}</p>

      <h2 className=" mt-4 md:text-[33px] text-[20px] font-[700]">
        {` إليكم مراحل عملنا `}
        <span className="text-[#0000ff] mt-4 md:text-[33px] text-[20px]">
          {`   إنشاء وتطوير موقع إلكتروني `}
        </span>
        متكامل...
      </h2>
      <p className="md:text-[18px] md:w-full w-[80%]  text-[15px] mb-2  text-[#50595f]">
        نقدم خدمات استثنائية مثل تطوير المواقع والمتاجر والتطبيقات والأنظمة
        البرمجية
      </p>

      <section className="py-4 px-4 ">
        <div className="max-w-[1200px]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
          {servicesAll.map((item) => (
            <div
              key={item.id}
              className="border bg-white cursor-pointer border-gray-200 rounded-lg p-5 md:text-right text-center hover:shadow-md transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-blue-700 text-md  text-center font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-center text-[#50595f] leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
