import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Technology from "@/components/Technology";
import Insurance from "@/components/Insurance";
import WhatsAppSection from "@/components/WhatsAppSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Technology />
      <Insurance />
      <WhatsAppSection />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
