import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/fondo.png";

export default function Hero() {
  const whatsappNumber = "51923987360";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full Background Image */}
      <img 
        src={heroImage} 
        alt="Transporte de carga profesional" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay - Light */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 md:px-12">
        <div className="w-full max-w-sm space-y-6">
          
          {/* Tagline */}
          <div className="inline-block">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
              ¡Más que un servicio, una solución!
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
              Soluciones Logísticas y Transporte de Carga
              <span className="block text-yellow-400 mt-1">Confiables para todo el Perú</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-white/90 leading-relaxed drop-shadow-md">
            Seguridad, puntualidad y tecnología al servicio de tus envíos.
            Monitoreo GPS 24/7 y atención personalizada.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all text-sm group shadow-lg"
            >
              Cotizar Servicio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
              className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all text-sm group shadow-lg"
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
              Atención por WhatsApp
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            {[
              { label: "GPS 24/7", value: "Tracking" },
              { label: "Seguro", value: "$12M" },
              { label: "Cobertura", value: "Nacional" },
              { label: "Experiencia", value: "Confiable" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20 hover:bg-white/20 transition-all shadow-lg"
              >
                <div className="text-lg md:text-xl font-bold text-yellow-400 mb-0.5">
                  {item.value}
                </div>
                <div className="text-xs text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}