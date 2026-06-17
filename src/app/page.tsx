import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Service from "./components/service";
import Partners from "./components/partners";
import Choice from "./components/choice";
import LogoMarquee from "./components/logoMarquee";
import "./globals.css";
import Benefits from "./components/benefits";
import Clients from "./components/clients";
import CaseStudies from "./components/CaseStudies";
import ContactSection from "./components/contactSection";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      {/* Navbar — section wrapper nahi, directly position karo */}
      <div className="relative z-[9999]">
        <Navbar />
      </div>

      <Hero />
      <Service />
      <Partners />
      <Choice />
      <LogoMarquee />
      <Benefits />
      <Clients />
      <CaseStudies />
      <ContactSection />
      <Footer />
     
    </>
  );
}