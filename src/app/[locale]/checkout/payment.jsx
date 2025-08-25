"use client";
import Image from "next/image";
import React from "react";

export default function Payment({ paymentMethod, setPaymentMethod }) {
  // خلي طريقة واحدة فقط: Stripe
  const method = {
    id: "credit_card",
    label: "Credit Card (Skipcash)",
    icon: "/assets/icons/Frame 75.svg",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
      <h2 className="font-semibold text-gray-700 mb-2">Payment Method</h2>
      <button
        className={`w-full border rounded-lg py-3 flex justify-between px-4 items-center border-[#B92123] bg-red-50`}
        onClick={() => setPaymentMethod(method.id)}
      >
        <span>{method.label}</span>
        <Image src={method.icon} alt={method.label} width={24} height={24} />
      </button>
    </div>
  );
}
