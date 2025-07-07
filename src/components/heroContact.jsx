import React from "react";
import Image from "next/image";

export default function heroContact() {
  return (
    <div className=" w-full  relative bg-[#f5f9ff] py-16 m-auto  flex flex-col gap-1 justify-center items-center text-start">
      <div className=" absolute h-[650px] !z-0   -translate-y-[156px] left-0 top-0 bg-[#8700ff] md:w-[400px] w-[15px]"></div>
      <div className="md:max-w-[1200px] flex md:flex-row  flex-col justify-between  ">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col md:w-[50%] items-start justify-start p-8  text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            تواصل مع<span className="text-blue-700"> تاج هاوس </span>
            ...
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            في <span className="font-bold">تاج هاوس</span>، نحن أكثر من مجرد
            مزود خدمات، نحن نسعى دائمًا لتقديم أفضل الحلول البرمجية التي تلبي
            احتياجاتك. سواء كنت بحاجة إلى تصميم موقع إلكتروني احترافي، تحسين
            ظهورك على محركات البحث، أو إدارة حملات تسويقية فعالة، فريقنا جاهز
            لمساعدتك.
          </p>
        </div>

        <section className="bg-gradient-to-r relative md:w-[50%]  py-20 md:px-4 flex justify-center items-center">
          <div className=" absolute z-0 w-[300px] bottom-0  h-[200px] "></div>
          <div className=" md:h-[350px] flex justify-center items-center m-auto h-[250px] bg-[#2B00FF]    shadow-lg md:w-[400px] w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27878.88699169501!2d31.3093285743164!3d30.054505200000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f0f755c8795%3A0x7e12f83a0696cfa5!2zxqzOm0ogRnVybml0dXJlIC0g2YXYudix2LYg2KrYp9isINmE2YTYo9ir2KfYqyDYp9mE2YXZhtiy2YTZiiAtINmF2K_ZitmG2Kkg2YbYtdix!5e1!3m2!1sen!2sus!4v1751886309195!5m2!1sen!2sus"
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl md:w-[100%] w-[90%]  brightness-100 contrast-100 saturate-0 blur-none hue-rotate-0 hover:filter-none transition duration-500 md:h-[350px] h-[250px] border-8 border-white md:translate-x-16 filter  -translate-y-16"
            ></iframe>
          </div>
        </section>
      </div>

      <div className="bg-[#f6f8fc] max-w-[1200px] p-6 md:p-10">
        <div className="bg-white   shadow-md w-full rounded-lg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-right">
          <a
            href="tel:01000447398"
            className="flex min-w-[300px] items-center gap-4 p-6 justify-between"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">رقم الهاتف</h3>
              <p className="text-sm text-gray-700">01000447398</p>
            </div>
            <Image
              src="/assets/logos/logo-tajhouse.png"
              alt="Phone"
              width={60}
              height={60}
            />
          </a>

          <a
            href="mailto:info@tajhouse.com"
            className="flex items-center gap-4 p-6 justify-between"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">بريد إلكتروني</h3>
              <div className="text-sm text-gray-700">info@tajhouse.com</div>
            </div>
            <Image
              src="/assets/logos/logo-tajhouse.png"
              alt="Email"
              width={60}
              height={60}
            />
          </a>

          <a
            href="https://www.google.com/maps?ll=30.054505,31.347437&z=13&t=h&hl=en&gl=US&mapclient=embed&cid=9084596326462050213"
            className="flex items-center gap-4 p-6 justify-between"
          >
            <div className=" flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">عنوان</h3>
              <p className="text-sm text-gray-700 leading-snug">
                9 مصطفى النحاس،
                <br />
                مدينة نصر.
              </p>
            </div>
            <Image
              src="/assets/logos/logo-tajhouse.png"
              alt="Address"
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
