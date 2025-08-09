"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import CartItem from "./components/cart/CartItem";
import { API_ENDPOINTS } from "../api/api";
import Cookies from "js-cookie";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const savedToken = Cookies.get("token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.GET_CART, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched cart data:", data);

        setCart(data || []);

        if (data?.length > 0) {
          const productsData = [];
          for (const item of data) {
            const prodRes = await fetch(
              `${API_ENDPOINTS.PRODUCTDDETAILS}/${item.productId}`,
              {
                headers: {
                  Authorization: `Bearer ${savedToken}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (prodRes.ok) {
              const prodData = await prodRes.json();
              productsData.push(prodData);
            }
          }
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCart([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

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
            {cart?.length === 0 ? (
              <div className="min-h-auto bg-gray-50 py-10 md:px-5 flex justify-center">
                No items added to cart
              </div>
            ) : (
              <div className="w-full max-w-4xl space-y-6">
                {cart.map((item) => {
                  const product = products.find(
                    (prod) => String(prod.id) === String(item.productId)
                  );

                  return (
                    <CartItem
                      key={item.id}
                      item={{
                        id: item.id,
                        title: product ? product.name : "Unnamed Product",
                        price: Number(item.price),
                        quantity: item.quantity,
                        image:
                          product && product.images?.length > 0
                            ? product.images[0].src
                            : "/placeholder.png",
                        totalPrice: Number(item.totalPrice),
                        discountPercentage: item.discountPercentage,
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
