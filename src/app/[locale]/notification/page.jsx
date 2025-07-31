import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import Image from "next/image";

export default function Notification() {
  const orders = Array(5).fill({
    status: "تم استلام طلبك",
    subStatus: "طلبك قيد التنفيذ",
    time: "11 س",
    logo: "/favicon.ico",
  });

  return (
    <main>
      <Header />
      <div className="min-h-auto  py-10 px-5 flex justify-center">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-5 space-y-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex justify-between cursor-pointer  items-center border-b border-[#F0F0F0] last:border-none pb-3"
            >
              <span className="text-[#B92123] text-2xl">
                <img src="/assets/icons/Icon.svg" alt="" className="w-8 h-8" />
              </span>
              <div className="flex-1 text-right pr-4">
                <p className="text-[#6C6C6C] font-semibold text-lg">
                  {order.status}
                </p>
                <p className="text-[#000] text-sm">{order.subStatus}</p>
                <p className="text-[#6C6C6C] text-xs mt-1">{order.time}</p>
              </div>

              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src={order.logo}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
