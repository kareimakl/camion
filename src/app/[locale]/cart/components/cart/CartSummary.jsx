// components/cart/CartSummary.jsx
import React from "react";
import { Link } from "@/i18n/navigation";

export default function CartSummary({ total }) {
  return (
    <Link
      href="/checkout"
      className="bg-[#B92123] text-white md:text-xl text-xs rounded-lg p-4 flex justify-between items-center font-semibold"
    >
      <span>Continue purchasing all</span>
      <span>{total}$</span>
    </Link>
  );
}
