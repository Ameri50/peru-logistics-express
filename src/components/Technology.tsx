import { Satellite, Clock, CheckCircle, Headphones } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const Technology = () => {
  const features = [
    {
      icon: Satellite,
      title: "GPS y Monitoreo 24/7/365",
      description: "Seguimiento en tiempo real de todas nuestras unidades con tecnología GPS de última generación.",
      highlight: "Tracking en vivo"
    },
    {
      icon: Clock,
      title: "Cumplimiento de Lead Time",
      description: "Garantizamos el cumplimiento de los tiempos de entrega acordados con alertas automatizadas.",
      highlight: "Puntualidad garantizada"
    },
    {
      icon: CheckCircle,
      title: "Cumplimiento Normativo",
      description: "Operamos bajo todas las normativas del MTC y regulaciones de transporte de carga en Perú.",
      highlight: "100% legal"
    },
    {
      icon: Headphones,
      title: "Atención Constante",
      description: "Equipo de atención al cliente disponible 24/7 para resolver cualquier consulta o incidencia.",
      highlight: "Soporte permanente"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img src={warehouseImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tecnología y Control
          </h2>
          <p className="text-xl text-muted-foreground">
            Sistemas avanzados de seguimiento y gestión para garantizar la seguridad de tu carga
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="inline-block mb-2">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider px-3 py-1 bg-secondary/10 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Tracking Demo */}
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Tracking en Tiempo Real
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Accede a la ubicación exacta de tu carga en cualquier momento desde cualquier dispositivo. 
                Recibe notificaciones automáticas sobre el estado de tu envío.
              </p>
              <ul className="space-y-3">
                {[
                  "Ubicación GPS en tiempo real",
                  "Historial completo de ruta",
                  "Alertas de eventos importantes",
                  "Estimación de tiempo de llegada"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="inline-block animate-pulse">
                  <Satellite className="w-16 h-16 text-secondary" />
                </div>
                <p className="text-sm text-white/70 mt-2">Sistema GPS Activo</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-white/70 mb-1">Unidades monitoreadas</div>
                  <div className="text-3xl font-bold text-white">100%</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-white/70 mb-1">Tiempo de respuesta</div>
                  <div className="text-3xl font-bold text-secondary">Inmediato</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
