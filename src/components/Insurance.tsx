import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Truck, AlertTriangle, Heart, CheckCircle } from "lucide-react";

export default function Insurance() {
  const insurances = [
    {
      icon: Shield,
      title: "Seguro de Carga",
      subtitle: "$300K por evento",
      coverage: "$12M anual",
      color: "from-blue-600 to-blue-700",
      bgColor: "blue",
      checkColor: "text-blue-600",
      features: [
        "Cobertura contra robo",
        "Cobertura por accidentes",
        "Protección por daños",
        "Indemnización rápida"
      ],
      description: "Póliza de seguro con cobertura por evento de US$ 300k y la suma anual de US$ 12M.",
      company: "RIMAC"
    },
    {
      icon: Truck,
      title: "Seguro Vehicular",
      subtitle: "Cobertura Total",
      coverage: "Todas las unidades",
      color: "from-cyan-500 to-blue-600",
      bgColor: "cyan",
      checkColor: "text-cyan-600",
      features: [
        "Diversos siniestros",
        "Accidentes cubiertos",
        "Protección completa",
        "Asistencia rápida"
      ],
      description: "Nuestras unidades están aseguradas contra diversos tipos de siniestros y accidentes.",
      company: "RIMAC"
    },
    {
      icon: AlertTriangle,
      title: "Responsabilidad Civil",
      subtitle: "$1M de cobertura",
      coverage: "RC Extracontractual",
      color: "from-yellow-500 to-amber-600",
      bgColor: "yellow",
      checkColor: "text-yellow-600",
      features: [
        "Cobertura a terceros",
        "Protección jurídica",
        "Indemnizaciones",
        "Asistencia legal"
      ],
      description: "Seguro de RC por un monto de US$ 1M. Cubre cualquier eventualidad con terceros.",
      company: "RIMAC"
    },
    {
      icon: Heart,
      title: "SCTR Personal",
      subtitle: "Todo el personal",
      coverage: "Cobertura completa",
      color: "from-red-500 to-orange-600",
      bgColor: "red",
      checkColor: "text-red-600",
      features: [
        "Accidentes de trabajo",
        "Enfermedades profesionales",
        "Cobertura médica",
        "Protección total"
      ],
      description: "Personal operativo cubierto contra accidentes de trabajo o enfermedades profesionales.",
      company: "La Positiva"
    }
  ];

  const bgGradients = {
    blue: "from-blue-50 via-blue-50 to-cyan-50",
    cyan: "from-cyan-50 via-blue-50 to-blue-50",
    yellow: "from-yellow-50 via-amber-50 to-yellow-50",
    red: "from-red-50 via-orange-50 to-red-50"
  };

  return (
    <>
      <Navbar />

      <div className="pt-24 md:pt-20">
        {/* Header Section with Background Image */}
        <div 
          className="relative -mx-4 sm:-mx-6 overflow-hidden mb-12 sm:mb-16 md:mb-24 h-48 sm:h-64 md:h-96 flex flex-col justify-between bg-cover bg-center group w-screen"
          style={{
            backgroundImage: 'url(/assets/imagen2.0.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

          {/* Content - Centered Title */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg text-center px-4">
              Seguros y Garantías
            </h2>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              Tu carga protegida con las mejores coberturas del mercado. Ofrecemos una cobertura integral con las aseguradoras más confiables del Perú.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">$12M</p>
                <p className="text-xs sm:text-sm text-gray-600">Cobertura anual carga</p>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1 sm:mb-2">100%</p>
                <p className="text-xs sm:text-sm text-gray-600">Flota asegurada</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">$1M</p>
                <p className="text-xs sm:text-sm text-gray-600">Responsabilidad civil</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all">
                <p className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2">100%</p>
                <p className="text-xs sm:text-sm text-gray-600">Personal cubierto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 sm:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Insurance Cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
              {insurances.map((insurance, idx) => {
                const Icon = insurance.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative bg-gradient-to-br ${bgGradients[insurance.bgColor as keyof typeof bgGradients]} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    {/* Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${insurance.color}`}></div>
                    
                    {/* Background Decoration */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${insurance.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`}></div>

                    <div className="relative p-4 sm:p-6 md:p-8 flex flex-col h-full">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br ${insurance.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                            {insurance.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 font-semibold">
                            {insurance.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Coverage Badge */}
                      <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${insurance.color} text-white rounded-full text-xs font-bold mb-4 sm:mb-6 w-fit`}>
                        {insurance.coverage}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                        {insurance.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-8">
                        {insurance.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle className={`w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0 mt-0.5 ${insurance.checkColor}`} />
                            <p className="text-xs text-gray-700 leading-snug">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-300 my-3 sm:my-4 md:my-6"></div>

                      {/* Company Logo */}
                      <div className="flex items-center justify-center mt-auto">
                        <div className="text-center">
                          {insurance.company === "RIMAC" ? (
                            <div>
                              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                                <span className="text-gray-900">RI</span>
                                <span className="text-red-600 text-3xl sm:text-4xl">M</span>
                                <span className="text-gray-900">AC</span>
                              </div>
                              <p className="text-xs text-gray-500 font-medium mt-1">Seguros</p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-2xl sm:text-3xl font-black text-orange-500">{insurance.company}</p>
                              <p className="text-xs text-gray-500 font-medium mt-1">Seguros</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 opacity-95"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  ¿Necesitas más información?
                </h3>
                <p className="text-blue-200 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                  Consulta con nuestro equipo de expertos sobre la cobertura que mejor se adapte a tus necesidades específicas
                </p>
                <a
                  href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre los seguros y coberturas disponibles en Hurianka.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold rounded-lg sm:rounded-xl transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}