import { MessageCircle, ArrowRight, Truck } from "lucide-react";
import heroImage from "@/assets/aqui.png";
import logo from "@/assets/aqui.png";

export default function Hero() {
  const whatsappNumber = "51999999999";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-950">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="max-w-md">
            <div className="inline-block mb-6">
              <span className="text-yellow-400 font-bold text-xs md:text-sm uppercase tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                ¡Más que un servicio, una solución!
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Soluciones Logísticas y Transporte de Carga
              <span className="block text-yellow-400 mt-2">Confiables para todo el Perú</span>
            </h1>

            <p className="text-sm md:text-base text-white/90 mb-8 leading-relaxed drop-shadow-md">
              Seguridad, puntualidad y tecnología al servicio de tus envíos.
              Monitoreo GPS 24/7 y atención personalizada.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all text-base group shadow-lg"
              >
                Cotizar Servicio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all text-base group shadow-lg"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                Atención por WhatsApp
              </button>
            </div>
          </div>

          {/* Right Side - Logo + Trust Indicators */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-8">
                <img 
                  src={logo} 
                  alt="HURIANKA Logo" 
                  className="h-32 md:h-56 object-contain"
                />
                <div className="text-left">
                  <h2 className="text-4xl md:text-6xl font-bold text-white">HURIANKA</h2>
                  <p className="text-yellow-400 text-base md:text-2xl">Soluciones Logísticas</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { label: "GPS 24/7", value: "Tracking" },
                { label: "Seguro", value: "$12M" },
                { label: "Cobertura", value: "Nacional" },
                { label: "Experiencia", value: "Confiable" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all shadow-lg"
                >
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
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
}