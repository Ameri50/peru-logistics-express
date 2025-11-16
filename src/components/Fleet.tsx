import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Importar todas las imágenes de camiones
import camion2 from "@/assets/camion2.png";
import camion3 from "@/assets/camion 3.png";
import camion4 from "@/assets/camion 4.png";
import camion5th from "@/assets/camion5th.png";

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState(0);

  const fleetCategories = [
    {
      name: "Camión 5 Tn",
      description: "Capacidad 20-40 M³ | Ideal para cargas pequeñas y medianas",
      capacity: "5 Tn",
      volume: "20-40 M³",
      image: camion5th,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Camión 7-15 Tn",
      description: "Capacidad 60-95 M³ | Transporte versátil y confiable",
      capacity: "7-15 Tn",
      volume: "60-95 M³",
      image: camion2,
      color: "from-yellow-600 to-yellow-700"
    },
    {
      name: "Camión 7-15 Tn XL",
      description: "Capacidad 100-170 M³ | Gran volumen y eficiencia",
      capacity: "7-15 Tn",
      volume: "100-170 M³",
      image: camion3,
      color: "from-green-600 to-green-700"
    },
    {
      name: "Camión 15-30 Tn",
      description: "Capacidad 90-120 M³ | Para carga pesada especializada",
      capacity: "15-30 Tn",
      volume: "90-120 M³",
      image: camion4,
      color: "from-red-600 to-red-700"
    }
  ];

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % fleetCategories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + fleetCategories.length) % fleetCategories.length);
  };

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra Flota
          </h2>
          <p className="text-gray-400 text-lg">
            Unidades especializadas para cada tipo de carga
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Content - Left Side */}
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {fleetCategories[activeCategory].name}
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-8">
                {fleetCategories[activeCategory].description}
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-yellow-400 font-bold text-2xl">{fleetCategories[activeCategory].capacity}</p>
                  <p className="text-gray-400 text-sm">Capacidad</p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold text-2xl">{fleetCategories[activeCategory].volume}</p>
                  <p className="text-gray-400 text-sm">Volumen</p>
                </div>
              </div>
            </div>

            {/* Main Image - Right Side */}
            <div className="relative rounded-lg overflow-hidden h-80 md:h-[450px] flex items-center justify-center">
              <img
                src={fleetCategories[activeCategory].image}
                alt={fleetCategories[activeCategory].name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={prevCategory}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCategory}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {fleetCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeCategory
                    ? "bg-yellow-400 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fleetCategories.map((category, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`relative cursor-pointer rounded-lg overflow-hidden h-32 transition-all transform hover:scale-105 bg-blue-950 flex items-center justify-center border-2 ${
                idx === activeCategory ? "border-yellow-400 ring-4 ring-yellow-400" : "border-gray-700"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 bg-gradient-to-t from-black/60 to-transparent">
                <h4 className="text-white font-bold text-center text-xs md:text-sm drop-shadow-lg">{category.name}</h4>
                <p className="text-yellow-300 text-xs mt-1 drop-shadow-lg">{category.capacity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}