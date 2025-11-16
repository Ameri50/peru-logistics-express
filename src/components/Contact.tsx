import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const whatsappNumber = "51923987360";

  const handleWhatsApp = () => {
    // Validate that at least name and message are filled
    if (!formData.name || !formData.message) {
      alert("Por favor completa el nombre y el mensaje");
      return;
    }

    // Format the message with all form data
    const whatsappMessage = `
*SOLICITUD DE INFORMACIÓN HURIANKA*

*Nombre:* ${formData.name}
*Email:* ${formData.email || "No proporcionado"}
*Teléfono:* ${formData.phone || "No proporcionado"}

*Mensaje:*
${formData.message}
    `.trim();

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-slate-600">
            Estamos listos para atender tus necesidades logísticas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Dirección</h4>
                    <p className="text-slate-600 text-sm">
                      Av. Simón Bolívar 450 - Interior 1002<br />
                      Santa Clara - Ate - Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Teléfono</h4>
                    <p className="text-slate-600 text-sm">
                      +51 923 987 360
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">
                      presupuestos@transxiomara.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-64">
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
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Solicita Información
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Nombre completo *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Correo electrónico *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+51 999 999 999"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos sobre tu necesidad de transporte..."
                  rows={4}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="button"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                Enviar por WhatsApp
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;