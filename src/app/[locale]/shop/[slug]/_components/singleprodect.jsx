"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { useState, useRef, useEffect } from "react";
import Static from "./static";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { API_ENDPOINTS } from "../../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.PRODUCTDDETAILS}/${slug}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNDhkZGIyYy00OTYzLTQzYzEtOTMzNy1lOWQ2YjRiMmE3NzUiLCJlbWFpbCI6ImluZm9Aa2FyaW1ha2wuY29tIiwicGhvbmUiOiIrMjAxNTU4ODIwMTAzIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQ1Njc4NDUsImV4cCI6MTc1NTE3MjY0NX0.N1sqLvsYBiGsFOnzJO6qyZrzADhC3wf1QzFIp42vK-c`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!loading && !product) {
    return (
      <div className="text-center py-10 text-red-500">Product not found.</div>
    );
  }

  // images from WooCommerce response
  const images = product?.images?.map((img) => img.src) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        Home / {product?.categories?.[0]?.name || "Shop"} /{" "}
        <span className="text-black font-bold">{product?.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Gallery */}
        <div className="lg:col-span-1 flex flex-row gap-6">
          {/* Thumbnails */}
          {loading ? (
            <div className="flex gap-4 container">
              <div className="flex flex-col gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg"
                  />
                ))}
              </div>
              <div className="animate-pulse bg-gray-300 w-72 h-80 rounded-lg" />
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-[80px]">
              {product?.images?.length > 4 ? (
                <Swiper
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={4}
                  className="h-[320px]"
                >
                  {product?.images?.map((img, i) => (
                    <SwiperSlide key={i} className="rounded-xl ">
                      <Image
                        src={img.thumbnail}
                        width={70}
                        height={80}
                        alt={img.alt || `thumb-${i}`}
                        className={`cursor-pointer border  !rounded-4xl  ${
                          currentIndex === i
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        onClick={() => {
                          setCurrentIndex(i);
                          swiperRef?.current?.slideTo(i);
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="flex flex-col gap-3">
                  {product?.images?.map((img, i) => (
                    <Image
                      key={i}
                      src={img.thumbnail}
                      width={70}
                      height={70}
                      alt={img.alt || `thumb-${i}`}
                      className={`cursor-pointer border rounded ${
                        currentIndex === i ? "border-black" : "border-gray-300"
                      }`}
                      onClick={() => {
                        setCurrentIndex(i);
                        swiperRef?.current?.slideTo(i);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Main Image Swiper */}
          <div className="w-[400px] h-[400px] md:-mt-0 -mt-10 overflow-hidden rounded-2xl">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              spaceBetween={20}
              slidesPerView={1}
              className="h-full"
              dir="rtl"
            >
              {product?.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full rounded-xl h-full"
                    >
                      <ImageWithSkeleton
                        src={img.src}
                        alt={img.alt || `Main Image ${i}`}
                      />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-start flex-col gap-2">
            <span className="bg-gradient-to-r w-full from-[#dc673b] to-yellow-300 text-white text-sm px-4 py-2 rounded-full">
              Fast delivery within 72 Hours
            </span>
            <h1 className="text-2xl text-start font-semibold">
              {product?.name || "Product Name"}
            </h1>
          </div>

          <div className="text-2xl font-bold text-[#e14a5c]">
            <span>
              {product?.prices?.price} {product?.prices?.currency_symbol}
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            {product?.short_description?.replace(/<[^>]+>/g, "") || ""}
          </p>

          <div className="flex gap-2 items-center">
            <label className="font-bold text-gray-700">Color:</label>
            <div className="flex gap-3 mt-1">
              <span className="w-6 h-6 rounded-full bg-gray-300 border"></span>
              <span className="w-6 h-6 rounded-full bg-slate-600 border"></span>
              <span className="w-6 h-6 rounded-full bg-purple-200 border"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-200 border"></span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-[20%] border border-[#e5e5e5] px-1 py-1 mt-1 rounded-full flex items-center justify-between">
              <button className="px-2 py-1">-</button>
              <span className="px-4">1</span>
              <button className="px-2 py-1">+</button>
            </div>
            <button className="bg-[#e14a5c] text-white px-6 w-[40%] py-2 rounded-full">
              Add to Cart
            </button>
            <button className="bg-[#f9dbdf] text-[#e14a5c] w-[40%] px-6 py-2 rounded-full">
              Buy Now
            </button>
          </div>

          <div className="flex border-t border-[#e5e5e5] pt-4 gap-6 mt-4 text-sm text-[#000]">
            <span>🤍 Add to wishlist</span>
          </div>
        </div>

        <Static />
      </div>
    </div>
  );
}
