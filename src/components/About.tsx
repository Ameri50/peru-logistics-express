import { Heart, Target, Zap, Users, Globe, Shield } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiénes Somos
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hurianka S.A.C. - Soluciones logísticas y transporte de carga confiables para todo el Perú
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-8 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Target size={32} className="text-yellow-400" />
              <h3 className="text-2xl font-bold">Misión</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              Ofrecer servicios logísticos especializados en el transporte y distribución de carga a nivel nacional, 
              garantizando la calidad y seguridad de las mercancías mediante un equipo de profesionales capacitados 
              y comprometidos con la satisfacción del cliente.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-8 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={32} className="text-white" />
              <h3 className="text-2xl font-bold">Visión 2030</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              Ser una organización sólida capaz de brindar soluciones operativas a una amplia variedad de clientes. 
              Expandir nuestra flota a 50 unidades equipadas y contar con un almacén especializado, adaptado a las 
              necesidades de nuestros clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-lg p-8 text-center hover:bg-blue-700 transition-all">
              <Heart size={40} className="text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Integridad</h4>
              <p className="text-gray-100 text-sm">
                Cumplimos con lo que prometemos, defendiendo la propiedad de nuestros clientes con ética y lealtad.
              </p>
            </div>

            <div className="bg-blue-800 rounded-lg p-8 text-center hover:bg-blue-700 transition-all">
              <Users size={40} className="text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Respeto Mutuo</h4>
              <p className="text-gray-100 text-sm">
                Tratamos a nuestros colaboradores y clientes con dignidad y consideración en todo momento.
              </p>
            </div>

            <div className="bg-blue-800 rounded-lg p-8 text-center hover:bg-blue-700 transition-all">
              <Shield size={40} className="text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Compromiso</h4>
              <p className="text-gray-100 text-sm">
                Asumimos la responsabilidad de nuestras acciones, tomando decisiones con cuidado y atención.
              </p>
            </div>
          </div>
        </div>

        {/* Responsibility */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Nuestra Responsabilidad Social
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Globe size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-white mb-2">Responsabilidad Ambiental</h4>
                <p className="text-gray-200">
                  Implementamos prácticas sostenibles para minimizar nuestro impacto ambiental, apostando por 
                  el uso eficiente de recursos y tecnologías limpias.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-white mb-2">Equipo Humano</h4>
                <p className="text-gray-200">
                  Valoramos a nuestros colaboradores y fomentamos un ambiente de trabajo seguro, con cultura 
                  organizacional basada en seguridad y salud.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-white mb-2">Satisfacción del Cliente</h4>
                <p className="text-gray-200">
                  Trabajamos para superar las expectativas de nuestros clientes, garantizando calidad, 
                  puntualidad y confianza en cada operación.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-white mb-2">Desarrollo Social</h4>
                <p className="text-gray-200">
                  Contribuimos al crecimiento del país mediante la generación de empleo formal y apoyo a 
                  las comunidades donde operamos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            <span className="text-yellow-400 font-bold">RUC:</span> 20614054108
          </p>
        </div>
      </div>
    </section>
  );
}