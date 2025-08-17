"use client";
import React, { useEffect, useState, useCallback } from "react";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import Image from "next/image";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCart } from "@/componentsedit/context/CartContext";
import { Link } from "@/i18n/navigation";
import { API_ENDPOINTS } from "../api/api";
import AddressDetails from "./AddressDetails";
import Payment from "./payment";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addressData, setAddressData] = useState({
    first_name: "",
    last_name: "test",
    email: "",
    phone: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postcode: "",
    country: "US",
  });

  const { removeFromCart } = useCart();
  const savedToken = Cookies.get("token");
  const router = useRouter();

  const fetchCart = useCallback(async () => {
    if (!savedToken) {
      toast.warn("Please sign in to view your cart", {
        position: "top-center",
      });
      setTimeout(() => router.push("/auth/signup"), 2000);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(API_ENDPOINTS.GET_CART, {
        headers: { Authorization: `Bearer ${savedToken}` },
      });
      const data = await res.json();
      setCart(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to fetch cart");
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, [savedToken, router]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const grandTotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const handleCheckout = async () => {
    try {
      const fullName = (Cookies.get("fullName") || "").split(" ");
      const firstName = fullName[0] || "";
      const lastName = fullName[1] || "";
      const email = Cookies.get("email") || "";
      const phone = Cookies.get("phone") || "";

      const truncate = (str, maxLength) => {
        if (!str) return "";
        return str.length > maxLength ? str.slice(0, maxLength) : str;
      };

      const customerData = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        address_1: truncate(addressData.address_1, 200),
        address_2: truncate(addressData.address_2, 100),
        city: truncate(addressData.city, 50),
        state: truncate(addressData.state, 50),
        postcode: truncate(addressData.postcode, 20),
        country: addressData.country,
        shipping_address: {
          first_name: firstName,
          last_name: lastName,
          address_1: truncate(addressData.address_1, 200),
          address_2: truncate(addressData.address_2, 100),
          city: truncate(addressData.city, 50),
          state: truncate(addressData.state, 50),
          postcode: truncate(addressData.postcode, 20),
          country: addressData.country,
        },
        shipping_option: {
          method_id: "flat_rate",
          method_title: "Shipping",
          cost: "100",
        },
      };

      const reqBody = {
        customer_data: customerData,
        payment_method: "stripe",
        payment_data: [],
      };

      const res = await fetch(API_ENDPOINTS.CHECKOUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${savedToken}`,
        },
        body: JSON.stringify(reqBody),
      });

      if (!res.ok) throw new Error("Checkout failed");

      const data = await res.json();

      if (data?.data?.stripeCheckoutUrl) {
        window.open(data.data.stripeCheckoutUrl, "_blank");
      } else {
        toast.error("Stripe checkout link not available.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Checkout failed. Please try again.");
    }
  };

  return (
    <div>
      <Header cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} />

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <p className="text-2xl font-semibold">Your cart is empty</p>
          <Link
            href="/shop"
            className="bg-[#B92123] text-white px-6 py-3 rounded-lg"
          >
            Go to shop
          </Link>
        </div>
      ) : (
        <main className="w-[95%] md:w-[80%] mx-auto mt-10 space-y-6">
          {/* Products Scrollable Cards */}
          <div className="max-h-[400px] overflow-y-auto space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg flex items-center gap-4 w-full"
              >
                <Image
                  src={item.image || "/favicon.ico"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                  unoptimized
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Qty: {item.quantity}
                  </p>
                  <p className="text-[#B92123] font-semibold mt-1">
                    {Number(item.price).toFixed(2)}$
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Address Details */}
          <AddressDetails
            addressData={addressData}
            setAddressData={setAddressData}
          />

          {/* Payment Method */}
          <Payment />

          <button
            onClick={handleCheckout}
            className="w-full cursor-pointer bg-[#B92123] text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
          >
            Confirm Payment ({grandTotal.toFixed(2)}$)
          </button>
        </main>
      )}

      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
      <Footer />
    </div>
  );
}
