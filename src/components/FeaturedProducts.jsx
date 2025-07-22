"use client";
import { products } from "./productsTab";
import { useState } from "react";
import RecentlyViewed from "./RecentlyViewed";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Popular products", "Most-viewed products", "Top selling"];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [hoveredProductId, setHoveredProductId] = useState("");

  return (
    <main className="flex flex-col lg:flex-row gap-4 p-4 lg:p-6 mt-10">
      <RecentlyViewed  />

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
            {products[activeTab].map((product, idx) => {
              const isHovered = hoveredProductId === product.id;
              const bgImage = isHovered ? product.image2 : product.image;

              return (
                <div
                  key={idx}
                  className="bg-white text-center cursor-pointer p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId("")}
                >
                  {product.hot && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      HOT
                    </span>
                  )}
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}

                  <div
                    className="h-40 bg-center bg-contain bg-no-repeat mb-3"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />

                  <h3 className="font-semibold text-sm">{product.title}</h3>
                  <p className="text-gray-400 text-xs">{product.category}</p>
                  <div className="text-yellow-400 mt-1">
                    {"★".repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && "½"}
                  </div>
                  <p className="text-red-600 font-semibold mt-1">
                    {product.price}
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
