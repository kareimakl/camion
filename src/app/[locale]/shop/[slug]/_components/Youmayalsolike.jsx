"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";

export default function RecommendedProducts() {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState("");
  const [Loding, IsLoding] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://54.162.75.209:3000/api/buckydrop/products?keyword=k"
        );
        const data = await res.json();
        if (data.success) {
          IsLoding(false);
          setProducts(data.data.records);
          // console.log("Products fetched successfully:", data.data.records);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return Loding ? (
    <div className="p-6 container m-auto mt-16 min-h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {[1, 2, 3, 4, 5, 6].map((index) => (
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
            {/* <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div> */}
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>

            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex-1 mt-10 container flex flex-col gap-4 w-full">
      <p className="text-lg font-semibold mb-8 lg:mb-0">Youmay Also Like</p>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-6 md:gap-6 gap-2"
        >
          {products.slice(0,6).map((product, idx) => {
            const isHovered = hoveredProductId === product.spuCode;
            const image = product.picUrl;

            return (
              <div
                key={product.spuCode}
                className="bg-white  text-center cursor-pointer group rounded-xl shadow-sm hover:shadow-md transition-all relative"
                onMouseEnter={() => setHoveredProductId(product.spuCode)}
                onMouseLeave={() => setHoveredProductId("")}
              >
                <Link
                  href={`/shop/${product.spuCode}`}
                  className="absolute inset-0 w-full h-full  "
                />
                <div className="">
                  <motion.div
                    className="h-32 py-2 sm:h-36 md:h-40 bg-center bg-contain bg-no-repeat mb-3 mt-2"
                    style={{ backgroundImage: `url(${image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <h3 className="font-semibold text-sm line-clamp-2">
                    {product.productName}
                  </h3>
                  <p className="text-gray-400 text-xs">{product.platform}</p>
                  <div className="text-yellow-400 mt-1">★★★★★</div>
                  <p className="text-red-600 space-x-1 font-semibold mt-1">
                    <span className="text-red-600 ml-2">
                      ${product.proPrice?.price || product.price?.price}
                    </span>
                  </p>
                </div>

                <button className="bg-[#e14a5c] cursor-pointer rounded-b-xl text-white text-sm font-bold px-4 py-2 w-[100%] opacity-0 group-hover:opacity-100 m-auto transition-opacity duration-300  rounded-t-none">
                  Add To Cart
                </button>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
