"use client";

import { useState } from "react";
import { MessageCircle, Menu, X, Search } from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const whatsappNumber = "51923987360";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar información sobre sus servicios de transporte y logística."
  );

  const sections = [
    { label: "Servicios", id: "services" },
    { label: "Nosotros", id: "about" },
    { label: "Flota", id: "fleet" },
    { label: "Tecnología", id: "technology" },
    { label: "Seguro", id: "insurance" },
    { label: "Contacto", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1
              onClick={() => scrollTo("top")}
              className="text-white font-bold text-lg sm:text-xl tracking-wide cursor-pointer hover:text-yellow-400 transition"
            >
            
            </h1>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-6 text-white text-sm lg:text-base">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-2 lg:px-3 py-1 hover:text-yellow-400 transition whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="ml-4 p-2 hover:text-yellow-400 transition"
                title="Buscar"
              >
                <Search size={18} />
              </button>
            </nav>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              title="Menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="mt-3 pb-3 animate-fadeIn">
              <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-2 gap-2">
                <Search size={18} className="text-white/70 flex-shrink-0" />
                <input
                  className="w-full bg-transparent text-white text-sm outline-none placeholder-white/50"
                  placeholder="Buscar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  autoFocus
                />
                <button
                  onClick={handleSearch}
                  className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-black rounded text-sm font-semibold transition flex-shrink-0"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/70 border-t border-white/10 px-4 sm:px-6 py-4 flex flex-col gap-3 text-white text-sm">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 hover:text-yellow-400 transition"
              >
                {item.label}
              </button>
            ))}
            <button
              className="flex gap-2 items-center py-2 hover:text-yellow-400 transition"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={18} /> Buscar
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative w-full min-h-screen pt-20 sm:pt-24 md:pt-0 md:h-screen overflow-hidden">
        {/* Background */}
        <img
          src="/fondo.png"
          alt="Transporte de carga"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent md:from-black/70" />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-0">
          <div className="w-full max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
            {/* Badge */}
            <span className="inline-block text-xs sm:text-sm font-semibold text-black bg-yellow-500 px-3 sm:px-4 py-1.5 rounded shadow-md">
              ¡MÁS QUE UN SERVICIO, UNA SOLUCIÓN!
            </span>

            {/* Title */}
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-xl">
              Soluciones Logísticas y Transporte de Carga
            </h1>

            {/* Subtitle */}
            <h2 className="text-yellow-400 font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-xl">
              Confiables para todo el Perú
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Seguridad, puntualidad y tecnología al servicio de tus envíos.
              Monitoreo GPS 24/7 y atención personalizada.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
              <button
                onClick={() => scrollTo("services")}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition text-sm sm:text-base"
              >
                Cotizar Servicio
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                    "_blank"
                  )
                }
                className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-md transition text-sm sm:text-base"
              >
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-6 md:pt-8">
              <div className="bg-black/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-center backdrop-blur-md hover:bg-black/50 transition">
                <p className="font-semibold text-xs sm:text-sm md:text-base">Seguimiento</p>
                <p className="text-white/70 text-xs sm:text-sm">GPS 24/7</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-center backdrop-blur-md hover:bg-black/50 transition">
                <p className="font-semibold text-xs sm:text-sm md:text-base">$12M USD</p>
                <p className="text-white/70 text-xs sm:text-sm">Seguro</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-center backdrop-blur-md hover:bg-black/50 transition">
                <p className="font-semibold text-xs sm:text-sm md:text-base">Nacional</p>
                <p className="text-white/70 text-xs sm:text-sm">Cobertura</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-center backdrop-blur-md hover:bg-black/50 transition">
                <p className="font-semibold text-xs sm:text-sm md:text-base">Confiable</p>
                <p className="text-white/70 text-xs sm:text-sm">Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}