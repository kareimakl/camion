"use client";
import { Link } from "@/i18n/navigation";
import { products } from "../../../../../components/productsTab";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function Youmayalsolike() {
  const [hoveredProductId, setHoveredProductId] = useState("");
  return (
    <div className="flex-1 mt-10 container flex flex-col gap-4   w-full">
      <p className="text-lg font-semibold mb-8 lg:mb-0">You may also like</p>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-6 md:gap-6 gap-2"
        >
          {products.slice(0, 6).map((product, idx) => {
            const isHovered = hoveredProductId === product.id;
            const bgImage = isHovered ? product.image2 : product.image;

            return (
              <div
                key={idx}
                className="bg-white text-center cursor-pointer p-4  group  rounded-xl shadow-sm hover:shadow-md transition-all relative"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId("")}
              >
                <Link
                  className="absolute w-full h-full"
                  href={`/product/${product.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                ></Link>

                {product.hot && (
                  <span className="absolute  z-10 top-2 left-2 bg-[#e14a5c] text-white text-xs px-2 py-1 rounded-full">
                    HOT
                  </span>
                )}
                {product.discount && (
                  <span
                    className={`absolute ${
                      product.hot ? "top-9" : "top-2"
                    }  z-10 left-2 bg-[#8cbc67] text-white text-xs px-2 py-1 rounded-full`}
                  >
                    {product.discount}
                  </span>
                )}

                <motion.div
                  className="h-32 sm:h-36 md:h-40 bg-center bg-contain bg-no-repeat mb-3"
                  style={{ backgroundImage: `url(${bgImage})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <button className="bg-[#e14a5c]  cursor-pointer rounded-b-2xl text-white text-sm font-bold px-4 py-2 w-[90%] opacity-0 group-hover:opacity-85 m-auto transition-opacity duration-300 absolute bottom-[110px] right-0 left-0 rounded-t-none">
                  Add To Cart
                </button>

                <h3 className="font-semibold text-sm">{product.title}</h3>
                <p className="text-gray-400 text-xs">{product.category}</p>
                <div className="text-yellow-400 mt-1">
                  {"★".repeat(Math.floor(product.rating))}
                  {product.rating % 1 !== 0 && "½"}
                </div>
                <p className="text-red-600 space-x-1  font-semibold mt-1">
                  <span
                    className={`text-gray-400 ${
                      product.sale ? "line-through mr-1" : "text-red-600"
                    }  ml-2`}
                  >
                    {product.price}
                  </span>
                  {product.sale}
                </p>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
