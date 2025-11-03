import { Shield, Car, AlertTriangle, Heart } from "lucide-react";

const Insurance = () => {
  const insurances = [
    {
      icon: Shield,
      title: "Seguro de Carga",
      coverage: "$300K por evento",
      annual: "$12M anual",
      description: "Póliza de seguro con amplia cobertura para proteger tus mercancías durante todo el trayecto.",
      features: [
        "Cobertura contra robo",
        "Protección por daños",
        "Cobertura por accidentes",
        "Indemnización rápida"
      ],
      color: "from-primary to-primary-light"
    },
    {
      icon: Car,
      title: "Seguro Vehicular",
      coverage: "Cobertura Total",
      annual: "Todas las unidades",
      description: "Todas nuestras unidades están aseguradas contra diversos tipos de siniestros y accidentes.",
      features: [
        "Daño propio",
        "Daños a terceros",
        "Robo total o parcial",
        "Asistencia en carretera"
      ],
      color: "from-accent to-accent/80"
    },
    {
      icon: AlertTriangle,
      title: "Responsabilidad Civil",
      coverage: "$1M de cobertura",
      annual: "RC Extracontractual",
      description: "Seguro de responsabilidad civil que cubre cualquier eventualidad con terceros.",
      features: [
        "Daños a terceros",
        "Lesiones personales",
        "Daños materiales",
        "Asesoría legal incluida"
      ],
      color: "from-secondary to-secondary-light"
    },
    {
      icon: Heart,
      title: "SCTR Personal",
      coverage: "Todo el personal",
      annual: "Cobertura completa",
      description: "Personal operativo cubierto contra accidentes de trabajo y enfermedades profesionales.",
      features: [
        "Accidentes laborales",
        "Enfermedades profesionales",
        "Atención médica",
        "Rehabilitación"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="insurance" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seguros y Garantías
          </h2>
          <p className="text-xl text-muted-foreground">
            Tu carga protegida con las mejores coberturas del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insurances.map((insurance, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${insurance.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${insurance.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                    <insurance.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {insurance.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {insurance.coverage}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">
                        {insurance.annual}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {insurance.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {insurance.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Protección Total para tu Inversión
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de <span className="text-primary font-bold">$13M</span> en coberturas anuales 
            garantizan la seguridad de tu carga y la tranquilidad de tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
