import React from "react";
import AllProduct from "./_components/allProdect";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";
function Product() {
  return (
    <div className="overflow-hidden bg-[#f6f5f8]">
      <Header />
      <AllProduct />
      <Footer />
    </div>
  );
}

export default Product;
