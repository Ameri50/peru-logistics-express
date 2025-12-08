import Navbar from './Navbar';
import Footer from './Footer';
import { Heart, Target, Zap, Users, Globe, Shield, CheckCircle } from "lucide-react";
import fondo from "@/assets/fondo.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-24 md:pt-20">
        {/* Header Banner with Background Image */}
        <div 
          className="relative -mx-4 sm:-mx-6 overflow-hidden mb-12 sm:mb-20 md:mb-24 h-48 sm:h-64 md:h-96 flex flex-col justify-between bg-cover bg-center group w-screen"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
          
          {/* Title */}
          <div className="relative flex items-center justify-center flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
              Quiénes Somos
            </h1>
          </div>
        </div>

        {/* Descripción */}
        <section className="px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
                Hurianka S.A.C. es una empresa dedicada a brindar soluciones logísticas y transporte de carga por carretera, comprometida con la eficiencia, seguridad y sostenibilidad en cada uno de nuestros servicios.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">15+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Años de experiencia</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all">
                  <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">50+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Clientes satisfechos</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all">
                  <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">500+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Entregas anuales</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all">
                  <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Satisfacción garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 sm:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <Target size={24} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Misión</h3>
                </div>
                <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
                  Ofrecer servicios logísticos especializados en el transporte y distribución de carga a nivel nacional, garantizando la calidad y seguridad de las mercancías mediante un equipo de profesionales capacitados y comprometidos con la satisfacción del cliente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 sm:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                    <Zap size={24} className="text-yellow-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Visión 2030</h3>
                </div>
                <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
                  Ser una organización sólida capaz de brindar soluciones operativas a una amplia variedad de clientes. Expandir nuestra flota a 50 unidades equipadas y contar con un almacén especializado, adaptado a las necesidades de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-gray-900">En Hurianka, nos regimos por los siguientes principios:</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
              {[
                {
                  title: 'Satisfacción del cliente',
                  description: 'Trabajamos para superar las expectativas de nuestros clientes, garantizando calidad, puntualidad y confianza en cada operación.'
                },
                {
                  title: 'Compromiso con nuestro equipo humano',
                  description: 'Valoramos a nuestros colaboradores y fomentamos un ambiente de trabajo seguro, con una cultura organizacional basada en la seguridad y salud en el trabajo.'
                },
                {
                  title: 'Responsabilidad ambiental',
                  description: 'Implementamos prácticas sostenibles para minimizar nuestro impacto ambiental, apostando por el uso eficiente de los recursos y tecnologías más limpias.'
                },
                {
                  title: 'Desarrollo y responsabilidad social',
                  description: 'Contribuimos al crecimiento del país mediante la generación de empleo formal y el apoyo a las comunidades en las que operamos.'
                }
              ].map((principle, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all">
                  <div className="flex gap-4">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{principle.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl p-6 sm:p-8 text-center">
              <p className="text-white text-base sm:text-lg leading-relaxed">
                <span className="font-bold">En Hurianka S.A.C., nos esforzamos por ofrecer soluciones innovadoras y eficientes, garantizando un servicio de alta calidad que respalde la confianza de nuestros clientes y socios estratégicos.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12 md:mb-16">Nuestros Valores</h3>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
              <div className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-all">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={28} className="text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Integridad</h4>
                <p className="text-gray-100 text-xs sm:text-sm leading-relaxed">
                  Cumplimos con lo que prometemos, defendiendo la propiedad de nuestros clientes con ética y lealtad.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-all">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Respeto Mutuo</h4>
                <p className="text-gray-100 text-xs sm:text-sm leading-relaxed">
                  Tratamos a nuestros colaboradores y clientes con dignidad y consideración en todo momento.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-700 to-yellow-600 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-all">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={28} className="text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Compromiso</h4>
                <p className="text-gray-100 text-xs sm:text-sm leading-relaxed">
                  Asumimos la responsabilidad de nuestras acciones, tomando decisiones con cuidado y atención.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16">Nuestra Responsabilidad Social</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8 border border-blue-200">
                <div className="flex gap-4">
                  <Globe size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Responsabilidad Ambiental</h4>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      Implementamos prácticas sostenibles para minimizar nuestro impacto ambiental, apostando por el uso eficiente de recursos y tecnologías limpias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 sm:p-8 border border-green-200">
                <div className="flex gap-4">
                  <Users size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Equipo Humano</h4>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      Valoramos a nuestros colaboradores y fomentamos un ambiente de trabajo seguro, con cultura organizacional basada en seguridad y salud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 sm:p-8 border border-purple-200">
                <div className="flex gap-4">
                  <Shield size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Satisfacción del Cliente</h4>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      Trabajamos para superar las expectativas de nuestros clientes, garantizando calidad, puntualidad y confianza en cada operación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 sm:p-8 border border-yellow-200">
                <div className="flex gap-4">
                  <Zap size={24} className="text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Desarrollo Social</h4>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      Contribuimos al crecimiento del país mediante la generación de empleo formal y apoyo a las comunidades donde operamos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RUC Footer */}
        <section className="bg-gray-900 py-8 sm:py-10 md:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              <span className="text-yellow-400 font-bold">RUC:</span> 20614054108
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}