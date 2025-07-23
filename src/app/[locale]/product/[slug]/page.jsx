import React from "react";
import ProductPage from "./_components/singleprodect";
import Youmayalsolike from "./_components/Youmayalsolike";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

function SingleProduct() {
  return (
    <div>
      <Header />
      <ProductPage />
      <Youmayalsolike />
      <Footer />
    </div>
  );
}
export default SingleProduct;
