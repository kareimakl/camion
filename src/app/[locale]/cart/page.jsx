"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import CartItem from "./components/cart/CartItem";
import { API_ENDPOINTS } from "../api/api";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.GET_CART, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDU3ZjAwNS0wOWI3LTRiYjItOWI4NS0zMzQwZDAxMTFmMGMiLCJlbWFpbCI6Im1vYXRhekBnbWFpbC5jb20iLCJwaG9uZSI6IisyMDExMjcyNzI2NjYiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1NDU2Nzg0OCwiZXhwIjoxNzU1MTcyNjQ4fQ.BmTV2RVWuzemw3DrPAhRKllsPKSkmeuZJFPg31jHhOU`, // Replace with your actual token
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched cart data:", data);

        if (data?.length > 0) {
          setCart(data);
        } else {
          setCart([]);
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

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.PRODUCT}`);
        const data = await res.json();
        if (data?.products) {
          console.log("Fetched products:", data.products);
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Loading skeleton while fetching
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

  console.log("Cart Data:", cart);
  console.log("Products Data:", products);

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
                  const product = products?.find(
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
                          product && product.images.length > 0
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
