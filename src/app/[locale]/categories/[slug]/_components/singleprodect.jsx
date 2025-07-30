"use client";

import Image from "next/image";
import { products } from "../../../../../components/productsTab";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { useState, useRef, useEffect } from "react";
import ShareBox from "@/components/ShareBox";

export default function ProductPage() {
  const title = "شوف المنتج ده";
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const params = useParams();
  const slug = params.slug;
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = products.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") ===
      slug.toLowerCase().replace(/\s+/g, "-")
  );

  if (!product) return <div>Product not found</div>;
  return (
    <div className=" container mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        Home / {product.category} /{" "}
        <span className="text-black font-bold">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-row gap-6">
          <div className="flex flex-col gap-3">
            {[product.image, product.image2].map((img, i) => (
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
                  swiperRef.current?.slideTo(i);
                }}
              />
            ))}
          </div>

          <div className="w-[400px] h-[400px] overflow-hidden rounded-lg">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              spaceBetween={20}
              slidesPerView={1}
              className="h-full"
            >
              {[product.image, product.image2].map((img, i) => (
                <SwiperSlide key={i}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={img}
                        width={400}
                        height={500}
                        alt={`Main Image ${i}`}
                        className="rounded-lg object-contain w-full h-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-start flex-col gap-2 ">
            <span className="bg-gradient-to-r w-full from-[#dc673b] to-yellow-300 text-white text-sm px-4 py-2 rounded-full">
              Fast delivery within 72 Hours
            </span>
            <h1 className="text-2xl text-start font-semibold">
              {product.title}
            </h1>
          </div>

          <div className="text-2xl font-bold text-[#e14a5c]">
            {product.sale || product.price}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            {"⭐".repeat(Math.floor(product.rating))}{" "}
            <span>({product.rating} stars)</span>
          </div>

          <p className="text-gray-600 text-sm">{product.dsc}</p>

          <div className=" flex gap-2 justify-start items-center  ">
            <label className="font-bold text-gray-700">Color:</label>
            <div className="flex gap-3 mt-1">
              <span className="w-6 h-6 rounded-full bg-gray-300 border"></span>
              <span className="w-6 h-6 rounded-full bg-slate-600 border"></span>
              <span className="w-6 h-6 rounded-full bg-purple-200 border"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-200 border"></span>
            </div>
          </div>

          {/* Storage Select */}
          <div className=" flex gap-2 justify-start items-center  ">
            <label className="font-bold text-gray-700">Storage:</label>
            <select className="w-[50%] border border-[#e5e5e5]  px-4 py-1 mt-1 rounded-full">
              <option>Choose an option</option>
              <option>128GB</option>
              <option>256GB</option>
            </select>
          </div>

          {/* Quantity + Cart */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-[20%] border border-[#e5e5e5]  px-1 py-1 mt-1 rounded-full flex items-center">
              <button className="px-1 py-1">-</button>
              <span className="px-4 ">1</span>
              <button className="px-2 py-1 ">+</button>
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

            <ShareBox title={title} url={url} />
          </div>
        </div>
        <section className="flex flex-col gap-4">
          <div className="lg:col-span-1 border border-[#0000001f] p-6 rounded-xl space-y-6 font-sans text-sm text-gray-700 shadow-sm">
            <h2 className="font-semibold text-lg text-black">
              Shipping & Delivery
            </h2>

            {/* Courier Delivery */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <span className="text-rose-500 text-xl">🚚</span>
                <div>
                  <p className="font-medium text-black">Courier delivery</p>
                  <p className="text-gray-500 text-sm">
                    Our courier will deliver to the specified address
                  </p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-gray-500">2–3 Days</p>
                <p className="font-semibold text-black">From $20</p>
              </div>
            </div>

            {/* DHL Delivery */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/DHL_Logo.svg/120px-DHL_Logo.svg.png"
                  alt="DHL"
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <p className="font-medium text-black">DHL Courier delivery</p>
                  <p className="text-gray-500 text-sm">
                    DHL courier will deliver to the specified address
                  </p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-gray-500">
                  1–3
                  <br />
                  Days
                </p>
                <p className="font-semibold text-black">From $40</p>
              </div>
            </div>

            <hr className="my-2 border-gray-200" />

            {/* Warranty */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-rose-500 text-lg">🛡️</span>
                <p className="text-black font-medium">Warranty 1 year</p>
              </div>
              <a href="#" className="text-blue-500 text-sm">
                More details
              </a>
            </div>

            {/* Returns */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-rose-500 text-lg">🔄</span>
                <p className="text-black font-medium">Free 30-Day returns</p>
              </div>
              <a href="#" className="text-blue-500 text-sm">
                More details
              </a>
            </div>
          </div>
          <div className="relative cursor-grab w-full h-[210px]">
            <img
              src="/assets/images/banner-s-mb-cover-bf.jpg"
              alt="Samsung Galaxy Flip5"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className="absolute inset-0  flex flex-col pt-10 justify-start items-start px-10 text-left text-white rounded-xl">
              <p className="text-md mb-2 text-[#FFF]">Unbeatable offers</p>
              <h2 className="text-2xl font-bold mb-4 text-[#FFF]">
                Black Friday <br /> Blowout!
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
