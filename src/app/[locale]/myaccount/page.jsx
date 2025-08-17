"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";

function MyAccount() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const token = Cookies.get("token");
  const userId = Cookies.get("id");

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `https://api-gateway.camion-app.com/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch user data");

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [router, token, userId]);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    router.push("/auth/login");
  };

  if (!userData) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading user data...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <main>
      <Header />
      <div className="flex container mx-auto flex-col mt-4 gap-4 items-center min-h-screen px-4">
        {/* User info */}
        <div className="flex flex-col md:flex-row gap-4 shadow-2xl w-full max-w-md bg-white rounded-xl p-4 justify-start items-center">
          <img
            src="/assets/icons/frame.svg"
            alt="User Avatar"
            className="rounded-full object-cover w-16 h-16 md:w-[104px] md:h-[104px]"
          />
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
            <h1 className="text-xl font-bold">{userData.fullName}</h1>
            <p className="text-lg text-[#6C6C6C]">{userData.email}</p>
            <p className="text-lg text-[#6C6C6C] capitalize">{userData.role}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-md">
          <button
            type="button"
            onClick={handleLogout}
            className="flex justify-center gap-2 w-full bg-white shadow-2xl rounded-xl p-4 items-center"
          >
            <img src="/assets/icons/logout.svg" alt="Logout Icon" />
            <span className="text-sm">Logout</span>
          </button>

          <Link
            href="/affiliates"
            className="flex justify-center gap-2 w-full bg-white shadow-2xl rounded-xl p-4 items-center"
          >
            <img src="/assets/icons/archive.svg" alt="Affiliate Icon" />
            <span className="text-sm">Become Affiliates</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default MyAccount;
