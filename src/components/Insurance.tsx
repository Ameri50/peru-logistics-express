import Navbar from './Navbar';
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
      <div className="pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Seguros y Garantías
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tu carga protegida con las mejores coberturas del mercado
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Insurance Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {insurances.map((insurance, idx) => {
                const Icon = insurance.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative bg-gradient-to-br ${bgGradients[insurance.bgColor as keyof typeof bgGradients]} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    {/* Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${insurance.color}`}></div>
                    
                    {/* Background Decoration */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${insurance.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`}></div>

                    <div className="relative p-8 flex flex-col h-full">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${insurance.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                            {insurance.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 font-semibold">
                            {insurance.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Coverage Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${insurance.color} text-white rounded-full text-xs font-bold mb-6 w-fit`}>
                        {insurance.coverage}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {insurance.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {insurance.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 text-${insurance.bgColor}-600`} />
                            <p className="text-xs text-gray-700 leading-snug">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-300 my-6"></div>

                      {/* Company Logo */}
                      <div className="flex items-center justify-center mt-auto">
                        <div className="text-center">
                          {insurance.company === "RIMAC" ? (
                            <div>
                              <div className="text-3xl font-black tracking-tight">
                                <span className="text-gray-900">RI</span>
                                <span className="text-red-600 text-4xl">M</span>
                                <span className="text-gray-900">AC</span>
                              </div>
                              <p className="text-xs text-gray-500 font-medium mt-1">Seguros</p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-3xl font-black text-orange-500">{insurance.company}</p>
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 opacity-95"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
              
              <div className="relative p-12 md:p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Necesitas más información?
                </h3>
                <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
                  Consulta con nuestro equipo de expertos sobre la cobertura que mejor se adapte a tus necesidades específicas
                </p>
                <a
                  href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre los seguros y coberturas disponibles en Hurianka.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}