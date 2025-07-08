import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Services from "./_components/services";
import { allServices } from "../services/_data/servicesData";
export default function Home() {
  const servicesAll = allServices;
  return (
    <div className="overflow-hidden">
      <Header />
      <Services servicesAll={servicesAll} />
      <Footer />
    </div>
  );
}
