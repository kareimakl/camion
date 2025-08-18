"use client";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../../api/api";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "next/navigation";
import { useCart } from "@/componentsedit/context/CartContext";
export default function CategoriesProdect() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProductId, setHoveredProductId] = useState("");
  const params = useParams();
  const categorySlug = params?.slug;
  const { addToCart: addToCartContext } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${API_ENDPOINTS.PRODUCT}?category=${categorySlug}`
        );

        const data = await res.json();
        console.log("API raw data:", data);

        if (data?.products) {
          setProducts(data.products);

          console.log(
            "Products IDs fetched successfully:",
            data.products.map((p) => p.id)
          );
        } else {
          setProducts([]);
          console.warn("No products key in API response");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug) {
      fetchProducts();
    }
  }, [categorySlug]);

  function getPrice(product) {
    return product.prices?.price;
  }

  async function addToCart(product) {
    await addToCartContext(product, 1);
  }

  return loading ? (
    // Skeleton Loader
    <div className="p-6 container m-auto mt-16 min-h-screen">
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
  ) : products.length === 0 ? (
    <div className="container mx-auto text-center mt-16 min-h-[300px]">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        No Products Found
      </h2>
      <p className="text-gray-500">
        There are currently no products in this category.
      </p>
    </div>
  ) : (
    <div className="flex-1 mt-10 container flex flex-col gap-4   w-full">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        Home /{" "}
        <span className="text-black font-bold">
          {decodeURIComponent(categorySlug)}
        </span>
      </nav>

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
            const price = product.prices?.price;

            return (
              <div
                key={product.id}
                className="bg-white text-center min-h-[310px] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative group"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId("")}
              >
                <Link href={`/shop/${product.id}`} className="block">
                  <motion.div
                    className="h-40 bg-center bg-contain bg-no-repeat mb-3 mt-2 transition-transform duration-300"
                    style={{ backgroundImage: `url(${image})` }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <h3 className="font-semibold px-3 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-yellow-400 mt-1 text-sm">★★★★★</div>
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
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </div>
  );
}
