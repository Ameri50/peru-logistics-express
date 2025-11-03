import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  const whatsappNumber = "51999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.");
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Transporte de carga profesional HURIANKA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="text-secondary font-bold text-sm md:text-base uppercase tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              ¡Más que un servicio, una solución!
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Soluciones Logísticas y Transporte de Carga
            <span className="block text-secondary mt-2">Confiables para todo el Perú</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Seguridad, puntualidad y tecnología al servicio de tus envíos.
            Monitoreo GPS 24/7 y atención personalizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="xl" 
              variant="hero"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Cotizar Servicio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="xl" 
              variant="whatsapp"
              className="group"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="group-hover:scale-110 transition-transform" />
              Atención por WhatsApp
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: "GPS 24/7", value: "Tracking" },
              { label: "Seguro", value: "$12M" },
              { label: "Cobertura", value: "Nacional" },
              { label: "Experiencia", value: "Confiable" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">{item.value}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
