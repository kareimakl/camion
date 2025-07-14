import React from "react";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Client from "./_components/client";
import Join from "./_components/join";

export default function hero() {
  return (
    <div>
      <Header />
      <Client />
      <Join />
      <Footer />
    </div>
  );
}
