"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight, Menu, X, Search } from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const whatsappNumber = "51923987360";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar información sobre sus servicios de transporte y logística."
  );

  // Secciones disponibles
  const sections = [
    { label: "Servicios", id: "services" },
    { label: "Nosotros", id: "about" },
    { label: "Flota", id: "fleet" },
    { label: "Tecnología", id: "technology" },
    { label: "Seguro", id: "insurance" },
    { label: "Contacto", id: "contact" },
  ];

  // Función scroll suave
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  // Lógica de búsqueda
  const handleSearch = () => {
    const match = sections.find((s) =>
      s.label.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      scrollTo(match.id);
      setSearchOpen(false);
      setQuery("");
    } else {
      alert("No se encontró: " + query);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1
            onClick={() => scrollTo("top")}
            className="text-white font-bold text-xl tracking-wide cursor-pointer"
          >
            
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-white">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-yellow-400"
              >
                {item.label}
              </button>
            ))}

            <Search
              onClick={() => setSearchOpen(!searchOpen)}
              className="cursor-pointer hover:text-yellow-400"
              size={20}
            />
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Modern Search Bar */}
        {searchOpen && (
          <div className="px-6 py-3 bg-black/80 backdrop-blur-xl border-t border-white/10 animate-fadeIn">
            <div className="relative max-w-xl mx-auto">
              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
                <Search size={20} className="text-white/70" />

                <input
                  className="w-full bg-transparent text-white ml-3 outline-none"
                  placeholder="Buscar servicios, flota, tecnología..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button
                  onClick={handleSearch}
                  className="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md font-semibold transition"
                >
                  Buscar
                </button>

                <button
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 text-white/60 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/70 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-white">
            {sections.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}

            <button className="flex gap-2 items-center" onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={20} /> Buscar
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative w-full h-screen overflow-hidden">

        <img src="/fondo.png" alt="Transporte de carga" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 w-full h-full flex items-center px-6 md:px-16">
          <div className="max-w-xl space-y-6 mt-20">

            {/* Badge */}
            <span className="text-xs font-semibold text-black bg-yellow-500 px-3 py-1 rounded shadow-md">
              ¡MÁS QUE UN SERVICIO, UNA SOLUCIÓN!
            </span>

            {/* Title */}
            <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight drop-shadow-xl">
              Soluciones Logísticas y Transporte de Carga
            </h1>

            {/* Subtitle */}
            <h2 className="text-yellow-400 font-bold text-3xl md:text-4xl drop-shadow-xl">
              Confiables para todo el Perú
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
              Seguridad, puntualidad y tecnología al servicio de tus envíos.
              Monitoreo GPS 24/7 y atención personalizada.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo('services')} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition">
                Cotizar Servicio
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                    "_blank"
                  )
                }
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg flex items-center gap-2 shadow-md transition"
              >
                <MessageCircle size={16} /> Atención por WhatsApp
              </button>
            </div>

            {/* INFO BOXES BELOW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-center backdrop-blur-md">
                <p className="font-semibold text-md">Seguimiento</p>
                <p className="text-white/70 text-sm">GPS 24/7</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-center backdrop-blur-md">
                <p className="font-semibold text-md">12 millones de dólares</p>
                <p className="text-white/70 text-sm">Seguro</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-center backdrop-blur-md">
                <p className="font-semibold text-md">Nacional</p>
                <p className="text-white/70 text-sm">Cobertura</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-center backdrop-blur-md">
                <p className="font-semibold text-md">Confiable</p>
                <p className="text-white/70 text-sm">Experiencia</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
