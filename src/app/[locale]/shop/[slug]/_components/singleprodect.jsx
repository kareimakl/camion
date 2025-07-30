"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { useState, useRef, useEffect } from "react";
import Static from "./static";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://54.162.75.209:3000/api/buckydrop/products/${slug}`
        );
        const data = await res.json();
        if (data.success) {
          setLoading(false);
          setProducts([data.data]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [slug]);

  const product = products.find((item) => item.spuCode === slug);

  if (!loading && (!products.length || !product)) {
    return (
      <div className="text-center py-10 text-red-500">Product not found.</div>
    );
  }

  const images =
    product?.productImageList?.filter((img) => img && img !== "") || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        Home / {product?.categoryCode || "Shop"} /{" "}
        <span className="text-black font-bold">{product?.shop?.shopName}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-1 flex flex-row gap-6">
          {/* Thumbnails */}

          {loading ? (
            <div className="flex gap-4">
              <div className="flex  flex-col gap-2">
                <div className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg"></div>
                <div className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg"></div>
                <div className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg"></div>
                <div className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg"></div>
              </div>

              <div className="animate-pulse bg-gray-300 w-72 h-80 rounded-lg" />
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={70}
                  height={70}
                  alt={`thumb-${i}`}
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

          {/* Swiper Main Image */}
          <div className="w-[400px] h-[400px] overflow-hidden rounded-lg">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              spaceBetween={20}
              slidesPerView={1}
              className="h-full"
              dir="rtl"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full rounded-xl h-full"
                    >
                      <ImageWithSkeleton src={img} alt={`Main Image ${i}`} />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-start flex-col gap-2">
            <span className="bg-gradient-to-r w-full from-[#dc673b] to-yellow-300 text-white text-sm px-4 py-2 rounded-full">
              Fast delivery within 72 Hours
            </span>
            <h1 className="text-2xl text-start font-semibold">
              {product?.shop?.shopName || "Product Name"}
            </h1>
          </div>

          <div className="text-2xl font-bold text-[#e14a5c]">
            {product?.sale?.price || product?.price?.price || "0"}$
          </div>

          <p className="text-gray-600 text-sm">{product?.productName}</p>

          <div className="flex gap-2 items-center">
            <label className="font-bold text-gray-700">Color:</label>
            <div className="flex gap-3 mt-1">
              <span className="w-6 h-6 rounded-full bg-gray-300 border"></span>
              <span className="w-6 h-6 rounded-full bg-slate-600 border"></span>
              <span className="w-6 h-6 rounded-full bg-purple-200 border"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-200 border"></span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <label className="font-bold text-gray-700">Storage:</label>
            <select className="w-[50%] border border-[#e5e5e5] px-4 py-1 mt-1 rounded-full">
              <option>Choose an option</option>
              <option>128GB</option>
              <option>256GB</option>
            </select>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-[20%] border border-[#e5e5e5] px-1 py-1 mt-1 rounded-full flex items-center">
              <button className="px-1 py-1">-</button>
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
            <span>🔁 Add to compare</span>
            <span>🤍 Add to wishlist</span>
          </div>
        </div>

        <Static />
      </div>
    </div>
  );
}
