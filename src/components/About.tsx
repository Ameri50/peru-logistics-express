import { Shield, Users, Leaf, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Cumplimos con lo que prometemos, defendiendo la propiedad de nuestros clientes con ética y lealtad."
    },
    {
      icon: Users,
      title: "Respeto Mutuo",
      description: "Tratamos a nuestros colaboradores y clientes con dignidad y consideración en todo momento."
    },
    {
      icon: TrendingUp,
      title: "Compromiso",
      description: "Asumimos la responsabilidad de nuestras acciones, tomando decisiones con cuidado y atención."
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Implementamos prácticas sostenibles para minimizar nuestro impacto ambiental."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            <strong className="text-primary">HURIANKA S.A.C.</strong> es una empresa dedicada a brindar 
            soluciones logísticas y transporte de carga por carretera, comprometida con la 
            <span className="text-primary font-semibold"> eficiencia, seguridad y sostenibilidad</span> en 
            cada uno de nuestros servicios.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ofrecer servicios logísticos especializados en el transporte y distribución de carga 
              a nivel nacional, garantizando la calidad y seguridad de las mercancías mediante un 
              equipo de profesionales capacitados y comprometidos con la satisfacción del cliente.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
            <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Visión 2030</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser una organización sólida, capaz de brindar soluciones operativas a una amplia 
              variedad de clientes, expandir nuestra flota a <strong className="text-secondary">50 unidades equipadas</strong> y 
              contar con un almacén especializado, adaptado a las necesidades de nuestros clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h3>
          <p className="text-muted-foreground">Los principios que guían cada una de nuestras acciones</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 text-center shadow-md hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-light rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
