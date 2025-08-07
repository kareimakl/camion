"use client";
import { FaInfoCircle, FaKeyboard, FaLayerGroup } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";
import "swiper/css";
import { useState, useRef, useEffect } from "react";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { API_ENDPOINTS } from "../../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ProductDetails() {
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
          console.log("Product data:", data);
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
    <div className="max-w-4xl mx-auto p-4 space-y-10">
      {/* Specification Section */}
      <section className="bg-[#f6f5f8] p-2 rounded-2xl ">
        <h2 className="text-lg font-semibold mb-4">Specification</h2>
        <div className="bg-gray-100 rounded-xl p-4 space-y-4">
          {/* Overview */}
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-700 mb-2">
              <FaInfoCircle className="text-red-500" />
              Overview
            </div>
            <div className="grid grid-cols-2 text-sm text-[#777777] border-t border-gray-300 py-2">
              <div className="font-medium">Brand</div>
              <div>Asus</div>
              <div className="font-medium">Material</div>
              <div>Metal</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-700 mb-2">
              <FaKeyboard className="text-red-500" />
              Features
            </div>
            <div className="grid grid-cols-2 text-sm text-[#777777] border-t border-gray-300 py-2">
              <div className="font-medium">Features</div>
              <div>USB A</div>
            </div>
          </div>

          {/* General */}
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-700 mb-2">
              <FaLayerGroup className="text-red-500" />
              General
            </div>
            <div className="grid grid-cols-2 text-sm text-[#777777] border-t border-gray-300 py-2">
              <div className="font-medium">Color</div>
              <div>White</div>
              <div className="font-medium">Material</div>
              <div>Metal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Description</h2>
        <div className="bg-gray-100 rounded-xl p-6 space-y-6">
          <div className="text-center">
            <h3 className="font-medium text-sm text-[#777777]">
              {product?.name}
            </h3>

            {product?.images?.[0]?.src && (
              <ImageWithSkeleton
                className="rounded-xl pt-10 h-[300px] w-full object-cover"
                src={product.images[0].src}
                alt={product.images[0].alt || "Main Product Image"}
              />
            )}

            <p
              className="mt-4 text-[#777777] max-w mx-auto"
              dangerouslySetInnerHTML={{ __html: product?.description }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
