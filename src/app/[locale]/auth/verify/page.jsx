"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_ENDPOINTS } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyCode = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = Cookies.get("email");
    const savedPhone = Cookies.get("phone");

    if (!savedEmail || !savedPhone) {
      router.push("/auth/login");
    } else {
      setEmail(savedEmail);
      setPhone(savedPhone);
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINTS.VERIFY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, code }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Verification failed");

      Cookies.set("token", data.accessToken, { expires: 7 });
      Cookies.set("id", data.user.id);
      Cookies.set("email", data.user.email);
      Cookies.set("fullName", data.user.fullName);
      Cookies.set("phone", data.user.phone);

      toast.success("Verification successful! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      toast.error(err.message || "Something went wrong", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    toast.info("Resending code...", { position: "top-center" });
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
            Verify Code
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Please enter the 6-digit code sent to:
            <br />
            <span className="text-[#B92123] font-semibold">{email}</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="code"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Verification Code
              </label>
              <input
                type="text"
                id="code"
                maxLength={6}
                placeholder="123456"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="w-full text-center text-lg tracking-widest rounded-lg border border-gray-300 p-3 focus:border-[#B92129] focus:ring-2 focus:ring-[#B92129] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-[#B92123] hover:bg-[#B92129] text-white rounded-lg py-3 text-sm font-medium shadow-sm transition-colors disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>

            <div className="text-center">
              <button
                type="button"
                className="text-[#B92123] cursor-pointer text-sm hover:underline"
                onClick={handleResend}
              >
                Resend Code
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
};

export default VerifyCode;
