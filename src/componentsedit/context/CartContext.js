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
import { useRouter } from "next/navigation";

const CartContext = createContext();

export function CartProvider({ children }) {
  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("token");

  const fetchCart = useCallback(async () => {
    if (!token) {
      toast.warn("Please sign in or create an account to view your cart", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINTS.GET_CART, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();

      // ✅ Use items array
      setCart(Array.isArray(data.items) ? data.items : []);

      // ✅ Optional: store summary if you want
      // setSummary(data.summary || {});
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to fetch cart. Please try again later.");
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, [token, router]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalItems = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.quantity || 0), 0)
    : 0;

  const addToCart = async (product, quantity = 1, variation = []) => {
    if (!token) {
      toast.warn(
        "Please sign in or create an account to add items to your cart",
        { position: "top-center", autoClose: 2000 }
      );

      setTimeout(() => {
        router.push("/auth/signup");
      }, 2000);
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
          quantity,
          variation,
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

const removeFromCart = async (productId) => {
  if (!token) {
    toast.warn("Please sign in or create an account to view your cart", {
      position: "top-center",
      autoClose: 2000,
    });

    setTimeout(() => {
      router.push("/auth/signup");
    }, 2000);
    return;
  }

  try {
    setLoading(true);
    const res = await fetch(API_ENDPOINTS.REMOVE_TO_CART, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: String(productId) }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Remove from cart failed:", errorText);
      toast.error("Failed to remove item");
      return;
    }

    await fetchCart();
    toast.success("Item removed successfully");
  } catch (err) {
    console.error("Remove from cart error:", err);
    toast.error("Something went wrong while removing item");
  } finally {
    setLoading(false);
  }
};

  const updateQuantity = async (id, qty) => {
    if (!token) {
      toast.warn(
        "Please sign in or create an account to add items to your cart",
        {
          position: "top-center",
          autoClose: 2000,
        }
      );

      setTimeout(() => {
        router.push("/auth/signup");
      }, 2000);
      return;
    }
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
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
