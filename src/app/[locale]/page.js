import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Head from "next/head";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import RecommendedProducts from "@/components/RecommendedProducts";
import ProductCardHome from "@/components/ProductCardHome";
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
export default async function HomePage() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Camion – Software Solutions & Web Development Company</title>
        <meta
          name="description"
          content="Camion is a software company based in Egypt, specializing in web development, custom software, and digital solutions using modern technologies like React, Next.js, and Node.js."
        />
        <meta
          name="keywords"
          content="Camion, Software Solutions, Web Development, React, Next.js, Node.js, Egypt, Digital Solutions, Software Company"
        />
        <meta name="author" content="Camion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://camionapp.com/" />
        <meta
          property="og:title"
          content="Camion – Software Solutions & Web Development Company"
        />
        <meta
          property="og:description"
          content="Camion is a software company offering modern web and mobile development solutions using React, Next.js, and Node.js."
        />
        <meta
          property="og:image"
          content="https://camionapp.com/icons/apple-icon.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://camionapp.com/" />
        <meta
          name="twitter:title"
          content="Camion – Software Solutions & Web Development Company"
        />
        <meta
          name="twitter:description"
          content="Build scalable and modern digital solutions with Camion – your trusted software development partner."
        />
        <meta
          name="twitter:image"
          content="https://camionapp.com/assets/assets/icons/apple-icon.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Banner />
      <FeaturedProducts />
      <Categories />
      <ProductCardHome />
      <RecommendedProducts />
      <Footer />
    </div>
  );
}
