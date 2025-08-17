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
      <div className="flex flex-col gap-2 min-h-screen container justify-start items-center">
        <div className="flex gap-[20px] shadow-2xl md:w-[50%] md:mt-4 mt-10 bg-white rounded-xl p-3 justify-start items-center">
          <img
            src="/assets/icons/frame.svg"
            alt="User Avatar"
            className="rounded-full object-cover h-[104px] w-[104px]"
          />
          <div className="flex flex-col justify-center items-start text-start">
            <h1 className="text-xl font-bold mt-4">{userData.fullName}</h1>
            <p className="text-lg text-[#6C6C6C]">{userData.email}</p>
            <p className="text-lg text-[#6C6C6C] capitalize">{userData.role}</p>
          </div>
        </div>

        {/* {[
          {
            icon: "/assets/icons/global.svg",
            title: "My Account",
            desc: "Welcome to your account page",
          },
          {
            icon: "/assets/icons/empty-wallet (1).svg",
            title: "My Account",
            desc: "Welcome to your account page",
          },
          {
            icon: "/assets/icons/play.svg",
            title: "My Account",
            desc: "Welcome to your account page",
          },
          {
            icon: "/assets/icons/archive.svg",
            title: "My Account",
            desc: "Welcome to your account page",
          },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="flex flex-row rounded-xl p-3 py-5 shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center text-center"
          >
            <div className="flex gap-2">
              <img src={icon} alt="" />
              <h1 className="text-sm">{title}</h1>
            </div>
            <p className="text-xs text-[#6C6C6C]">{desc}</p>
          </div>
        ))} */}

        <div className="flex cursor-pointer flex-row rounded-xl p-3 py-5 shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center text-center">
          <button type="button" onClick={handleLogout} className="flex gap-2">
            <img src="/assets/icons/logout.svg" alt="Logout Icon" />
            <h1 className="text-sm">Logout</h1>
          </button>
        </div>
        <div className="flex cursor-pointer flex-row rounded-xl p-3 py-5 shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center text-center">
          <Link
            href="/affiliates/request"
            type="button"
            onClick={handleLogout}
            className="flex gap-2"
          >
            <img src="/assets/icons/archive.svg" alt="Logout Icon" />
            <h1 className="text-sm cursor-pointer">Become Affiliates</h1>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default MyAccount;
