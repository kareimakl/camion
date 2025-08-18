import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import Hero from "@/componentsedit/hero";
import Story from "@/componentsedit/story";
import Head from "next/head";
import Categories from "@/componentsedit/categories";
import RecommendedProducts from "@/componentsedit/RecommendedProducts";
import Offer from "@/componentsedit/offer";
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
export default async function HomePage() {
  return (
    <div className=" bg-[#f6f5f8]">
      <Head>
        <title>Camion – Store for High-Quality Products at Great Prices</title>
        <meta
          name="description"
          content="Camion is your trusted online store offering high-quality products at great prices. Shop a wide range of items with secure checkout and fast delivery."
        />
        <meta
          name="keywords"
          content="Camion, Online Store, High Quality Products, Affordable Prices, Shopping, Egypt, E-commerce, Buy Online"
        />
        <meta name="author" content="Camion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://camion-app.com/" />
        <meta
          property="og:title"
          content="Camion – Store for High-Quality Products at Great Prices"
        />
        <meta
          property="og:description"
          content="Discover Camion Store – premium quality products at affordable prices. Shop now and enjoy the best deals online."
        />
        <meta
          property="og:image"
          content="https://camion-app.com/assets/icons/apple-icon.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://camion-app.com/" />
        <meta
          name="twitter:title"
          content="Camion – Store for High-Quality Products at Great Prices"
        />
        <meta
          name="twitter:description"
          content="Shop with Camion Store – high-quality products at the best prices with fast delivery and secure checkout."
        />
        <meta
          name="twitter:image"
          content="https://camion-app.com/assets/icons/apple-icon.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Story />
      <Hero />
      <Categories />
      <Offer />
      <RecommendedProducts />
      <Footer />
    </div>
  );
}
