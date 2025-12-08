import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronLeft, ChevronRight, Zap, Shield, TrendingUp, CheckCircle, Truck, Gauge, Fuel } from "lucide-react";
import { useState, useEffect } from "react";

// Importar todas las imágenes de camiones
import camion2 from "@/assets/camion2.png";
import camion3 from "@/assets/camion 3.png";
import camion4 from "@/assets/camion 4.png";
import camion5th from "@/assets/camion5th.png";
import fondo from "@/assets/fondo.png";

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const fleetCategories = [
    {
      name: "Camión 5 Tn",
      description: "Ideal para cargas pequeñas y medianas con máxima maniobrabilidad en ciudades",
      capacity: "5 Tn",
      volume: "20-40 M³",
      image: camion5th,
      color: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      accentColor: "blue",
      specs: [
        { label: "Velocidad Max", value: "120 km/h", icon: Gauge },
        { label: "Consumo", value: "8-10 L/100km", icon: Fuel },
        { label: "Eje", value: "Doble", icon: Truck }
      ],
      features: ["Combustible eficiente", "Fácil de estacionar", "Ideal para entregas rápidas", "GPS integrado"]
    },
    {
      name: "Camión 7-15 Tn",
      description: "Transporte versátil y confiable para la mayoría de cargas comerciales",
      capacity: "7-15 Tn",
      volume: "60-95 M³",
      image: camion2,
      color: "from-yellow-600 to-orange-600",
      bgGradient: "from-yellow-900/20 to-orange-900/20",
      accentColor: "yellow",
      specs: [
        { label: "Velocidad Max", value: "110 km/h", icon: Gauge },
        { label: "Consumo", value: "10-12 L/100km", icon: Fuel },
        { label: "Eje", value: "Triple", icon: Truck }
      ],
      features: ["Motor potente", "Carga versátil", "Tracción mejorada", "Suspensión resistente"]
    },
    {
      name: "Camión 7-15 Tn XL",
      description: "Gran volumen y eficiencia para cargas de gran dimensión",
      capacity: "7-15 Tn",
      volume: "100-170 M³",
      image: camion3,
      color: "from-green-600 to-emerald-600",
      bgGradient: "from-green-900/20 to-emerald-900/20",
      accentColor: "green",
      specs: [
        { label: "Velocidad Max", value: "100 km/h", icon: Gauge },
        { label: "Consumo", value: "12-14 L/100km", icon: Fuel },
        { label: "Eje", value: "Triple XL", icon: Truck }
      ],
      features: ["Máxima capacidad", "Compartimento amplio", "Clima controlado", "Seguridad Premium"]
    },
    {
      name: "Camión 15-30 Tn",
      description: "Para carga pesada especializada con máxima seguridad y estabilidad",
      capacity: "15-30 Tn",
      volume: "90-120 M³",
      image: camion4,
      color: "from-red-600 to-pink-600",
      bgGradient: "from-red-900/20 to-pink-900/20",
      accentColor: "red",
      specs: [
        { label: "Velocidad Max", value: "90 km/h", icon: Gauge },
        { label: "Consumo", value: "14-16 L/100km", icon: Fuel },
        { label: "Eje", value: "Cuádruple", icon: Truck }
      ],
      features: ["Carga pesada", "Freños ABS", "Estabilidad extrema", "Protección total"]
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % fleetCategories.length);
    }, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  const nextCategory = () => {
    setAutoPlay(false);
    setActiveCategory((prev) => (prev + 1) % fleetCategories.length);
    setTimeout(() => setAutoPlay(true), 3000);
  };

  const prevCategory = () => {
    setAutoPlay(false);
    setActiveCategory((prev) => (prev - 1 + fleetCategories.length) % fleetCategories.length);
    setTimeout(() => setAutoPlay(true), 3000);
  };

  const current = fleetCategories[activeCategory];

  return (
    <>
      <Navbar />
      <div className="pt-24 md:pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse hidden md:block"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse hidden md:block" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Header Section with Background Image */}
        <div 
          className="relative w-full overflow-hidden mb-12 sm:mb-16 md:mb-24 h-48 sm:h-64 md:h-96 flex flex-col justify-between bg-cover bg-center group"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

          {/* Content - Centered Title */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg text-center px-4">
              Nuestra Flota
            </h2>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Biography Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24 max-w-4xl mx-auto">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              Unidades especializadas, modernas y equipadas con tecnología de punta. Cada camión está diseñado para máxima seguridad, eficiencia y confiabilidad en tus cargas más importantes.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm hover:border-blue-500/60 transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1 sm:mb-2">15+</p>
                <p className="text-xs sm:text-sm text-gray-300">Unidades en operación</p>
              </div>
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm hover:border-cyan-500/60 transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-1 sm:mb-2">50+</p>
                <p className="text-xs sm:text-sm text-gray-300">Destinos cubiertos</p>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm hover:border-green-500/60 transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-green-300 mb-1 sm:mb-2">99.9%</p>
                <p className="text-xs sm:text-sm text-gray-300">Puntualidad garantizada</p>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm hover:border-purple-500/60 transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-purple-300 mb-1 sm:mb-2">24/7</p>
                <p className="text-xs sm:text-sm text-gray-300">GPS y monitoreo</p>
              </div>
            </div>
          </div>

          {/* Main Carousel */}
          <div className="relative mb-12 sm:mb-16 md:mb-20">
            {/* Carousel Container */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center mb-8 sm:mb-12 md:mb-16">
              {/* Content - Left Side */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Modelo #{activeCategory + 1} de {fleetCategories.length}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
                    {current.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {current.specs.map((spec, idx) => {
                    const Icon = spec.icon;
                    return (
                      <div key={idx} className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-lg sm:rounded-xl backdrop-blur-sm hover:border-blue-500/30 transition-all">
                        <Icon className="text-blue-400 mb-1 sm:mb-2" size={18} />
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">{spec.label}</p>
                        <p className="text-white font-bold text-sm md:text-base">{spec.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Capacity & Volume */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/50 rounded-lg sm:rounded-xl backdrop-blur-sm">
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">Capacidad de Carga</p>
                    <p className="text-yellow-300 font-black text-xl sm:text-2xl md:text-3xl">{current.capacity}</p>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-500/50 rounded-lg sm:rounded-xl backdrop-blur-sm">
                    <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">Volumen</p>
                    <p className="text-yellow-300 font-black text-xl sm:text-2xl md:text-3xl">{current.volume}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Características Principales:</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {current.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 sm:p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-green-500/30 transition-all">
                        <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                        <span className="text-gray-200 text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Image - Right Side */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden h-48 sm:h-64 md:h-96 lg:h-[600px] flex items-center justify-center group">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${current.bgGradient}`}></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg sm:rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 p-[2px]">
                  <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-slate-900"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-contain p-3 sm:p-4 md:p-6 lg:p-10 transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Floating corner badges */}
                <div className={`absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gradient-to-r ${current.color} rounded-full text-white font-bold text-xs sm:text-sm shadow-xl z-20`}>
                  {current.capacity}
                </div>

                <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-full text-white font-bold text-xs sm:text-sm shadow-xl z-20">
                  {current.volume}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              <button
                onClick={prevCategory}
                className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full transition-all transform hover:scale-110 shadow-xl active:scale-95 duration-300"
              >
                <ChevronLeft size={20} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
              </button>

              <div className="flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-slate-800/80 border border-slate-700/50 rounded-full backdrop-blur-sm">
                <span className="text-white font-bold text-base sm:text-lg">{activeCategory + 1}</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-400 font-semibold text-base sm:text-lg">{fleetCategories.length}</span>
              </div>

              <button
                onClick={nextCategory}
                className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full transition-all transform hover:scale-110 shadow-xl active:scale-95 duration-300"
              >
                <ChevronRight size={20} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 md:mb-20">
              {fleetCategories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoPlay(false);
                    setActiveCategory(idx);
                    setTimeout(() => setAutoPlay(true), 3000);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeCategory
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 w-8 sm:w-10 h-3 sm:h-4 shadow-lg shadow-blue-500/50"
                      : "bg-slate-700 hover:bg-slate-600 w-3 sm:w-4 h-3 sm:h-4"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Grid Preview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-24">
            {fleetCategories.map((category, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveCategory(idx);
                  setTimeout(() => setAutoPlay(true), 3000);
                }}
                className={`relative cursor-pointer rounded-lg sm:rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 transition-all transform hover:scale-110 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-2 group ${
                  idx === activeCategory 
                    ? `border-cyan-400 ring-4 ring-cyan-400/50 shadow-2xl shadow-cyan-500/30` 
                    : "border-slate-700 hover:border-cyan-500/50"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain p-2 sm:p-4 md:p-6 group-hover:scale-125 transition-transform duration-500 relative z-10"
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                  <h4 className="text-white font-black text-center text-xs sm:text-sm md:text-base drop-shadow-lg">
                    {category.name}
                  </h4>
                  <p className="text-cyan-300 text-xs mt-1 drop-shadow-lg font-bold text-center">
                    {category.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mb-6 sm:mb-10 md:mb-12 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-center">
              ¿Por qué elegir <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">nuestra flota?</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 border border-yellow-500/30 rounded-lg sm:rounded-2xl hover:border-yellow-500/60 transition-all group">
                <div className="p-2 sm:p-3 md:p-4 bg-yellow-600/20 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-yellow-600/30 transition-all">
                  <Zap className="text-yellow-400" size={32} />
                </div>
                <h4 className="text-white font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Eficiencia Máxima</h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">Combustible optimizado y rutas inteligentes con GPS para ahorrar hasta 30% en costos operacionales</p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-500/30 rounded-lg sm:rounded-2xl hover:border-green-500/60 transition-all group">
                <div className="p-2 sm:p-3 md:p-4 bg-green-600/20 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-green-600/30 transition-all">
                  <Shield className="text-green-400" size={32} />
                </div>
                <h4 className="text-white font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Seguridad 24/7</h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">GPS en tiempo real, monitoreo constante y sistemas de protección avanzados para tu carga</p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-lg sm:rounded-2xl hover:border-blue-500/60 transition-all group">
                <div className="p-2 sm:p-3 md:p-4 bg-blue-600/20 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-blue-600/30 transition-all">
                  <TrendingUp className="text-blue-400" size={32} />
                </div>
                <h4 className="text-white font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Confiabilidad Total</h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">Mantenimiento preventivo constante y unidades certificadas para entrega garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}