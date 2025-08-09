"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Link } from "@/i18n/navigation";
import { API_ENDPOINTS } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Invalid email or phone number");

      const data = await res.json();
      Cookies.set("email", formData.email);
      Cookies.set("phone", formData.phone);

      toast.success("Signed in successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push("/auth/verify");
      }, 2000);
    } catch (err) {
      toast.error(err.message || "Something went wrong", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/assets/icons/logo-camion.png"
              alt="Logo"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Please sign in to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-[#B92129] focus:ring-2 focus:ring-[#B92129] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 555 880 103"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-[#B92129] focus:ring-2 focus:ring-[#B92129] outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-[#B92123] hover:bg-[#B92129] text-white rounded-lg py-3 text-sm font-medium shadow-sm transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            {/* Link to Signup */}
            <Link
              href="/auth/signup"
              className="text-[#B92123] cursor-pointer w-full m-auto flex justify-center text-center text-sm"
            >
              Or Sign Up
            </Link>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
};

export default Login;
