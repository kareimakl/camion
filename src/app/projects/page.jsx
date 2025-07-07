import React from "react";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Project from "./_components/project";
import Join from "./_components/join";

export default function hero() {
  return (
    <div>
      <Header />
      <Project />
      <Join />
      <Footer />
    </div>
  );
}
