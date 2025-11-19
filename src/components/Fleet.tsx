import Navbar from './Navbar';
import { ChevronLeft, ChevronRight, Zap, Shield, TrendingUp, CheckCircle, Truck, Gauge, Fuel } from "lucide-react";
import { useState, useEffect } from "react";

// Importar todas las imágenes de camiones
import camion2 from "@/assets/camion2.png";
import camion3 from "@/assets/camion 3.png";
import camion4 from "@/assets/camion 4.png";
import camion5th from "@/assets/camion5th.png";

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
      <div className="pt-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full">
              <p className="text-blue-300 text-sm font-semibold">🚚 FLOTA PREMIUM</p>
            </div>

            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight">
              Nuestra Flota
            </h2>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Unidades especializadas, modernas y equipadas con tecnología de punta. Cada camión está diseñado para máxima seguridad, eficiencia y confiabilidad en tus cargas más importantes.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative mb-20">
            {/* Carousel Container */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
              {/* Content - Left Side */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white text-sm font-bold shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Modelo #{activeCategory + 1} de {fleetCategories.length}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                    {current.name}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {current.specs.map((spec, idx) => {
                    const Icon = spec.icon;
                    return (
                      <div key={idx} className="p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-blue-500/30 transition-all">
                        <Icon className="text-blue-400 mb-2" size={24} />
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{spec.label}</p>
                        <p className="text-white font-bold text-lg">{spec.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Capacity & Volume */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/50 rounded-xl backdrop-blur-sm">
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">Capacidad de Carga</p>
                    <p className="text-yellow-300 font-black text-3xl">{current.capacity}</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-500/50 rounded-xl backdrop-blur-sm">
                    <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">Volumen</p>
                    <p className="text-yellow-300 font-black text-3xl">{current.volume}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Características Principales:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {current.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-green-500/30 transition-all">
                        <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                        <span className="text-gray-200 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Image - Right Side */}
              <div className="relative rounded-2xl overflow-hidden h-96 md:h-[600px] flex items-center justify-center group">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${current.bgGradient}`}></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 p-[2px]">
                  <div className="absolute inset-0 rounded-2xl bg-slate-900"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-contain p-6 md:p-10 transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating corner badges */}
                <div className={`absolute top-6 right-6 px-4 py-2 bg-gradient-to-r ${current.color} rounded-full text-white font-bold text-sm shadow-xl z-20`}>
                  {current.capacity}
                </div>

                <div className="absolute bottom-6 left-6 px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-full text-white font-bold text-sm shadow-xl z-20">
                  {current.volume}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-6 mb-12">
              <button
                onClick={prevCategory}
                className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full transition-all transform hover:scale-125 shadow-xl active:scale-95 duration-300"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="flex items-center gap-3 px-8 py-3 bg-slate-800/80 border border-slate-700/50 rounded-full backdrop-blur-sm">
                <span className="text-white font-bold text-lg">{activeCategory + 1}</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-400 font-semibold">{fleetCategories.length}</span>
              </div>

              <button
                onClick={nextCategory}
                className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full transition-all transform hover:scale-125 shadow-xl active:scale-95 duration-300"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-4 mb-16">
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
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 w-10 h-4 shadow-lg shadow-blue-500/50"
                      : "bg-slate-700 hover:bg-slate-600 w-4 h-4"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Grid Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {fleetCategories.map((category, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveCategory(idx);
                  setTimeout(() => setAutoPlay(true), 3000);
                }}
                className={`relative cursor-pointer rounded-2xl overflow-hidden h-56 transition-all transform hover:scale-110 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-2 group ${
                  idx === activeCategory 
                    ? `border-cyan-400 ring-4 ring-cyan-400/50 shadow-2xl shadow-cyan-500/30` 
                    : "border-slate-700 hover:border-cyan-500/50"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-125 transition-transform duration-500 relative z-10"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                  <h4 className="text-white font-black text-center text-sm md:text-base drop-shadow-lg">
                    {category.name}
                  </h4>
                  <p className="text-cyan-300 text-xs mt-2 drop-shadow-lg font-bold text-center">
                    {category.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/30 rounded-3xl p-12 md:p-16 mb-12 backdrop-blur-sm">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
              ¿Por qué elegir <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">nuestra flota?</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 border border-yellow-500/30 rounded-2xl hover:border-yellow-500/60 transition-all group">
                <div className="p-4 bg-yellow-600/20 rounded-xl w-fit mb-4 group-hover:bg-yellow-600/30 transition-all">
                  <Zap className="text-yellow-400" size={40} />
                </div>
                <h4 className="text-white font-black text-2xl mb-3">Eficiencia Máxima</h4>
                <p className="text-gray-300 text-base leading-relaxed">Combustible optimizado y rutas inteligentes con GPS para ahorrar hasta 30% en costos operacionales</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-500/30 rounded-2xl hover:border-green-500/60 transition-all group">
                <div className="p-4 bg-green-600/20 rounded-xl w-fit mb-4 group-hover:bg-green-600/30 transition-all">
                  <Shield className="text-green-400" size={40} />
                </div>
                <h4 className="text-white font-black text-2xl mb-3">Seguridad 24/7</h4>
                <p className="text-gray-300 text-base leading-relaxed">GPS en tiempo real, monitoreo constante y sistemas de protección avanzados para tu carga</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-2xl hover:border-blue-500/60 transition-all group">
                <div className="p-4 bg-blue-600/20 rounded-xl w-fit mb-4 group-hover:bg-blue-600/30 transition-all">
                  <TrendingUp className="text-blue-400" size={40} />
                </div>
                <h4 className="text-white font-black text-2xl mb-3">Confiabilidad Total</h4>
                <p className="text-gray-300 text-base leading-relaxed">Mantenimiento preventivo constante y unidades certificadas para entrega garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}