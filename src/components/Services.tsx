import Navbar from './Navbar';
import { Truck, Package, Warehouse, MapPin, Shield, Clock, ArrowRight, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Truck,
      title: "Transporte de Carga Pesada",
      description: "Soluciones especializadas para cargas pesadas y sobredimensionadas con equipos de última generación.",
      color: "from-red-600 to-red-700",
      bgColor: "from-red-50 to-red-100",
      features: ["Equipos modernos", "Profesionales especializados"],
      fullDescription: "Nuestro servicio de transporte de carga pesada está diseñado para manejar cargas excepcionales y sobredimensionadas. Contamos con equipos especializados, conductores certificados y seguros completos para garantizar que tu carga llegue de forma segura.",
      details: [
        "Cargas hasta 30 toneladas",
        "Equipos con sistemas de amortiguación avanzados",
        "Conductores especializados en carga pesada",
        "Rutas optimizadas según peso y dimensiones",
        "Permisos especiales incluidos",
        "Seguro de carga completo"
      ]
    },
    {
      icon: Package,
      title: "Transporte Primario",
      description: "Servicios de transporte desde Lima hacia diversos lugares del país con máxima seguridad.",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      features: ["Cobertura nacional", "Seguridad garantizada"],
      fullDescription: "Transporte inicial de mercancías desde Lima a nivel nacional. Incluye recolección, carga y traslado con monitoreo GPS continuo y seguros que cubren toda la operación.",
      details: [
        "Cobertura en todo el Perú",
        "Recolección desde tu almacén",
        "Rutas consolidadas eficientes",
        "Monitoreo GPS en tiempo real",
        "Seguimiento de documentación",
        "Atención personalizada"
      ]
    },
    {
      icon: MapPin,
      title: "Reparto - Última Milla",
      description: "Distribución final de mercancías a diferentes zonas del país con entrega puntual garantizada.",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      features: ["Entrega puntual", "Cobertura completa"],
      fullDescription: "Servicio de distribución de última milla con entregas puerta a puerta. Optimizamos tiempos y costos para garantizar que tu carga llegue a destino en el tiempo acordado.",
      details: [
        "Entregas puerta a puerta",
        "Confirmación fotográfica",
        "Distribuimos en zonas difíciles",
        "Horarios flexibles",
        "Manejo cuidadoso de mercancías",
        "Reportes detallados de entregas"
      ]
    },
    {
      icon: Warehouse,
      title: "Almacenaje Transitorio",
      description: "Espacios seguros para almacenamiento temporal de tu carga con control de inventario.",
      color: "from-yellow-600 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      features: ["Espacios seguros", "Control de inventario"],
      fullDescription: "Contamos con almacenes estratégicamente ubicados para resguardo temporal de mercancías. Incluye vigilancia 24/7, control de inventario y gestión documental.",
      details: [
        "Almacenes climatizados disponibles",
        "Vigilancia con CCTV 24/7",
        "Sistema de control de inventario",
        "Gestión de documentación",
        "Seguro incluido",
        "Acceso flexible según necesidad"
      ]
    },
    {
      icon: Package,
      title: "Cross Docking",
      description: "Servicio de transferencia rápida de mercancías entre unidades de transporte.",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      features: ["Transferencia rápida", "Eficiencia operativa"],
      fullDescription: "Optimiza tu logística con nuestro servicio de Cross Docking. Transferencia inmediata de carga entre unidades sin almacenamiento prolongado, reduciendo costos y tiempos.",
      details: [
        "Transferencia en menos de 4 horas",
        "Sin manipulación excesiva",
        "Reducción de costos operativos",
        "Disponible 24/7",
        "Coordinación con múltiples transportistas",
        "Rastreo en cada etapa"
      ]
    },
    {
      icon: Clock,
      title: "Seguimiento 24/7",
      description: "Tracking GPS en tiempo real de tus envíos con atención personalizada las 24 horas.",
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      features: ["Monitoreo en vivo", "Atención 24/7"],
      fullDescription: "Mantén control total de tus envíos con nuestro sistema de seguimiento avanzado. Acceso web en tiempo real y alertas automáticas para cada etapa del transporte.",
      details: [
        "GPS en tiempo real 24/7",
        "Acceso web desde cualquier dispositivo",
        "Alertas automáticas de eventos",
        "Historial completo de rutas",
        "Estimación de llegada precisa",
        "Soporte técnico permanente"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-32">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Brindamos soluciones logísticas especializadas en el transporte y distribución de carga a nivel nacional con tecnología y profesionalismo
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative bg-gradient-to-br ${service.bgColor} border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    {/* Top Border Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>

                    {/* Background Decoration */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`}></div>

                    {/* Content */}
                    <div className="relative p-8 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                        <Icon size={32} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle size={16} className={`text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0`} />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Arrow Button */}
                      <button
                        onClick={() => setSelectedService(idx)}
                        className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all hover:text-blue-700"
                      >
                        <span className="text-sm">Más información</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 opacity-95"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
              
              <div className="relative p-12 md:p-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Side */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      ¿Necesitas un servicio personalizado?
                    </h3>
                    <p className="text-blue-200 text-lg leading-relaxed mb-8">
                      Nuestro equipo de especialistas está listo para adaptar soluciones a tus necesidades específicas y garantizar el éxito de tu logística.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-sm">Asesoría personalizada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-sm">Soluciones adaptadas a tu presupuesto</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-white text-sm">Respuesta en menos de 24 horas</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - CTA Buttons */}
                  <div className="flex flex-col gap-4">
                    <a
                      href="/contact"
                      className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center gap-2"
                    >
                      <span>Cotizar Ahora</span>
                      <ArrowRight size={20} />
                    </a>
                    <a
                      href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría consultar sobre sus servicios de logística y transporte.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center gap-2"
                    >
                      <span>Contactar por WhatsApp</span>
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal de Detalles del Servicio */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-20 md:pt-0">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header del Modal */}
            <div className={`bg-gradient-to-r ${services[selectedService].color} p-8 text-white sticky top-0`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {(() => {
                    const Icon = services[selectedService].icon;
                    return (
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon size={32} />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{services[selectedService].title}</h2>
                    <p className="text-white/90">{services[selectedService].description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all flex-shrink-0"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="p-8">
              {/* Descripción Completa */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {services[selectedService].fullDescription}
                </p>
              </div>

              {/* Detalles */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lo que incluye</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services[selectedService].details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                      <CheckCircle size={24} className={`text-${services[selectedService].color.split('-')[1]}-600 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA en Modal */}
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 text-center"
                >
                  Solicitar Cotización
                </a>
                <a
                  href={`https://wa.me/51923987360?text=${encodeURIComponent(`Hola, me gustaría más información sobre: ${services[selectedService].title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 text-center"
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