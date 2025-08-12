"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { API_ENDPOINTS } from "../api/api";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";
import Swal from "sweetalert2";
import Link from "next/link";

export default function AffiliateRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    nationality: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [affiliateStatus, setAffiliateStatus] = useState(null);
  const countries = countryList().getData();

  useEffect(() => {
    const fetchAffiliateStatus = async () => {
      try {
        const token = getTokenFromCookies();
        if (!token) throw new Error("Token not found in cookies");

        const res = await fetch(`${API_ENDPOINTS.REQUESTSTATUS}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setAffiliateStatus(data.status);

          // نخزن الحالة الجديدة في localStorage
          localStorage.setItem("affiliateData", JSON.stringify(data));
        } else {
          throw new Error("Failed to fetch status");
        }
      } catch (error) {
        console.error(error);

        // fallback للـ localStorage لو الـ API فشل
        const storedData = localStorage.getItem("affiliateData");
        if (storedData) {
          const parsed = JSON.parse(storedData);
          setAffiliateStatus(parsed.status);
        }
      }
    };

    fetchAffiliateStatus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getTokenFromCookies = () => {
    const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = getTokenFromCookies();
      if (!token) throw new Error("Token not found in cookies");

      const bodyData = {
        fullName: formData.fullName,
        gender: formData.gender,
        nationality: formData.nationality,
        bio: formData.bio,
      };

      const res = await fetch(`${API_ENDPOINTS.REQUEST}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) throw new Error("Failed to send request");

      const data = await res.json();

      localStorage.setItem("affiliateData", JSON.stringify(data));

      Swal.fire({
        html: `
    <main class="w-full max-w-md p-6 bg-white rounded-2xl flex flex-col items-center text-center">
      <img src="/assets/images/check 3.svg" alt="success" class="w-24 h-24 rounded-full mb-4" />
      <p class="text-lg font-medium mb-4">Your booking has been successfully added</p>
      <div class="flex items-center justify-center gap-4">
        <a href="/shop" class="text-[#B92123] border border-[#B92123] rounded-lg py-2 px-6 font-semibold hover:bg-[#B92123] hover:text-white transition">
          Go to Home
        </a>
      </div>
    </main>
  `,
        showConfirmButton: false,
        width: 400,
        padding: 0,
      });

      setAffiliateStatus(data.status);
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the request");
    } finally {
      setLoading(false);
    }
  };

  if (affiliateStatus) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
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
            </h1>

            {affiliateStatus === "approved" && (
              <div>
                <p>We are honored to have you join our team of marketers.</p>{" "}
                <p>
                  We offer a simple and effective affiliate marketing system
                  based on unique codes assigned to each marketer. You can share
                  your code with your audience and earn a commission on every
                  sale made using it. Commissions are transferred directly to
                  your wallet without any intermediaries or delays, ensuring
                  fast and easy payouts. We provide a wide range of products in
                  various fields, so every marketer can find what suits their
                  audience and achieve the highest sales rate. Our goal is to
                  help you earn a continuous income through minimal effort and
                  smart marketing.
                </p>
                <Link
                  href="/coupons"
                  className="inline-block mt-6 text-white bg-[#B92123] hover:bg-[#a5181a] transition-colors rounded-lg py-3 px-8 font-semibold shadow-md"
                >
                  Start Now
                </Link>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 min-h-screen container p-4"
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
        <div className="flex flex-row justify-between gap-4">
          <button
            type="button"
            className={`p-3 border rounded w-full ${
              formData.gender === "male" ? "bg-red-200" : ""
            }`}
            onClick={() => setFormData({ ...formData, gender: "male" })}
          >
            Male
          </button>
          <button
            type="button"
            className={`p-3 border rounded w-full ${
              formData.gender === "female" ? "bg-red-200" : ""
            }`}
            onClick={() => setFormData({ ...formData, gender: "female" })}
          >
            Female
          </button>
        </div>
        <Select
          instanceId="country-select"
          options={countries}
          placeholder="Select nationality"
          value={countries.find((c) => c.label === formData.nationality)}
          onChange={(val) =>
            setFormData({ ...formData, nationality: val.label })
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
          className="bg-red-600 cursor-pointer text-white p-3 rounded w-full"
        >
          {loading ? "Submitting..." : "Next"}
        </button>
      </form>
      <Footer />
    </main>
  );
}
