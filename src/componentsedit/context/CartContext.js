"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import Cookies from "js-cookie";
import { API_ENDPOINTS } from "../../app/[locale]/api/api";
import { toast, ToastContainer } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("token");

  const fetchCart = useCallback(async () => {
    if (!token) {
      setCart([]);
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(API_ENDPOINTS.GET_CART, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCart(data || []);
    } catch (err) {
      console.error("Cart fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = async (product, quantity = 1) => {
    if (!token) {
      console.warn("User not logged in.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(API_ENDPOINTS.ADD_TO_CART, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: String(product.id),
          price: String(product.prices?.price || ""),
          quantity,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Add to cart failed:", errorText);
        return;
      }

      await fetchCart();
      toast.success("Product added to cart successfully");
    } catch (err) {
      console.error("Add to cart error:", err);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (id) => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await fetch(API_ENDPOINTS.REMOVE_TO_CART, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: String(id) }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Remove from cart failed:", errorText);
        return;
      }

      await fetchCart();
      toast.success("Item removed successfully");
    } catch (err) {
      console.error("Remove from cart error:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (id, qty) => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await fetch(`${API_ENDPOINTS.UPDATE_CART}/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: qty }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Update cart failed:", errorText);
        return;
      }

      await fetchCart();
    } catch (err) {
      console.error("Update quantity error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalItems,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        fetchCart,
      }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
