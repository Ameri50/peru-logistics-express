import { Truck, Package, Warehouse, MapPin, Shield, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Transporte de Carga Pesada",
      description: "Soluciones especializadas para cargas pesadas y sobredimensionadas con equipos de última generación.",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Package,
      title: "Transporte Primario",
      description: "Servicios de transporte desde Lima hacia diversos lugares del país con máxima seguridad.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      title: "Reparto - Última Milla",
      description: "Distribución final de mercancías a diferentes zonas del país con entrega puntual garantizada.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Warehouse,
      title: "Almacenaje Transitorio",
      description: "Espacios seguros para almacenamiento temporal de tu carga con control de inventario.",
      color: "from-yellow-600 to-yellow-700"
    },
    {
      icon: Package,
      title: "Cross Docking",
      description: "Servicio de transferencia rápida de mercancías entre unidades de transporte.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      title: "Seguimiento 24/7",
      description: "Tracking GPS en tiempo real de tus envíos con atención personalizada las 24 horas.",
      color: "from-cyan-600 to-cyan-700"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Brindamos soluciones logísticas especializadas en el transporte y distribución de carga a nivel nacional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden"
              >
                {/* Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas un servicio personalizado?
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Nuestro equipo de especialistas está listo para adaptar soluciones a tus necesidades específicas
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg transition-all">
              Cotizar Ahora
            </button>
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}