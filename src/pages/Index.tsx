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

      {/* HERO */}
      <section id="top">
        <Hero />
      </section>

      {/* NOSOTROS */}
      <section id="about">
        <About />
      </section>

      {/* SERVICIOS */}
      <section id="services">
        <Services />
      </section>

      {/* FLOTA */}
      <section id="fleet">
        <Fleet />
      </section>

      {/* TECNOLOGÍA */}
      <section id="technology">
        <Technology />
      </section>

      {/* SEGURO */}
      <section id="insurance">
        <Insurance />
      </section>

      {/* WHATSAPP INFO */}
      <section id="whatsapp-info">
        <WhatsAppSection />
      </section>

      {/* CONTACTO */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOTÓN FLOTANTE */}
      <WhatsAppFloat />

    </main>
  );
};

export default Index;
