"use client";

import React, { use } from "react"; // ✅ import use
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import SinglPost from "./_components/SinglPost";
import { useLocale } from "next-intl";
import { allBlogs } from "../_data/allBlogs";

export default function SinglBols({ params }) {
  const locale = useLocale();
  const { slug } = use(params); // ✅ unwrap the promise
  const id = slug.split("-")[0];
  const service = allBlogs[locale].find((s) => s.id === Number(id));

  if (!service) {
    return <div className="p-10 text-red-600">الخدمة غير موجودة</div>;
  }

  return (
    <div>
      <Header />
      <SinglPost id={id} service={service} />
      <Footer />
    </div>
  );
}
