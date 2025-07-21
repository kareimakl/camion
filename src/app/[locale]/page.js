import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Secbottom from "@/components/secBottom";
import Review from "@/components/review";
import WhyUs from "@/components/WhyUs";
import Client from "@/components/client";
import Contact from "@/components/contact";
import Project from "@/components/project";
import { getTranslations } from "next-intl/server";
import Head from "next/head";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Taj House – Software Solutions & Web Development Company</title>
        <meta
          name="description"
          content="Taj House is a software company based in Egypt, specializing in web development, custom software, and digital solutions using modern technologies like React, Next.js, and Node.js."
        />
        <meta
          name="keywords"
          content="Taj House, Software Solutions, Web Development, React, Next.js, Node.js, Egypt, Digital Solutions, Software Company"
        />
        <meta name="author" content="Taj House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tajhouse.com/" />
        <meta
          property="og:title"
          content="Taj House – Software Solutions & Web Development Company"
        />
        <meta
          property="og:description"
          content="Taj House is a software company offering modern web and mobile development solutions using React, Next.js, and Node.js."
        />
        <meta
          property="og:image"
          content="https://tajhouse.com/images/"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tajhouse.com/" />
        <meta
          name="twitter:title"
          content="Taj House – Software Solutions & Web Development Company"
        />
        <meta
          name="twitter:description"
          content="Build scalable and modern digital solutions with Taj House – your trusted software development partner."
        />
        <meta
          name="twitter:image"
          content="https://tajhouse.com/assets/logos/apple-touch-icon.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Project />
      <Client />
      <Review />
      <WhyUs />
      <Contact />
      <Secbottom />
      <Footer />
    </div>
  );
}
