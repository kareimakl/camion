"use client";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPlay, FaBookmark } from "react-icons/fa";
import { API_ENDPOINTS } from "../api/api";
import Cookies from "js-cookie";

export default function AccountPage() {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("token");

  const fetchCodes = async () => {
    if (!token) {
      toast.warn("Please login first", { position: "top-center" });
      setTimeout(() => router.push("/auth/signup"), 2000);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(API_ENDPOINTS.COUPON, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 403) {
        Swal.fire(
          "Access Denied",
          "You don't have permission to access codes",
          "error"
        );
        return;
      }

      const data = await res.json();
      if (!Array.isArray(data) && !data.code) {
        Swal.fire("Error", "No codes found", "warning");
        setCodes([]);
        return;
      }

      setCodes(Array.isArray(data) ? data : [data]);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch codes from server", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  const showMyCodes = () => {
    if (loading) {
      Swal.fire("Loading...", "", "info");
      return;
    }
    if (codes.length === 0) {
      Swal.fire("No codes available", "", "warning");
      return;
    }

    const codeCards = codes
      .map(
        (c) => `
          <div style="
            border:1px solid #e5e7eb;
            border-radius:12px;
            padding:16px;
            margin:8px 0;
            text-align:left;
            background:#fff;
            box-shadow:0 2px 6px rgba(0,0,0,0.05);
          ">
            <p style="margin:0; font-weight:bold; font-size:16px; color:#B92123;">
              ${c.code}
            </p>
            <p style="margin:6px 0 0; font-size:14px; color:#374151;">
              Discount: <strong>${c.discountPercentage}%</strong>
            </p>
          </div>
        `
      )
      .join("");

    Swal.fire({
      title: "🎟️ My Codes",
      html: `<div style="display:flex; flex-direction:column; gap:10px;">${codeCards}</div>`,
      confirmButtonText: "Close",
      width: 400,
      background: "#f9fafb",
    });
  };

  const createCode = () => {
    Swal.fire({
      title: "Create New Code",
      html: `
        <input id="newCode" class="swal2-input" placeholder="Enter code" />
        <input id="discount" type="number" class="swal2-input" placeholder="Discount percentage (e.g. 10)" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const newCode = document.getElementById("newCode").value.trim();
        const discount = document.getElementById("discount").value.trim();
        if (!newCode || !discount) {
          Swal.showValidationMessage("Please enter both code and discount");
          return false;
        }
        return { newCode, discount };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!token) {
          Swal.fire("Error", "Token not found, please log in", "error");
          return;
        }
        try {
          const res = await fetch(API_ENDPOINTS.NEWCOUPON, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code: result.value.newCode,
              discountPercentage: Number(result.value.discount),
            }),
          });

          if (res.ok) {
            Swal.fire("Saved", "Code created successfully", "success");
            fetchCodes();
          } else {
            const errorData = await res.json();
            Swal.fire(
              "Error",
              errorData.message || "Failed to create code",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while connecting to the server",
            "error"
          );
        }
      }
    });
  };

  return (
    <main>
      <Header />
      <div className="min-h-screen flex flex-col items-center px-4 bg-gray-50">
        <div className="w-full max-w-md mt-8">
          <h1 className="text-center text-lg font-medium mb-4">
            Affiliate Account
          </h1>
          <div className="flex flex-col gap-4">
            <button
              onClick={showMyCodes}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-200"
            >
              <span className="text-gray-800">My Codes</span>
              <FaPlay className="text-gray-500" />
            </button>
            <button
              onClick={createCode}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-200"
            >
              <span className="text-gray-800">Create Code</span>
              <FaBookmark className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
