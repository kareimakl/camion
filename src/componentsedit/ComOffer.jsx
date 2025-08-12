"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { API_ENDPOINTS } from "../app/[locale]/api/api";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "@/i18n/navigation";

function ComOffer() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const savedToken = Cookies.get("token");
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.OFFERS}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${savedToken}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        if (data) {
          setStories(data);
          console.log("Story fetched successfully:", data);
        }
      } catch (error) {
        console.error("Error fetching Story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[510px] mt-4 bg-gray-300 rounded-xl animate-pulse" />
    );
  }
  return (
    <div className="w-full relative main-slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {stories?.map((story) => (
          <SwiperSlide key={story?.id}>
            <div className="relative cursor-grab w-full h-[510px]">
              <img
                src={story?.imageUrl}
                alt={story?.title}
                className="w-full h-full rounded-xl object-cover"
              />
              {/* Discount Badge */}
              {story?.discount && (
                <div className="absolute top-6 -left-12 w-40 bg-red-600 text-white text-center transform -rotate-45 font-bold text-sm py-1 shadow-lg">
                  {story.discount}% OFF
                </div>
              )}

              <div className="absolute inset-0 flex flex-col pb-10 bottom-0 justify-end items-start px-10 text-left text-white rounded-xl">
                <p className="text-md mb-2 text-[#84a3b5]">{story?.title}</p>
                <h2 className="text-4xl font-bold mb-4 text-[#84a3b5]">
                  {story?.description}
                </h2>
                <Link
                  href="/shop"
                  className="bg-white cursor-pointer text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ComOffer;
