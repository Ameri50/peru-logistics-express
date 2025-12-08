import Navbar from '@/components/Navbar';
import { Truck, Shield, Clock, CheckCircle, Zap, MapPin } from 'lucide-react';
import camion2 from "@/assets/camion2.png";
import camion3 from "@/assets/camion 3.png";

export default function Index() {
  const highlights = [
    { icon: Truck, title: "Flota Moderna", desc: "Unidades equipadas con tecnología de punta", color: "from-blue-600 to-cyan-600" },
    { icon: Shield, title: "Seguridad 24/7", desc: "GPS en tiempo real y monitoreo constante", color: "from-green-600 to-emerald-600" },
    { icon: Clock, title: "Puntualidad", desc: "Entrega garantizada en los tiempos acordados", color: "from-yellow-600 to-amber-600" },
    { icon: Zap, title: "Eficiencia", desc: "Optimización de rutas y recursos", color: "from-red-600 to-orange-600" }
  ];

  const services = [
    { icon: MapPin, title: "Transporte Nacional", desc: "Cobertura en todo el Perú" },
    { icon: Truck, title: "Carga Pesada", desc: "Equipos especializados" },
    { icon: Shield, title: "Almacenaje", desc: "Espacios seguros" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen pt-20 sm:pt-24 md:pt-0 md:h-screen overflow-hidden flex items-center justify-center md:justify-start">
          <img 
            src="/fondo.png" 
            alt="Transporte de carga" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent md:from-black/70"></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-0">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
              <span className="inline-block text-xs sm:text-sm font-bold text-black bg-yellow-400 px-3 sm:px-4 py-1.5 rounded shadow-md">
                ¡MÁS QUE UN SERVICIO, UNA SOLUCIÓN!
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl">
                Soluciones Logísticas y Transporte de Carga
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-xl">
                Confiables para todo el Perú
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Seguridad, puntualidad y tecnología al servicio de tus envíos.
                Monitoreo GPS 24/7 y atención personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6">
                <a
                  href="/servicios"
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-md transition text-sm sm:text-base text-center"
                >
                  Cotizar Servicio
                </a>
                <a
                  href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-md transition text-sm sm:text-base"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`group relative bg-gradient-to-br ${item.color} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-all"></div>
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 mb-4 opacity-90" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fleet Preview Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestra Flota
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Unidades especializadas y modernas para tus necesidades
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Fleet Images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 flex items-center justify-center h-48 shadow-md hover:shadow-lg transition-all">
                  <img src={camion2} alt="Camión 7-15 Tn" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 flex items-center justify-center h-48 shadow-md hover:shadow-lg transition-all">
                  <img src={camion3} alt="Camión XL" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Fleet Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Flota Premium</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Contamos con unidades modernas equipadas con GPS, climatización y sistemas de seguridad de última generación. Cada camión es inspeccionado regularmente para garantizar máxima confiabilidad.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">4 tipos de camiones</p>
                      <p className="text-sm text-gray-600">Desde 5 Tn hasta 30 Tn de capacidad</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">100% Asegurados</p>
                      <p className="text-sm text-gray-600">Cobertura completa de carga y responsabilidad civil</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Mantenimiento Preventivo</p>
                      <p className="text-sm text-gray-600">Revisión constante para máxima seguridad</p>
                    </div>
                  </div>
                </div>

                <a href="/flota" className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105">
                  Ver toda la flota
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 text-lg">Soluciones logísticas adaptadas a tus necesidades</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <a href="/servicios" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                      Más información →
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a href="/servicios" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all">
                Explorar todos los servicios
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para confiar en nosotros?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Contacta con nuestro equipo para obtener una cotización personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg transition-all transform hover:scale-105"
              >
                Solicitar Cotización
              </a>
              <a
                href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
                💬 Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">HURIANKA S.A.C.</h2>
              <p className="text-yellow-400 mb-4">Soluciones Logísticas</p>
              <p className="text-gray-300 mb-6">Soluciones logísticas y transporte de carga confiables para todo el Perú.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><span>📞</span> +51 923 987 360</div>
                <div className="flex items-center gap-2"><span>📧</span> presupuestos@transxiomara.com</div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition text-white">
                  f
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition text-white">
                  in
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-8">Enlaces Rápidos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Inicio', path: '/' },
                  { label: 'Nosotros', path: '/nosotros' },
                  { label: 'Servicios', path: '/servicios' },
                  { label: 'Flota', path: '/flota' },
                  { label: 'Tecnología', path: '/tecnologia' },
                  { label: 'Seguro', path: '/seguro' },
                  { label: 'Contacto', path: '/contacto' }
                ].map(item => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="text-gray-300 hover:text-yellow-400 transition text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 HURIANKA S.A.C. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}