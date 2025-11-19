import Navbar from './Navbar';
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
      <div className="pt-32">
        {/* Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos listos para atender tus necesidades logísticas. Completa el formulario y nuestro equipo se pondrá en contacto contigo pronto.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Location */}
                    <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Dirección</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Av. Simón Bolívar 450 - Interior 1002<br />
                          Santa Clara - Ate - Lima, Perú
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                        <a href="tel:+51923987360" className="text-green-700 font-semibold text-sm hover:text-green-800 transition-colors">
                          +51 923 987 360
                        </a>
                        <p className="text-gray-600 text-xs mt-1">Disponible 24/7</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:presupuestos@transxiomara.com" className="text-purple-700 font-semibold text-sm hover:text-purple-800 transition-colors">
                          presupuestos@transxiomara.com
                        </a>
                        <p className="text-gray-600 text-xs mt-1">Respuesta rápida</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="bg-gray-900 text-white rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-6">¿Por qué contactarnos?</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Respuesta profesional en menos de 24 horas</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Cotizaciones personalizadas según tu necesidad</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Equipo experto disponible para asesorarte</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">Servicio de calidad garantizado</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-80 border border-gray-200">
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
                  <div className="bg-white rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Solicita Información
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      Completa el formulario y nos pondremos en contacto contigo
                    </p>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+51 999 999 999"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Mensaje <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Cuéntanos sobre tu necesidad de transporte..."
                          rows={4}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                      >
                        <MessageCircle size={20} />
                        {isLoading ? 'Enviando...' : 'Enviar por WhatsApp'}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        Al enviar este formulario, aceptas nuestra política de privacidad
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="mt-6 flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-yellow-900">Respuesta rápida</p>
                    <p className="text-xs text-yellow-800">Nuestro equipo responde en menos de 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;