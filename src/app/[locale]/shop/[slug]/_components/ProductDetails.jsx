"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { API_ENDPOINTS } from "../../../api/api";
import Cookies from "js-cookie";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const savedToken = Cookies.get("token");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.PRODUCTDDETAILS}/${slug}`, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* صورة المنتج */}
        {product?.images?.[0]?.src && (
          <ImageWithSkeleton
            className="w-full h-[350px] object-cover"
            src={product.images[0].src}
            alt={product.images[0].alt || product?.name || "Product Image"}
          />
        )}

        {/* معلومات المنتج */}
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {product?.name}
          </h1>
          {/* ممكن تضيف سعر أو أي تفاصيل هنا */}
        </div>

      </div>
    </div>
  );
}
