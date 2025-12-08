import Navbar from './Navbar';
import Footer from './Footer';
import { Satellite, Clock, CheckCircle, Headphones, Radio, Zap, Shield, TrendingUp } from "lucide-react";

const Technology = () => {
  const features = [
    {
      icon: Satellite,
      title: "GPS y Monitoreo 24/7/365",
      description: "Seguimiento en tiempo real de todas nuestras unidades con tecnología GPS de última generación.",
      highlight: "Tracking en vivo",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Clock,
      title: "Cumplimiento de Lead Time",
      description: "Garantizamos el cumplimiento de los tiempos de entrega acordados con alertas automatizadas.",
      highlight: "Puntualidad garantizada",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: CheckCircle,
      title: "Cumplimiento Normativo",
      description: "Operamos bajo todas las normativas del MTC y regulaciones de transporte de carga en Perú.",
      highlight: "100% legal",
      color: "from-yellow-600 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100"
    },
    {
      icon: Headphones,
      title: "Atención Constante",
      description: "Equipo de atención al cliente disponible 24/7 para resolver cualquier consulta o incidencia.",
      highlight: "Soporte permanente",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const trackingFeatures = [
    { icon: Radio, title: "Ubicación GPS en tiempo real" },
    { icon: TrendingUp, title: "Historial completo de ruta" },
    { icon: Zap, title: "Alertas de eventos importantes" },
    { icon: Clock, title: "Estimación de tiempo de llegada" }
  ];

  return (
    <>
      <Navbar />

      <div className="pt-24 md:pt-20">
        {/* Header Section with Background Image */}
        <div 
          className="relative -mx-4 sm:-mx-6 overflow-hidden mb-12 sm:mb-16 md:mb-24 h-48 sm:h-64 md:h-96 flex flex-col justify-between bg-cover bg-center group w-screen"
          style={{
            backgroundImage: 'url(https://img.freepik.com/fotos-premium/contenedores-carga-apilados-fondo-mar_592721-1049.jpg)',
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
              Tecnología y Control
            </h2>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              Sistemas avanzados de seguimiento y gestión para garantizar la seguridad de tu carga en todo momento. Tecnología de punta integrada en cada unidad.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">365</p>
                <p className="text-xs sm:text-sm text-gray-600">Días de monitoreo anual</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">10s</p>
                <p className="text-xs sm:text-sm text-gray-600">Actualización de GPS</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">99.9%</p>
                <p className="text-xs sm:text-sm text-gray-600">Disponibilidad sistema</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">&lt;1m</p>
                <p className="text-xs sm:text-sm text-gray-600">Tiempo de alerta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 sm:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`group relative bg-gradient-to-br ${feature.bgColor} border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    {/* Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>
                    
                    {/* Background Decoration */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`}></div>

                    <div className="relative p-4 sm:p-6 md:p-8">
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                        {/* Icon */}
                        <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br ${feature.color} text-white rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0`}>
                          <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
                        </div>
                        
                        <div className="flex-1">
                          {/* Highlight Badge */}
                          <div className="inline-block mb-2 sm:mb-3">
                            <span className={`text-xs font-bold text-gray-700 uppercase tracking-wider px-2 sm:px-3 py-1 bg-gray-200 rounded-full`}>
                              {feature.highlight}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-900 transition-colors">
                            {feature.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Tracking Section */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 opacity-95"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                      Tracking en Tiempo Real
                    </h3>
                    <p className="text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                      Accede a la ubicación exacta de tu carga en cualquier momento desde cualquier dispositivo. Recibe notificaciones automáticas sobre el estado de tu envío.
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {trackingFeatures.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={idx} className="flex items-center gap-3 sm:gap-4">
                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <ItemIcon className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
                            </div>
                            <span className="text-white font-medium text-sm sm:text-base">{item.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Right - Dashboard Demo */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl">
                    {/* GPS Indicator */}
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="inline-block mb-3 sm:mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg animate-pulse opacity-50"></div>
                          <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 sm:p-4">
                            <Satellite className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-blue-200 font-semibold">Sistema GPS Activo</p>
                      <p className="text-xs text-white/50 mt-1">Conectado a 100+ unidades</p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs sm:text-sm text-white/70">Unidades Monitoreadas</span>
                          <span className="text-xl sm:text-2xl font-bold text-green-400">100%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-white/70">Tiempo de Respuesta</span>
                          <span className="text-xl sm:text-2xl font-bold text-yellow-400">Inmediato</span>
                        </div>
                        <p className="text-xs text-white/50 mt-1 sm:mt-2">Alertas en menos de 1 minuto</p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-white/70">Disponibilidad del Sistema</span>
                          <span className="text-xl sm:text-2xl font-bold text-blue-300">99.9%</span>
                        </div>
                        <p className="text-xs text-white/50 mt-1 sm:mt-2">Uptime garantizado 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-12 sm:mt-16 md:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: Shield, title: "Seguridad Total", desc: "Encriptación de datos de extremo a extremo" },
                { icon: Zap, title: "Velocidad", desc: "Actualizaciones cada 10 segundos" },
                { icon: TrendingUp, title: "Reportes Detallados", desc: "Análisis completos de rutas y tiempos" }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <ItemIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-blue-600" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Technology;