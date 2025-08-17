"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { API_ENDPOINTS } from "../api/api";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// ===== Utils =====
const getTokenFromCookies = () => {
  const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
};

export default function AffiliateRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    nationality: "",
    bio: "",
  });
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);
  const [loading, setLoading] = useState(false);
  const [affiliateStatus, setAffiliateStatus] = useState(null);
  const countries = countryList().getData();

  // ===== Fetch affiliate status =====
  useEffect(() => {
    const fetchAffiliateStatus = async () => {
      try {
        const token = getTokenFromCookies();
        if (!token) {
          toast.warn("Please login first", { position: "top-center" });
          setTimeout(() => router.push("/auth/signup"), 2000);
          return;
        }

        const res = await fetch(API_ENDPOINTS.REQUESTSTATUS, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          if (data.message === "Affiliate request not found") {
            console.warn("No affiliate request yet, show the form");
            setAffiliateStatus(null);
            return;
          }
          throw new Error(`Request failed: ${res.status}`);
        }

        setAffiliateStatus(data.status);
        localStorage.setItem("affiliateData", JSON.stringify(data));

        if (data.status === "approved" && data.token) {
          Cookies.set("token", data.token, { expires: 7 });
          console.log("✅ Token updated after approval:", data.token);
        }
        // Show welcome message ONCE if approved
        if (data.status === "approved") {
          const hasSeenMessage = localStorage.getItem("affiliateWelcomeSeen");
          if (!hasSeenMessage) {
            setShowWelcome(true);
            localStorage.setItem("affiliateWelcomeSeen", "true");
          }
        }
      } catch (error) {
        console.error("Fetch Affiliate Status Error:", error.message);
        const storedData = localStorage.getItem("affiliateData");
        if (storedData) {
          const parsed = JSON.parse(storedData);
          setAffiliateStatus(parsed.status);
        }
      }
    };

    fetchAffiliateStatus();
  }, [router]);

  // ===== Handlers =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = getTokenFromCookies();
      if (!token) {
        toast.warn("Please sign in or create an account first", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          router.push("/auth/signup");
        }, 2000);
        return;
      }

      const res = await fetch(API_ENDPOINTS.REQUEST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send request");

      const data = await res.json();
      localStorage.setItem("affiliateData", JSON.stringify(data));
      setAffiliateStatus(data.status);

      Swal.fire({
        html: `
          <main class="w-full max-w-md p-6 bg-white rounded-2xl flex flex-col items-center text-center">
            <img src="/assets/images/check 3.svg" alt="success" class="w-24 h-24 mb-4" />
            <p class="text-lg font-medium mb-4">Your request has been successfully submitted</p>
            <a href="/shop" class="text-[#B92123] border border-[#B92123] rounded-lg py-2 px-6 font-semibold hover:bg-[#B92123] hover:text-white transition">
              Go to Home
            </a>
          </main>
        `,
        showConfirmButton: false,
        width: 400,
        padding: 0,
      });
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the request");
    } finally {
      setLoading(false);
    }
  };

  // ===== Render =====
  if (affiliateStatus) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
            <h1 className="text-2xl flex flex-col gap-2 font-bold text-gray-800 mb-4">
              Your Affiliate Request Status:
              <span
                className={`ml-2 ${
                  affiliateStatus === "approved"
                    ? "text-green-600"
                    : affiliateStatus === "pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {affiliateStatus}
              </span>
              {affiliateStatus === "approved" && (
                <Link
                  href="/coupons"
                  className="inline-block mt-6 text-white bg-[#B92123] hover:bg-[#a5181a] transition-colors rounded-lg py-3 px-8 font-semibold shadow-md"
                >
                  Start Now
                </Link>
              )}
            </h1>

            {affiliateStatus === "approved" && showWelcome && (
              <>
                <p>We are honored to have you join our team of marketers.</p>
                <p className="mt-2 text-sm text-gray-600">
                  We offer a simple and effective affiliate marketing system
                  based on unique codes assigned to each marketer. You can share
                  your code with your audience and earn a commission on every
                  sale made using it. Payments are transferred directly to your
                  wallet quickly and easily.
                </p>
                <Link
                  href="/coupons"
                  className="inline-block mt-6 text-white bg-[#B92123] hover:bg-[#a5181a] transition-colors rounded-lg py-3 px-8 font-semibold shadow-md"
                >
                  Start Now
                </Link>
              </>
            )}
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // ===== If no request yet -> show form =====
  return (
    <main>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 min-h-screen container p-4 max-w-lg mx-auto"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <div className="flex gap-4">
          {["male", "female"].map((g) => (
            <button
              key={g}
              type="button"
              className={`p-3 border rounded w-full ${
                formData.gender === g ? "bg-red-200" : ""
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, gender: g }))}
            >
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </button>
          ))}
        </div>

        <Select
          instanceId="country-select"
          options={countries}
          placeholder="Select nationality"
          value={countries.find((c) => c.label === formData.nationality)}
          onChange={(val) =>
            setFormData((prev) => ({ ...prev, nationality: val.label }))
          }
        />

        <textarea
          name="bio"
          placeholder="Short bio"
          value={formData.bio}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          maxLength={200}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 text-white p-3 rounded w-full hover:bg-red-700 transition-colors"
        >
          {loading ? "Submitting..." : "Next"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
      <Footer />
    </main>
  );
}
