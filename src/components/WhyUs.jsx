import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="bg-white  py-20 px-6 text-right">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-600 mb-2">لماذا تختارنا؟</p>
          <h2 className="text-3xl font-bold leading-snug">
            نقدم لكم
            <span className="text-[#0000ff]"> حلول برمجية وتسويقية  </span>
            <br /> مبتكرة...
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            نحن ملتزمون بمساعدتك على تحقيق أهدافك الرقمية وبناء حضور قوي في
            السوق. يتميز فريقنا بخبرة واسعة منذ عام 2016، مما يتيح لنا تقديم
            حلول مبتكرة.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="md:w-[350px] md:h-[350px] w-[250px] h-[250px]  bg-[#D5A3C9] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/assets/images/whyus.webp"
              alt="bg object"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-12 left-6 md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-[#FFA500] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/assets/images/why.webp"
              alt="megaphone"
              width={200}
              height={200}
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
