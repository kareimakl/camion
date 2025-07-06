import Image from "next/image";
import React from "react";
const servicesAll = [
  {
    id: 1,
    title: "تصميم المواقع الإلكترونية",
    desc: "نقدّم لك خدمة تصميم مواقع إلكترونية احترافية تساعدك على تعزيز وجودك الرقمي، وجذب عملاء جدد، وتحقيق مبيعات أعلى.",
    img: "/assets/services/website.png",
  },
  {
    id: 2,
    title: "تصميم المتاجر الإلكترونية",
    desc: "نساعدك نطلق متجر إلكتروني احترافي مصمم خصيصًا لاحتياجات نشاطك التجاري، حتى تحقق مبيعات منتجاتك بسهولة، وتصل لعدد أكبر من العملاء أونلاين.",
    img: "/assets/services/store.png",
  },
  {
    id: 3,
    title: "برمجة تطبيقات الهاتف",
    desc: "نقدّم خدمة برمجة تطبيقات الهاتف (iOS وAndroid) مصممة خصيصًا لاحتياجات مشروعك، لتصل لعملاءك بسهولة وتقدّم تجربة استخدام سلسة وفعالة.",
    img: "/assets/services/mobile.png",
  },
  {
    id: 4,
    title: "استضافة المواقع الإلكترونية",
    desc: "نقدّم لك خدمة استضافة مواقع إلكترونية موثوقة، سريعة، وآمنة، تضمن لك تشغيل موقعك بأعلى كفاءة وبدون انقطاع.",
    img: "/assets/services/hosting.png",
  },
  {
    id: 5,
    title: "برمجة مواقع الويب",
    desc: "نقدّم لك خدمة برمجة مواقع ويب احترافية مصممة خصيصًا حسب احتياجات نشاطك، باستخدام أحدث تقنيات تطوير الويب لضمان أداء قوي، آمان عالي، وتجربة مستخدم سلسة.",
    img: "/assets/services/webdev.png",
  },
  {
    id: 6,
    title: "أنظمة CRM",
    desc: "نطوّر لك أنظمة CRM احترافية تساعدك على متابعة عملاءك، تنظيم بياناتهم، وزيادة من فرص البيع والمتابعة.",
    img: "/assets/services/crm.png",
  },
  {
    id: 7,
    title: "الدعم الفني",
    desc: "نقدّم خدمة الدعم الفني المتكامل لجميع خدماتنا الرقمية، من المواقع والتطبيقات وحتى الأنظمة الداخلية. ",
    img: "/assets/services/crm.png",
  },
  {
    id: 8,
    title: "أنظمة Oodo",
    desc: "بنقدّم خدمة تطوير وتخصيص أنظمة Odoo ERP لمساعدتك في إدارة جميع جوانب شركتك من مكان واحد.",
    img: "/assets/services/crm.png",
  },
  {
    id: 9,
    title: "أنظمة ERP",
    desc: "نقدّم لك خدمة تطوير أنظمة ERP احترافية تساعدك على إدارة جميع أقسام شركتك من مكان واحد، بداية من الموارد البشرية والمحاسبة والمخزون، حتى المبيعات وخدمة العملاء.",
    img: "/assets/services/crm.png",
  },
];
export default function services() {
  return (
    <div className=" w-full bg-[#eff5fe] mt-16  flex flex-col gap-1 justify-center items-center text-center">
      <h2 className="text-[#0000ff] mt-4 md:text-[33px] text-[20px] font-[700]">
        خدماتنا
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
              <h3 className="text-blue-700 text-md font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-[#50595f] leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
