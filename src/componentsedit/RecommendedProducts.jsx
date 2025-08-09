"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { API_ENDPOINTS } from "../app/[locale]/api/api";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

export default function RecommendedProducts() {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const savedToken = Cookies.get("token");

  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState("");
  const [loading, setLoading] = useState(true);
  const getPrice = (product) =>
    product?.prices?.price_range?.min_amount || product?.prices?.price || "0";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.PRODUCT}`);
        const data = await res.json();
        if (data?.products) {
          setProducts(data.products);
          console.log("Products fetched successfully:", data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  async function addToCart(product) {
    try {
      const payload = {
        productId: String(product?.id),
        quantity: 1,
        price: String(getPrice(product)),
      };

      const res = await fetch(API_ENDPOINTS.ADD_TO_CART, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${savedToken}`,
        
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("API Token:", token);
      if (data) {
        toast.success("Product added to cart successfully");
        console.log("Product added to cart:", data);
      } else {
        toast.error("Failed to add product to cart");
      }
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  }

  return loading ? (
    // Skeleton Loader
    <div className="p-6 container m-auto mt-16 min-h-screen">
      <h2 className="font-semibold text-xl mb-2">Most viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="max-w-sm p-4 border rounded-2xl border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-400"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
              <svg
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
              </svg>
            </div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex-1 mt-10 container flex flex-col gap-4 w-full">
      <p className="text-lg font-semibold mb-8 lg:mb-0">Most viewed</p>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-6 md:gap-6 gap-2"
        >
          {products.map((product) => {
            const image = product.images?.[0]?.src || "/placeholder.png";
            const price =
              product.prices?.price_range?.min_amount ||
              product.prices?.price ||
              "0";

            return (
              <div
                key={product.id}
                className="bg-white text-center cursor-pointer group rounded-xl shadow-sm hover:shadow-md transition-all relative"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId("")}
              >
                <Link href={`shop/${product.id}`} className="">
                  <motion.div
                    className="h-32 py-2 sm:h-36 md:h-40 bg-center bg-contain bg-no-repeat mb-3 mt-2"
                    style={{ backgroundImage: `url(${image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <h3 className="font-semibold px-2 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs">EGP</p>
                  <div className="text-yellow-400 mt-1">★★★★★</div>
                  <p className="text-red-600 space-x-1 font-semibold mt-1">
                    <span className="text-red-600 ml-2">{price} EGP</span>
                  </p>
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#e14a5c] cursor-pointer rounded-b-xl text-white text-sm font-bold px-4 py-2 w-[100%] opacity-0 group-hover:opacity-100 m-auto transition-opacity duration-300 rounded-t-none"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </div>
  );
}
