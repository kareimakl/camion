// components/cart/CartItem.jsx
"use client";
import Image from "next/image";
import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="relative w-26 h-26">
          <Image
            src={item.productImage}
            alt={item.productName}
            fill
            className="object-contain rounded-md"
          />
          <span className="absolute top-0 left-0 bg-[#B92123] text-white text-xs px-2 py-0.5 rounded-br-lg">
            50%
          </span>
        </div>

        <div>
          <p className="text-gray-700 md:text-xl text-xs font-semibold">
            {item.productName }
          </p>
          <p className="md:text-sm text-xs text-gray-500 mt-1">
            Add $25 and get free delivery.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <button className="w-8 h-8 rounded-full bg-red-100 text-[#B92123] font-bold flex items-center justify-center">
              -
            </button>
            <span className="text-lg font-medium">1</span>
            <button className="w-8 h-8 rounded-full bg-red-100 text-[#B92123] font-bold flex items-center justify-center">
              +
            </button>
          </div>

          <p className="text-sm text-[#B92123] mt-2 cursor-pointer">
            Add items
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-gray-700 md:text-xl text-xs font-medium mb-2">
          Cost: {item.price.toFixed(2)}$
        </p>
        <button className="bg-[#B92123] cursor-pointer text-white md:text-xl text-xs py-2 md:px-6 px-1 w-full rounded-lg hover:bg-[#B92123] transition">
          Continue purchasing
        </button>
      </div>
    </div>
  );
}
