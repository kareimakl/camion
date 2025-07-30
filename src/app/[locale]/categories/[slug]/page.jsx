import React from "react";
import ProductPage from "./_components/singleprodect";
import Youmayalsolike from "./_components/Youmayalsolike";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";
import ReviewSection from "./_components/ReviewSection";
import ProductDetails from "./_components/ProductDetails";

function SingleProduct() {
  return (
    <div>
      <Header />
      <ProductPage />
      <div className="flex md:flex-row flex-col">
        <ProductDetails />
        <ReviewSection />
      </div>

      <Youmayalsolike />
      <Footer />
    </div>
  );
}
export default SingleProduct;
