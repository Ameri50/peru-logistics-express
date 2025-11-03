import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const whatsappNumber = "51999999999";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // In a real application, this would send to a backend
    toast.success("Mensaje enviado correctamente. Nos comunicaremos contigo pronto.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = `Hola, mi nombre es ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos listos para atender tus necesidades logísticas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground mb-1">Dirección</h4>
                    <p className="text-muted-foreground text-sm">
                      Av. Simón Bolívar 450 - Interior 1002<br />
                      Santa Clara - Ate - Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground text-sm">
                      +51 999 999 999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      contacto@hurianka.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant h-64">
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
          <div className="bg-card rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Solicita Información
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Nombre completo *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Correo electrónico *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
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
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Mensaje *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos sobre tu necesidad de transporte..."
                  required
                  rows={4}
                  className="w-full resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  type="submit" 
                  size="lg"
                  className="flex-1"
                >
                  Enviar Solicitud
                </Button>
                
                <Button 
                  type="button"
                  size="lg"
                  variant="whatsapp"
                  onClick={handleWhatsApp}
                  className="flex-1 group"
                >
                  <MessageCircle className="group-hover:scale-110 transition-transform" />
                  Enviar por WhatsApp
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
