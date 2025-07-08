"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home({ id, service }) {
  return (
    <main className="bg-[#eff5fe] text-[#222] font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="max-w-[1200px] justify-center items-center text-center  mx-auto grid md:grid-cols-2 gap-10 py-12 px-4 md:px-0">
        <div className="justify-center items-center text-start ">
          <h1 className="text-2xl font-bold text-[#2b00ff] mb-4">
            تصميم متاجر إلكترونية في مصر
          </h1>
          <p className="text-gray-700 mt-4 leading-loose">
            في عصر التحول الرقمي، أصبح
            <Link href="#" className="font-bold text-[#2b00ff]">
              تصميم متاجر الكترونية في مصر{" "}
            </Link>
            أصبح تصميم متاجر الكترونية في مصر ضرورة لكل صاحب مشروع أو نشاط تجاري
            يسعى للتوسع وزيادة الأرباح. ومع تزايد الاعتماد على الشراء أونلاين،
            أصبح امتلاك متجر إلكتروني احترافي هو الفرق بين مشروع ناجح وآخر يواجه
            صعوبات في الوصول للجمهور.
          </p>
          <p className="text-gray-700 mt-4 leading-loose">
            في <span className="font-bold text-[#2b00ff]"> تاج هاوس </span>
            نقدم لك خدمات تصميم وتطوير المتاجر الإلكترونية بمواصفات عالمية
            وأسعار مناسبة للسوق المصري، مع التركيز على تحسين تجربة المستخدم ورفع
            معدل التحويل.
          </p>
        </div>
        <div className="rounded-xl md:w-[80%] overflow-hidden shadow-md">
          <Image
            src={`${
              id == 1
                ? "/assets/images/blog-1.avif"
                : id == 2
                ? "/assets/images/blog-2.avif"
                : id == 3
                ? "/assets/images/blog-3.png"
                : id == 4
                ? "/assets/images/blog-4.png"
                : "/assets/images/blog-5.png"
            }`} // replace with your actual image path
            alt="متجر إلكتروني"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </section>

      {/* Why Need Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-6 px-4">
          {/* المحتوى الرئيسي */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              لماذا تحتاج إلى متجر إلكتروني في مصر؟
            </h2>
            <ul className="space-y-3 text-gray-700 leading-loose list-disc list-inside">
              <li>
                <span className="font-bold">الوصول لعدد أكبر من العملاء</span>؛
                الإنترنت لا يعرف حدود جغرافية، ومتجرك سيكون مفتوح 24 ساعة
                يوميًا.
              </li>
              <li>
                <span className="font-bold">
                  زيادة المبيعات وتقليل التكاليف
                </span>{" "}
                البيع أونلاين يقلل من التكاليف التشغيلية مقارنة بالمحلات
                التقليدية.
              </li>
              <li>
                <span className="font-bold">
                  تحليل الأداء واتخاذ قرارات أفضل
                </span>{" "}
                يمكنك معرفة سلوك عملائك بدقة وتحسين خطط التسويق.
              </li>
              <li>
                <span className="font-bold"> مواكبة المنافسة </span>
                أغلب المنافسين يمتلكون متاجر إلكترونية، ووجودك الرقمي أصبح ضرورة
                وليس رفاهية.
              </li>
            </ul>
          </div>

          {/* صندوق محتويات المقال */}
          <aside className="w-full md:w-[320px] bg-[#F3F3F3] border-8  border-[#fff] p-6 rounded-xl shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              محتويات المقال
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                لماذا تحتاج إلى متجر إلكتروني في مصر؟
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                خدمات تصميم المتاجر الإلكترونية في تاج هاوس
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                تصميم متجر إلكتروني متكامل مع تحسين محركات البحث (SEO)...
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                لماذا تختار تاج هاوس لتصميم متجرك الإلكتروني؟
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                كيف يمكنك التواصل مع تاج هاوس؟
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f4f6fa] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            خدمات تصميم المتاجر الإلكترونية في تاج هاوس...
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            في <span className="font-bold "> تاج هاوس </span>
            نفهم جيدًا طبيعة السوق المصري ونوفر حلول مخصصة تناسب جميع أنواع
            المشاريع. وتشمل خدماتنا:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>
              <span className="font-bold text-[#2b00ff]">
                {" "}
                تصميم متجر الكتروني متجاوب{" "}
              </span>
              ؛ متوافق مع جميع الأجهزة (Responsive Design)
            </li>
            <li>إنشاء نظام إدارة محتوى سهل الاستخدام</li>
            <li>ربط المتجر ببوابات الدفع والشحن المحلية والدولية</li>
            <li>تحسين سرعة المتجر وتجربة المستخدم</li>
            <li>
              إعداد المتجر ليكون متوافقًا مع محركات البحث (SEO Optimization)
            </li>
            <li>توفير تقارير وتحليلات الأداء</li>
          </ul>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-[#f4f6fa] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            خدمات تصميم المتاجر الإلكترونية في تاج هاوس...
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            في <span className="font-bold "> تاج هاوس </span>
            نفهم جيدًا طبيعة السوق المصري ونوفر حلول مخصصة تناسب جميع أنواع
            المشاريع. وتشمل خدماتنا:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>
              <span className="font-bold text-[#2b00ff]">
                {" "}
                تصميم متجر الكتروني متجاوب{" "}
              </span>
              ؛ متوافق مع جميع الأجهزة (Responsive Design)
            </li>
            <li>إنشاء نظام إدارة محتوى سهل الاستخدام</li>
            <li>ربط المتجر ببوابات الدفع والشحن المحلية والدولية</li>
            <li>تحسين سرعة المتجر وتجربة المستخدم</li>
            <li>
              إعداد المتجر ليكون متوافقًا مع محركات البحث (SEO Optimization)
            </li>
            <li>توفير تقارير وتحليلات الأداء</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f4f6fa] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">
            كيف يمكنك التواصل مع تاج هاوس؟
          </h2>
          <p>
            إذا كنت تبحث عن
            <span className="font-bold text-[#2b00ff]">
              أفضل شركة تصميم متاجر إلكترونية
            </span>
            فإن تاج هاوس تقدم لك كل ما تحتاجه لإنشاء متجر احترافي يلبي تطلعاتك.
            يمكنك التواصل معهم عبر:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-4">
            <li>
              {" "}
              البريد الإلكتروني:{" "}
              <a className="font-bold text-[#2b00ff]" href="">
                info@taghouse.com{" "}
              </a>
            </li>
            <li>
              الهاتف:{" "}
              <a className="font-bold text-[#2b00ff]" href="">
                01000447398
              </a>
            </li>
            <li>
              أو من خلال نموذج التواصل{" "}
              <span className="font-bold text-[#2b00ff]">هنا </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#f4f6fa] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">اترك تعليقاً</h2>
          <form className="space-y-4">
            <textarea
              placeholder="التعليق"
              className="w-full p-3 border border-gray-300 rounded"
              rows={5}
            />
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="الهاتف"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button className="bg-[#1f3ff5] text-white py-3 px-8 rounded hover:bg-[#172fc4] transition">
              إرسال التعليق
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
