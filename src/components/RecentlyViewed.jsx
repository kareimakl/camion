import Image from "next/image";

export default function RecentlyViewed() {
  return (
    <div className=" flex-col md:flex hidden gap-4 w-full lg:w-[20%] min-h-full">
      {/* Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm w-full">
        <h3 className="text-lg font-semibold mb-3">Recently viewed</h3>
        <div className="flex gap-3">
          <div className="w-16 h-16 relative">
            <Image
              src="/assets/images/apple-iphone-14-plus-blue-2.jpg"
              alt="HP ZBook Firefly"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-medium leading-5">
              HP ZBook Firefly 14 G8
            </p>
            <p className="text-sm text-gray-400 line-through">$1,900.00</p>
            <p className="text-sm text-red-600 font-semibold">$1,619.00</p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-[505px] rounded-xl shadow-sm overflow-hidden">
        <img
          src="/assets/images/banner-l-headphones-opt.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
