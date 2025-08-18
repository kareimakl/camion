"use client";
import "swiper/css";
import Image from "next/image";
import Static from "./static";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { API_ENDPOINTS } from "../../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "@/componentsedit/context/CartContext";
import dynamic from "next/dynamic";
export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const savedToken = Cookies.get("token");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const SocialShare = dynamic(() => import("./SocialShare"), { ssr: false });

  useEffect(() => {
    const productId = Number(slug);
    const fetchProduct = async () => {
      if (!slug) return;
      try {
        const res = await fetch(
          `${API_ENDPOINTS.PRODUCTDDETAILS}/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${savedToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("savedToken", savedToken);

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Server response:", errorText);
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (data) {
          setProduct(data);
          console.log("١ Product fetched successfully:", data);
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Gallery */}
        <div className="lg:col-span-2    flex flex-col md:flex-row gap-6">
          <div className="order-1 md:order-2 flex-1 overflow-hidden rounded-xl shadow-md">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              spaceBetween={20}
              slidesPerView={1}
              className="h-[300px] md:h-[350px]"
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
                      className="w-full h-full"
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

          <div className="order-2 max-h-[350px] overflow-y-scroll  md:order-1 flex flex-row md:flex-col gap-3 mt-4 md:mt-0 w-full md:w-[90px]">
            {loading
              ? [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-300 w-16 h-16 rounded-lg"
                  />
                ))
              : product?.images?.map((img, i) => (
                  <Image
                    unoptimized
                    key={i}
                    src={img.thumbnail}
                    width={70}
                    height={70}
                    alt={img.alt || `thumb-${i}`}
                    className={`cursor-pointer rounded-lg border ${
                      currentIndex === i ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => {
                      setCurrentIndex(i);
                      swiperRef?.current?.slideTo(i);
                    }}
                  />
                ))}
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="bg-white  p-6 rounded-xl shadow-md space-y-4">
          {/* <span className="bg-gradient-to-r w-full from-[#dc673b] to-yellow-300 text-white text-sm px-4 py-2 rounded-full inline-block">
            Fast delivery within 72 Hours
          </span> */}

          <h1 className="text-2xl font-semibold">{product?.name}</h1>

          <div className="text-2xl font-bold text-[#e14a5c]">
            {product?.prices?.price} {product?.prices?.currency_symbol}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {product?.short_description?.replace(/<[^>]+>/g, "") || ""}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border rounded-full">
                <button
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="bg-[#e14a5c] cursor-pointer text-white md:px-6 py-2 rounded-full flex-1"
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </button>
            </div>
            <SocialShare product={product} />
          </div>
        </div>
      </div>

      {/* Static Section */}
      <div className="mt-8">
        <Static />
      </div>
    </div>
  );
}
