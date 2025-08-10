"use client";
import React, { useEffect, useState, useCallback } from "react";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import CartItem from "./components/cart/CartItem";
import { API_ENDPOINTS } from "../api/api";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "@/componentsedit/context/CartContext";
import { Link } from "@/i18n/navigation";
export default function CartPage() {
  const [cart, setCart] = useState([]);
  const { removeFromCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const savedToken = Cookies.get("token");

  const fetchCart = useCallback(async () => {
    setLoading(true);
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
  }, [savedToken]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  async function handleRemove(productId) {
    await removeFromCart(productId);
    fetchCart();
  }

  const grandTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Header cartCount={totalItems} />
      {loading ? (
        <div className="py-10 md:px-5 flex justify-center">
          <div className="w-full max-w-4xl space-y-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse flex items-center gap-4 border p-4 rounded-lg shadow-sm bg-white"
                >
                  <div className="bg-gray-300 w-20 h-20 rounded-md"></div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
                    <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                    <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
                  </div>
                  <div className="bg-gray-300 w-10 h-10 rounded"></div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <main className="w-[95%] min-h-screen md:w-[90%] mx-auto mt-10">
          <div className="py-10 md:px-5 flex justify-center">
            <div className="w-full max-w-4xl space-y-6">
              {cart?.length === 0 ? (
                <div className="min-h-auto flex m-auto items-center flex-col gap-4 bg-gray-50 py-10 md:px-5 justify-center">
                  <p className=" text-3xl font-semibold text-center">
                    Your cart is currently empty.
                  </p>
                  <Link
                    href="/shop"
                    className="bg-[#B92123] w-auto text-center text-white md:text-sm text-xs rounded-full px-6 py-4 flex justify-center items-center font-semibold"
                  >
                    Return to shop
                  </Link>
                </div>
              ) : (
                <>
                  <div className="w-full max-w-4xl space-y-6">
                    {cart.map((item) => {
                      const product = products.find(
                        (prod) => String(prod.id) === String(item.productId)
                      );

                      return (
                        <CartItem
                          key={item.productId}
                          item={{
                            id: item.productId,
                            title: product ? product.name : "Unnamed Product",
                            price: Number(item.price),
                            quantity: item.quantity,
                            image:
                              product && product.images?.length > 0
                                ? product.images[0].src
                                : "/placeholder.png",
                            discountPercentage: item.discountPercentage,
                          }}
                          onQuantityChange={handleQuantityChange}
                          onRemove={handleRemove}
                        />
                      );
                    })}
                  </div>
                  {/* Grand Total */}
                  <Link
                    href="/checkout"
                    className="bg-[#B92123] w-full text-white md:text-xl text-xs rounded-lg p-4 flex justify-between items-center font-semibold"
                  >
                    <span>Continue purchasing all</span>
                    <span>{grandTotal.toFixed(2)}$</span>
                  </Link>
                </>
              )}
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            theme="colored"
          />
        </main>
      )}

      <Footer />
    </div>
  );
}
