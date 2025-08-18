"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { API_ENDPOINTS } from "../app/[locale]/api/api";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { useCart } from "@/componentsedit/context/CartContext";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function RecommendedProducts() {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const savedToken = Cookies.get("token");
  const { addToCart: addToCartContext } = useCart();

  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${API_ENDPOINTS.PRODUCT}?page=${currentPage}&per_page=${perPage}`
        );
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
    await addToCartContext(product, 1);
    toast.success(`${product.name} added to cart!`);
  }

  return loading ? (
    // Skeleton Loader
    <div className="md:p-6 container m-auto mt-16 min-h-screen">
      <h2 className="font-semibold text-xl mb-2">Most viewed</h2>
      <div className="grid grid-cols-2 w-full md:grid-cols-6 md:gap-6 gap-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-2xl border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-400"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex-1 mt-10 container flex flex-col gap-4 w-full">
      <p className="text-lg font-semibold mb-4">Most Viewed</p>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {products.map((product) => {
            const image = product.images?.[0]?.src || "/favicon.ico";
            const hoverImage =
              product.images?.[1]?.src || product.images?.[0]?.src;
            const price = product.prices?.price;

            return (
              <div
                key={product.id}
                className="bg-white text-center min-h-[300px] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative group border border-gray-100"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId("")}
              >
                <Link href={`shop/${product.id}`} className="block">
                  <div className="relative w-full h-44 mb-3 mt-4">
                    <Image
                      src={hoveredProductId === product.id ? hoverImage : image}
                      alt={product.name}
                      fill
                      className="object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  <h3 className="font-semibold px-3 text-gray-800 text-sm line-clamp-2 group-hover:text-[#e14a5c] transition-colors">
                    {product.name}
                  </h3>
                  {/* <div className="flex justify-center gap-1 text-yellow-400 mt-2 text-sm">
                    ★★★★☆
                  </div> */}
                  <p className="text-[#e14a5c] font-bold mt-1">
                    {price} {product?.prices?.currency_symbol}
                  </p>
                </Link>

                {/* Add To Cart Button */}
                <motion.button
                  onClick={() => addToCart(product)}
                  whileHover={{ scale: 1.05 }}
                  animate={
                    hoveredProductId === product.id
                      ? { y: 0, opacity: 1 }
                      : { y: 60, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="
    w-full cursor-pointer 
    bg-[#e14a5c] hover:bg-[#c63a4a] text-white text-sm font-semibold py-3 
    rounded-t-xl shadow-md flex items-center justify-center gap-2
    md:absolute md:bottom-0 md:left-0 md:right-0
    md:opacity-0 md:group-hover:opacity-100
  "
                >
                  <ShoppingCart size={18} /> Add To Cart
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </div>
  );
}
