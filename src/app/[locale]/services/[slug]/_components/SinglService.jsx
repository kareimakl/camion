"use client";
import Image from "next/image";
export default function FeaturesGrid({ id, service }) {
  return (
    <main className="bg-[#eff5fe]  text-[#222] ">
      <div className="max-w-[1200px] m-auto text-center flex flex-col justify-center items-center ">
        <div>
          <p className="text-2xl font-bold space-x-1">
            {` مشتملات خدمة إنشاء وتطوير المواقع الإلكترونية...  `}
          </p>

          <h2 className=" mt-4 md:text-[23px] text-center text-[20px] font-[700]">
            {` قدم لك موقع إلكتروني `}
            <span className="text-[#0000ff] mt-4 md:text-[23px] text-[20px]">
              {`     مع خدمات متكاملة لمساعدتك  `}
            </span>
            على تحقيق أهدافك الرقمية...
          </h2>
        </div>
        <section className=" py-12 w-full">
          <div className="grid grid-cols-1  sm:grid-cols-2 m-auto md:grid-cols-3 md:gap-8 gap-2">
            {service?.features?.map((feature, index) => (
              <div
                key={index}
                className="flex bg-white border h-[150px] justify-between    md:w-[100%]  w-[80%]  m-auto border-gray-200  flex-col items-center text-center p-4  rounded-lg hover:shadow-md transition"
              >
                <Image
                  src={feature?.icon}
                  alt={feature?.title}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature?.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
