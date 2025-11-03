import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Package, Headphones } from "lucide-react";

const WhatsAppSection = () => {
  const whatsappNumber = "51999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hola, necesito información sobre sus servicios de transporte.");

  const benefits = [
    {
      icon: Clock,
      title: "Respuesta en Minutos",
      description: "Atención inmediata de nuestro equipo especializado"
    },
    {
      icon: Package,
      title: "Seguimiento en Vivo",
      description: "Consulta el estado de tu carga en tiempo real"
    },
    {
      icon: Headphones,
      title: "Asesor Directo",
      description: "Contacto personal con tu asesor logístico"
    }
  ];

  return (
    <section className="py-20 bg-[#25D366]/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-6 animate-pulse">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Atención Inmediata por WhatsApp
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comunícate con nuestro equipo especializado y recibe atención personalizada 
              las <span className="text-[#25D366] font-bold">24 horas del día, los 7 días de la semana</span>
            </p>

            <Button 
              size="xl" 
              variant="whatsapp"
              className="group text-lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Chatea con Nosotros Ahora
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-md hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#25D366]" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 shadow-elegant">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  ¿Necesitas una cotización urgente?
                </h3>
                <p className="text-muted-foreground">
                  Escríbenos por WhatsApp y recibe una respuesta inmediata de nuestro equipo comercial.
                </p>
              </div>
              
              <Button 
                size="lg" 
                variant="whatsapp"
                className="group flex-shrink-0"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="group-hover:scale-110 transition-transform" />
                Escribir Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
