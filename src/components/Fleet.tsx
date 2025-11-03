import { Truck, Package } from "lucide-react";

const Fleet = () => {
  const fleet = [
    {
      capacity: "5 Ton",
      volume: "20 - 40 m³",
      description: "Ideal para cargas pequeñas y medianas en áreas urbanas",
      color: "from-blue-500 to-blue-600"
    },
    {
      capacity: "7 - 15 Ton",
      volume: "60 - 95 m³",
      description: "Perfecta para distribución regional y cargas medianas",
      color: "from-primary to-primary-light"
    },
    {
      capacity: "7 - 15 Ton",
      volume: "100 - 170 m³",
      description: "Alta capacidad volumétrica para cargas ligeras voluminosas",
      color: "from-accent to-accent/80"
    },
    {
      capacity: "15 - 30 Ton",
      volume: "90 - 120 m³",
      description: "Cargas pesadas y transporte de larga distancia",
      color: "from-secondary to-secondary-light"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestra Flota Especializada
          </h2>
          <p className="text-xl text-muted-foreground">
            Contamos con unidades modernas equipadas con tecnología GPS y sistemas de seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-32 bg-gradient-to-br ${vehicle.color} flex items-center justify-center relative overflow-hidden`}>
                <Truck className="w-16 h-16 text-white/90 group-hover:scale-110 transition-smooth" />
                <div className="absolute top-4 right-4">
                  <Package className="w-8 h-8 text-white/60" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-3xl font-bold text-card-foreground">
                    {vehicle.capacity}
                  </h3>
                  <span className="text-muted-foreground">de carga</span>
                </div>
                
                <div className="inline-block mb-4">
                  <span className="text-secondary font-bold text-lg">
                    {vehicle.volume}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">de capacidad</span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vehicle.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-xs text-muted-foreground gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    GPS Tracking activo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary/10 rounded-2xl p-8">
            <p className="text-lg text-muted-foreground mb-2">
              <span className="text-3xl font-bold text-primary mr-2">50+</span>
              unidades proyectadas para 2030
            </p>
            <p className="text-sm text-muted-foreground">
              En constante crecimiento para servir mejor a nuestros clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
