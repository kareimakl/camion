import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import React from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const items = [
    {
      id: 1,
      name: "Name of the writer's product here",
      quantity: 2,
      price: 11.7,
      image: "/assets/images/Frame 1171280020.svg",
    },
    {
      id: 2,
      name: "Name of the writer's product here",
      quantity: 2,
      price: 11.7,
      image: "/assets/images/Frame 1171280020.svg",
    },
    {
      id: 3,
      name: "Name of the writer's product here",
      quantity: 2,
      price: 11.7,
      image: "/assets/images/Frame 1171280020.svg",
    },
    {
      id: 4,
      name: "Name of the writer's product here",
      quantity: 2,
      price: 11.7,
      image: "/assets/images/Frame 1171280020.svg",
    },
    {
      id: 5,
      name: "Name of the writer's product here",
      quantity: 2,
      price: 11.7,
      image: "/assets/images/Frame 1171280020.svg",
    },
  ];
  return (
    <div>
      <Header />
      <main className="w-[95%] md:w-[80%] mx-auto mt-10">
        <div className=" rounded-lg p-2 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-gray-700 font-semibold">المنتجات</h2>
              <span className="text-[#B92123] text-sm cursor-pointer">
                تعديل الطلب
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto flex-nowrap scroll-smooth snap-x snap-mandatory">
              {items?.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 bg-white rounded-lg p-2 flex items-center gap-3 w-[250px] snap-start"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}unoptimized
                    height={70}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-800 text-xs font-medium">
                      {item?.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      الكمية: {item?.quantity}
                    </p>
                    <p className="text-[#B92123] text-sm font-semibold mt-1">
                      ${item?.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-gray-700 font-semibold">تفاصيل العنوان</h2>
              <span className="text-[#B92123] text-sm cursor-pointer">
                تعديل العنوان
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              19 الشيخ احمد الصاوي متفرع من مكرم عبيد المنطقة السادسة
              <br />
              مدينة نصر، القاهرة
            </p>
          </div>

          <div>
            <h2 className="text-gray-700 font-semibold mb-2">كود الخصم</h2>
            <div className="flex items-center gap-3">
              <button className="text-[#B92123] border border-[#B92123] rounded-lg py-2 px-6 font-semibold">
                تأكيد
              </button>
              <input
                type="text"
                placeholder="كود الخصم"
                className="flex-1 border rounded-lg py-2 px-4 text-gray-700 outline-none"
              />
            </div>
          </div>

          <div>
            <h2 className="text-gray-700 font-semibold mb-2">الدفع بواسطة</h2>
            <div className="space-y-3">
              <button className="w-full border border-[#B92123] bg-red-50 rounded-lg py-3 text-right px-4 flex justify-between items-center">
                <span>بطاقة ائتمان</span>
                <span className="text-2xl">
                  <img src="/assets/icons/Frame 75.svg" alt="" />
                </span>
              </button>
              <button className="w-full border rounded-lg py-3 text-right px-4 flex justify-between items-center">
                <span>STC PAY</span>
                <span className="text-2xl">
                  <img src="/assets/icons/image.svg" alt="" />
                </span>
              </button>
              <button className="w-full border rounded-lg py-3 text-right px-4 flex justify-between items-center">
                <span>نقدي</span>
                <span className="text-2xl">
                  <img src="/assets/icons/Rectangle 17466.svg" alt="" />
                </span>
              </button>
            </div>
          </div>

          <button className="w-full bg-[#B92123] text-white font-semibold py-3 rounded-lg mt-5 hover:bg-red-700 transition">
            تأكيد الدفع
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
