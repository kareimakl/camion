"use client";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [Loding, IsLoding] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "http://18.234.158.46:3000/api/buckydrop/categories"
        );
        const data = await res.json();
        if (data.success) {
          setCategories(data.data);
          IsLoding(false);
          // console.log("Categories fetched successfully:", data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return Loding ? (
    <div className="p-6 container gap-4  grid md:grid-cols-10  grid-cols-3 m-auto  min-h-auto ">
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
    </div>
  ) : (
    <div>
      {/* Hot Categories */}
      <div className="w-full container pb-2 mt-10 m-auto">
        <h2 className="font-semibold text-xl mb-2">Shop by categories</h2>
        <div className="flex flex-col h-full gap-10">
          <div className="flex h-full gap-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 9 },
              }}
              dir="rtl"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {categories?.slice(0, 10).map((category, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <img
                      src={category.imageUrl}
                      alt={category.categoryName}
                      className="w-[120px] h-[120px] rounded-full shadow-xl object-cover"
                    />
                    <p className="text-sm font-semibold">
                      {category.categoryName}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex h-full gap-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 9 },
              }}
              modules={[Autoplay]}
            >
              {categories?.slice(10, 30).map((category, i) => (
                <SwiperSlide key={i + "b"}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <img
                      src={category.imageUrl}
                      alt={category.categoryName}
                      className="w-[120px] h-[120px] rounded-full shadow-xl object-cover"
                    />
                    <p className="text-sm font-semibold">
                      {category.categoryName}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
