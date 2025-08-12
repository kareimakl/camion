"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { API_ENDPOINTS } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { useCart } from "@/componentsedit/context/CartContext";

export default function AllProducts() {
  const savedToken = Cookies.get("token");
  const { addToCart: addToCartContext } = useCart();

  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_ENDPOINTS.PRODUCT}?page=${currentPage}&per_page=${perPage}`
        );
        const data = await res.json();
        if (data?.products) {
          setProducts(data.products);
          setTotalPages(data.pagination?.totalPages || 1);
          console.log("Products fetched successfully:", data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  async function addToCart(product) {
    await addToCartContext(product, 1);
  }

  const getPrice = (product) =>
    product?.prices?.price_range?.min_amount || product?.prices?.price || "0";

  return (
    <div className="container m-auto mt-16 min-h-screen">
      {loading ? (
        // Skeleton Loader
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: perPage }).map((_, index) => (
            <div
              key={index}
              className="max-w-sm p-4 border rounded-2xl border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-400"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Products */}
          <div className="flex-1 mt-10 container flex flex-col gap-4 w-full">

            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
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
                      className="bg-white text-center min-h-[300px] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative group"
                      onMouseEnter={() => setHoveredProductId(product.id)}
                      onMouseLeave={() => setHoveredProductId("")}
                    >
                      <Link href={`shop/${product.id}`} className="block">
                        <motion.div
                          className="h-40 bg-center bg-contain bg-no-repeat mb-3 mt-2 transition-transform duration-300"
                          style={{ backgroundImage: `url(${image})` }}
                          whileHover={{ scale: 1.05 }}
                        />
                        <h3 className="font-semibold px-3 text-sm line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="text-yellow-400 mt-1 text-sm">
                          ★★★★★
                        </div>
                        <p className="text-red-600 font-semibold mt-1">
                          {price} {product?.prices?.currency_symbol}
                        </p>
                      </Link>

                      {/* Add To Cart Button */}
                      <motion.button
                        onClick={() => addToCart(product)}
                        initial={{ y: 50, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        animate={
                          hoveredProductId === product.id
                            ? { y: 0, opacity: 1 }
                            : { y: 50, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0  cursor-pointer right-0 bg-[#e14a5c] text-white text-sm font-bold py-2"
                      >
                        Add To Cart
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <ToastContainer
              position="top-right"
              autoClose={4000}
              theme="colored"
            />
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 cursor-pointer hover:bg-[#e14a5c] hover:text-white bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-3 py-1 border rounded">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 cursor-pointer hover:bg-[#e14a5c] hover:text-white bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </div>
  );
}
