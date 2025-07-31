"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import CartSummary from "./components/cart/CartSummary";
import CartItem from "./components/cart/CartItem";
import { API_ENDPOINTS } from "../api/api";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data fallback
  const dummyCart = [
    {
      id: 1,
      productName: "iPhone 16 Pro Protective Cover",
      price: 28,
      productImage: "/assets/images/Frame 1171280020.svg",
    },
    {
      id: 2,
      productName: "iPhone 16 Pro Max Charger",
      price: 35,
      productImage: "/assets/images/Frame 1171280020.svg",
    },
  ];

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!API_ENDPOINTS?.GET_CART) {
          console.warn("⚠️ GET_CART endpoint undefined. Using dummy data.");
          setCart(dummyCart);
          setLoading(false);
          return;
        }

        const res = await fetch(API_ENDPOINTS.GET_CART);
        const data = await res.json();

        if (data.success && data.data?.length) {
          setCart(data?.data);
        } else {
          console.warn("⚠️ API returned no data. Using dummy data.");
          setCart(dummyCart);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCart(dummyCart);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Skeleton Loading
  if (loading) {
    return (
      <div className="p-6 container gap-4 grid md:grid-cols-6 grid-cols-3 m-auto min-h-auto">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="animate-pulse shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"
            ></div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="w-[95%] md:w-[90%] mx-auto mt-10">
        <div className="min-h-auto bg-gray-50 py-10 md:px-5 flex justify-center">
          <div className="w-full max-w-4xl space-y-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <CartSummary total={total} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
