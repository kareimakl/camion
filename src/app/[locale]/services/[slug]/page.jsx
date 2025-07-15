"use client";
import React, { use } from "react"; // ✅ import use
import Footer from "@/components/layout/footer/footer";
import Nav from "@/components/layout/nav/nav";
import SinglService from "./_components/SinglService";
import Hero from "./_components/hero";
import { allServices } from "@/app/[locale]/services/_data/servicesData";
import { useLocale } from "next-intl";
import Join from "./_components/join";
import Client from "./_components/client";
import Services from "./_components/servicesSingle";
import ProjectsGallery from "@/components/project";
export default function ServicePage({ params }) {
  const locale = useLocale(); // ✅ must be inside the component
  const { slug } = use(params); // ✅ unwrap the promise

  const id = slug.split("-")[0];

  const service = allServices[locale].find((s) => s.id === Number(id));

  if (!service) {
    return <div className="p-10 text-red-600">الخدمة غير موجودة</div>;
  }

  return (
    <>
      <Nav />
      <Hero id={id} service={service} />
      <SinglService id={id} service={service} />
      <Services id={id} service={service} />
      <Client />
      <ProjectsGallery />
      <Join id={id} ServiceAll={allServices[locale]} />
      <Footer />
    </>
  );
}
