"use client";
import { products } from "./productsTab";
import { useState } from "react";
import RecentlyViewed from "./RecentlyViewed";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const tabs = ["Popular products", "Most-viewed products", "Top selling"];
function generateUniqueSlug(title, existingSlugs) {
  const baseSlug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  let slug = baseSlug;
  let count = 1;

  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
}
const existingSlugs = [];

const productsWithSlugs = products.map((product) => {
  const slug = generateUniqueSlug(product.title, existingSlugs);
  existingSlugs.push(slug);

  return { ...product, slug };
});

console.log(productsWithSlugs);

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [hoveredProductId, setHoveredProductId] = useState("");
  const locale = useLocale();

  return (
    <main className="flex flex-col lg:flex-row gap-4 p-4 lg:p-6 mt-10">
      <RecentlyViewed />

      <div className="flex-1 w-full">
        {/* Tabs */}
        <div className="flex justify-between w-full flex-wrap">
          <p className="text-lg font-semibold mb-4 lg:mb-0">
            Featured products
          </p>
          <div className="flex justify-end gap-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm sm:text-base font-medium ${
                  activeTab === tab
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-5 md:gap-6 gap-2"
          >
            {productsWithSlugs
              .filter((product) => product.tab === activeTab)
              .slice(0, 10)
              .map((product, idx) => {
                const isHovered = hoveredProductId === product.id;
                const bgImage = isHovered ? product.image2 : product.image;

                return (
                  <div
                    key={idx}
                    className="bg-white group text-center cursor-pointer p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative"
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
                      className="h-32  rounded-2xl sm:h-36 md:h-40 bg-center bg-contain bg-no-repeat mb-3"
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
    </main>
  );
}
