"use client";

import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Services from "./_components/services";
import { allServices } from "./_data/servicesData";
import { useLocale } from "next-intl";
export default function Home() {
  const locale = useLocale();
  const servicesAll = allServices[locale];

  return (
    <div className="overflow-hidden">
      <Header />
      <Services servicesAll={servicesAll} />
      <Footer />
    </div>
  );
}
