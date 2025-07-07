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
export default function Home() {
  return (
    <div className="overflow-hidden">
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
