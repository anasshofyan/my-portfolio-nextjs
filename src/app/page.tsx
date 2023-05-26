import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Tools from "@/components/Tools";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ansomarfa-light">
      <Navbar />
      <div className="container mx-auto sm:px-16">
        <Hero />
        <Portfolio />
        <Tools />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
