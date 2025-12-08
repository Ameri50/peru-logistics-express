import Navbar from './Navbar';
import Footer from './Footer';
import { MapPin, Mail, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const whatsappNumber = "51923987360";

  const handleWhatsApp = () => {
    if (!formData.name || !formData.message) {
      alert("Por favor completa el nombre y el mensaje");
      return;
    }

    setIsLoading(true);

    const whatsappMessage = `
*SOLICITUD DE INFORMACIÓN HURIANKA*

*Nombre:* ${formData.name}
*Email:* ${formData.email || "No proporcionado"}
*Teléfono:* ${formData.phone || "No proporcionado"}

*Mensaje:*
${formData.message}
    `.trim();

    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank'
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 md:pt-20">
        {/* Header Banner with Background Image */}
        <div 
          className="relative -mx-4 sm:-mx-6 overflow-hidden mb-12 sm:mb-16 md:mb-24 h-48 sm:h-64 md:h-96 flex flex-col justify-between bg-cover bg-center group w-screen"
          style={{
            backgroundImage: 'url(/assets/fondo.png)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
          
          {/* Title */}
          <div className="relative flex items-center justify-center flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
              Contáctanos
            </h1>
          </div>
        </div>

        {/* Descripción */}
        <section className="px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
                Estamos listos para atender tus necesidades logísticas. Con más de una década de experiencia en transporte especializado, contamos con soluciones integrales para tu empresa.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border border-blue-200">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">24/7</p>
                  <p className="text-xs sm:text-sm text-gray-600">Seguimiento de carga en tiempo real</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 sm:p-6 border border-green-200">
                  <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">50+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Unidades especializadas</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 border border-yellow-200">
                  <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">$12M</p>
                  <p className="text-xs sm:text-sm text-gray-600">Cobertura de seguros anual</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 sm:p-6 border border-purple-200">
                  <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">Lima</p>
                  <p className="text-xs sm:text-sm text-gray-600">Cobertura nacional completa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* Location */}
                    <div className="flex gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Dirección</h4>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          Av. Simón Bolívar 450 - Interior 1002<br />
                          Santa Clara - Ate - Lima, Perú
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Teléfono</h4>
                        <a href="tel:+51923987360" className="text-green-700 font-semibold text-xs sm:text-sm hover:text-green-800 transition-colors">
                          +51 923 987 360
                        </a>
                        <p className="text-gray-600 text-xs mt-1">Disponible 24/7</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                        <a href="mailto:presupuestos@transxiomara.com" className="text-purple-700 font-semibold text-xs sm:text-sm hover:text-purple-800 transition-colors break-all">
                          presupuestos@transxiomara.com
                        </a>
                        <p className="text-gray-600 text-xs mt-1">Respuesta rápida</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="bg-gray-900 text-white rounded-xl p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">¿Por qué contactarnos?</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">Respuesta profesional en menos de 24 horas</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">Cotizaciones personalizadas según tu necesidad</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">Equipo experto disponible para asesorarte</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">Servicio de calidad garantizado</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-60 sm:h-80 border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-76.9!3d-12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiUyA3NsKwNTQnMDAuMCJX!5e0!3m2!1ses!2spe!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación HURIANKA S.A.C."
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Solicita Información
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6">
                      Completa el formulario y nos pondremos en contacto contigo
                    </p>
                    
                    <div className="space-y-4 sm:space-y-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+51 999 999 999"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Mensaje <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Cuéntanos sobre tu necesidad de transporte..."
                          rows={3}
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                      >
                        <MessageCircle size={18} />
                        {isLoading ? 'Enviando...' : 'Enviar por WhatsApp'}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        Al enviar este formulario, aceptas nuestra política de privacidad
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-yellow-900">Respuesta rápida</p>
                    <p className="text-xs text-yellow-800">Nuestro equipo responde en menos de 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;