import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Transporte de Carga Pesada",
      description: "Soluciones especializadas para cargas pesadas y sobredimensionadas con equipos de última generación.",
      color: "from-red-600 to-red-700",
      bgColor: "from-red-50 to-red-100",
      image: "🚚",
      features: ["Equipos modernos", "Profesionales especializados"],
      fullDescription: "Nuestro servicio de transporte de carga pesada está diseñado para manejar cargas excepcionales y sobredimensionadas. Contamos con equipos especializados, conductores certificados y seguros completos para garantizar que tu carga llegue de forma segura.",
      capacidad: "15 - 30 Tn | 90 - 120 M³",
      details: [
        "Cargas hasta 30 toneladas",
        "Equipos con sistemas de amortiguación avanzados",
        "Conductores especializados en carga pesada",
        "Rutas optimizadas según peso y dimensiones",
        "Permisos especiales incluidos",
        "Seguro de carga completo hasta US$ 300k"
      ]
    },
    {
      title: "Transporte Primario",
      description: "Servicios de transporte desde Lima hacia diversos lugares del país con máxima seguridad.",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      image: "🚛",
      features: ["Cobertura nacional", "Seguridad garantizada"],
      fullDescription: "Transporte inicial de mercancías desde Lima a nivel nacional. Incluye recolección, carga y traslado con monitoreo GPS continuo y seguros que cubren toda la operación.",
      capacidad: "7 - 15 Tn | 60 - 95 M³ a 100 - 170 M³",
      details: [
        "Cobertura en todo el Perú",
        "Recolección desde tu almacén",
        "Rutas consolidadas eficientes",
        "Monitoreo GPS en tiempo real",
        "Seguimiento de documentación",
        "Atención personalizada 24/7"
      ]
    },
    {
      title: "Reparto - Última Milla",
      description: "Distribución final de mercancías a diferentes zonas del país con entrega puntual garantizada.",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      image: "🚐",
      features: ["Entrega puntual", "Cobertura completa"],
      fullDescription: "Servicio de distribución de última milla con entregas puerta a puerta. Optimizamos tiempos y costos para garantizar que tu carga llegue a destino en el tiempo acordado.",
      capacidad: "5 Tn | 20 - 40 M³",
      details: [
        "Entregas puerta a puerta",
        "Confirmación fotográfica de entrega",
        "Distribuimos en zonas difíciles",
        "Horarios flexibles",
        "Manejo cuidadoso de mercancías",
        "Reportes detallados y rastreables"
      ]
    },
    {
      title: "Almacenaje Transitorio",
      description: "Espacios seguros para almacenamiento temporal de tu carga con control de inventario.",
      color: "from-yellow-600 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      image: "🏢",
      features: ["Espacios seguros", "Control de inventario"],
      fullDescription: "Contamos con almacenes estratégicamente ubicados en Av. Simón Bolívar 450 - interior 1002, Santa Clara, Ate, Lima. Incluye vigilancia 24/7, control de inventario y gestión documental.",
      capacidad: "Capacidad según necesidad",
      details: [
        "Almacenes climatizados disponibles",
        "Vigilancia con CCTV 24/7",
        "Sistema de control de inventario automatizado",
        "Gestión completa de documentación",
        "Seguro de mercancías incluido",
        "Acceso flexible según necesidad operativa"
      ]
    },
    {
      title: "Cross Docking",
      description: "Servicio de transferencia rápida de mercancías entre unidades de transporte.",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      image: "🔄",
      features: ["Transferencia rápida", "Eficiencia operativa"],
      fullDescription: "Optimiza tu logística con nuestro servicio de Cross Docking. Transferencia inmediata de carga entre unidades sin almacenamiento prolongado, reduciendo costos y tiempos de operación.",
      capacidad: "Múltiples unidades disponibles",
      details: [
        "Transferencia en menos de 4 horas",
        "Sin manipulación excesiva de carga",
        "Reducción significativa de costos operativos",
        "Disponible 24/7 x 365 días",
        "Coordinación con múltiples transportistas",
        "Rastreo GPS en cada etapa"
      ]
    },
    {
      title: "Seguimiento 24/7",
      description: "Tracking GPS en tiempo real de tus envíos con atención personalizada las 24 horas.",
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      image: "📍",
      features: ["Monitoreo en vivo", "Atención 24/7"],
      fullDescription: "Mantén control total de tus envíos con nuestro sistema de seguimiento avanzado. Acceso web en tiempo real, cumplimiento de Lead Time garantizado y gestión de prevención integral.",
      capacidad: "Cobertura total nacional",
      details: [
        "GPS en tiempo real 24 x 7 x 365",
        "Acceso web desde cualquier dispositivo",
        "Alertas automáticas de eventos",
        "Historial completo de rutas",
        "Cumplimiento de Lead Time garantizado",
        "Soporte técnico permanente"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-24 md:pt-20">
        {/* Header Section with Background Image */}
        <div 
          className="relative -mx-4 sm:-mx-6 overflow-hidden mb-12 sm:mb-16 md:mb-24 h-48 sm:h-64 md:h-96 flex flex-col justify-between bg-cover bg-center group w-screen"
          style={{
            backgroundImage: 'url(/assets/imagen2.0.png)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

          {/* Content - Centered Title */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg text-center px-4">
              Nuestros Servicios
            </h2>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
              En Hurianka S.A.C., brindamos soluciones logísticas especializadas en el transporte y distribución de carga a nivel nacional con tecnología, profesionalismo y compromiso con la seguridad.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">6</p>
                <p className="text-xs sm:text-sm text-gray-600">Servicios especializados</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">100%</p>
                <p className="text-xs sm:text-sm text-gray-600">Cobertura nacional</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">Flexible</p>
                <p className="text-xs sm:text-sm text-gray-600">Soluciones adaptadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 sm:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
              {services.map((service, idx) => {
                return (
                  <div
                    key={idx}
                    className={`group relative bg-gradient-to-br ${service.bgColor} border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    {/* Top Border Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>

                    {/* Background Decoration */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`}></div>

                    {/* Content */}
                    <div className="relative p-4 sm:p-6 md:p-8 flex flex-col h-full">
                      {/* Truck Image/Emoji */}
                      <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                        {service.image}
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* Capacity Badge */}
                      <p className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg mb-3 sm:mb-4 group-hover:bg-gray-200 transition-colors line-clamp-2">
                        📦 {service.capacidad}
                      </p>

                      {/* Features */}
                      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle size={14} className={`text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0`} />
                            <span className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Arrow Button */}
                      <button
                        onClick={() => setSelectedService(idx)}
                        className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all hover:text-blue-700 text-xs sm:text-sm"
                      >
                        <span>Más información</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 opacity-95"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                  {/* Left Side */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                      ¿Necesitas un servicio personalizado?
                    </h3>
                    <p className="text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                      Nuestro equipo de especialistas está listo para adaptar soluciones a tus necesidades específicas y garantizar el éxito de tu logística con máxima seguridad y profesionalismo.
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-xs sm:text-sm">Asesoría personalizada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-xs sm:text-sm">Soluciones adaptadas a tu presupuesto</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-xs sm:text-sm">Respuesta en menos de 24 horas</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - CTA Buttons */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <a
                      href="/contacto"
                      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold rounded-lg sm:rounded-xl transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <span>Cotizar Ahora</span>
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría consultar sobre sus servicios de logística y transporte.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg sm:rounded-xl transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <span>Contactar por WhatsApp</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Modal de Detalles del Servicio */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header del Modal */}
            <div className={`bg-gradient-to-r ${services[selectedService].color} p-4 sm:p-6 md:p-8 text-white sticky top-0`}>
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0">
                    {services[selectedService].image}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{services[selectedService].title}</h2>
                    <p className="text-white/90 text-xs sm:text-sm line-clamp-2">{services[selectedService].description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Capacidad */}
              <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs sm:text-sm font-semibold text-blue-900">Capacidad disponible:</p>
                <p className="text-base sm:text-lg font-bold text-blue-700">{services[selectedService].capacidad}</p>
              </div>

              {/* Descripción Completa */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Descripción</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {services[selectedService].fullDescription}
                </p>
              </div>

              {/* Detalles */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Lo que incluye</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {services[selectedService].details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                      <CheckCircle size={20} className={`text-blue-600 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 font-medium text-xs sm:text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Información de Seguros */}
              <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">Cobertura de Seguros Incluida</h4>
                <ul className="text-xs sm:text-sm text-green-800 space-y-1">
                  <li>✓ Seguro de carga: US$ 300k por evento / US$ 12M anual</li>
                  <li>✓ Seguro vehicular completo</li>
                  <li>✓ Responsabilidad Civil: US$ 1M</li>
                  <li>✓ SCTR para personal</li>
                </ul>
              </div>

              {/* CTA en Modal */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                <a
                  href="/contacto"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 text-center text-sm sm:text-base"
                >
                  Solicitar Cotización
                </a>
                <a
                  href={`https://wa.me/51923987360?text=${encodeURIComponent(`Hola, me gustaría más información sobre: ${services[selectedService].title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 text-center text-sm sm:text-base"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}