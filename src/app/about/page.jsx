import Footer from "@/components/layout/footer/footer";
import Nav from "@/components/layout/nav/nav";
import HeroAbout from "@/components/heroAbout";
import Review from "@/components/review";
import Client from "./_components/client";
import Fsq from "./_components/fsq";
export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <HeroAbout />
      <Review />
      <Client />
      <Fsq/>
      <Footer />
    </div>
  );
}
