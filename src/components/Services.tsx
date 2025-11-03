import { Button } from "@/components/ui/button";
import { Truck, Package, Warehouse, Route, Container, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Transporte de Carga Pesada",
      description: "Transporte especializado de carga pesada y sobredimensionada con equipos certificados y personal capacitado.",
      features: ["Hasta 30 toneladas", "Equipos especializados", "Rutas optimizadas"]
    },
    {
      icon: Route,
      title: "Transporte Nacional",
      description: "Cobertura completa desde Lima hacia todas las regiones del Perú con tiempos de entrega garantizados.",
      features: ["Lima - Provincias", "Seguimiento GPS", "Entrega puntual"]
    },
    {
      icon: Package,
      title: "Última Milla",
      description: "Servicio de reparto y distribución directa hasta el destino final de tus productos.",
      features: ["Distribución urbana", "Entrega programada", "Confirmación de recepción"]
    },
    {
      icon: Container,
      title: "Cross-Docking",
      description: "Operación logística sin almacenamiento prolongado para optimizar tiempos y costos de distribución.",
      features: ["Sin almacenaje", "Proceso rápido", "Reducción de costos"]
    },
    {
      icon: Warehouse,
      title: "Almacenamiento Transitorio",
      description: "Soluciones de almacenaje temporal seguro para tus mercancías con control de inventario.",
      features: ["Almacén seguro", "Control de inventario", "Gestión profesional"]
    },
    {
      icon: Truck,
      title: "Logística Integral",
      description: "Soluciones logísticas completas adaptadas a las necesidades específicas de tu negocio.",
      features: ["Asesoría personalizada", "Soluciones a medida", "Servicio completo"]
    }
  ];

  const whatsappNumber = "51999999999";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar una cotización de servicios de transporte.");

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones logísticas integrales diseñadas para optimizar tu cadena de suministro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-md hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="xl" 
            variant="whatsapp"
            className="group"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <MessageCircle className="group-hover:scale-110 transition-transform" />
            Solicitar Cotización por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
