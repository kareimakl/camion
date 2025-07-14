"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { Globe } from "lucide-react";
import React from "react";

export const GlobalLanguage = ({ className = "" }) => {
  const { pathname, router } = UseSearchParamsHook();

  const changeLanguage = () => {
    router.push(pathname === `/ar` ? `/en` : `/ar`);
  };

  const isArabic = pathname === "/ar";

  return (
    <button
      onClick={changeLanguage}
      className={`flex items-center  cursor-pointer gap-1 px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition-all text-sm font-medium ${className}`}
    >
      {isArabic ? (
        <>
          <Globe size={18} strokeWidth={1} />
          En
        </>
      ) : (
        <>
          Ar
          <Globe size={18} strokeWidth={1} />
        </>
      )}
    </button>
  );
};
