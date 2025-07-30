import React from "react";
import Categories from "./_components/Categories";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";
function CategoriesAll() {
  return (
    <div className="overflow-hidden bg-[#f6f5f8]">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default CategoriesAll;
