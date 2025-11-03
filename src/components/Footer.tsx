import { Truck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-bold">HURIANKA</span>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Soluciones logísticas y transporte de carga confiables para todo el Perú. 
              Más que un servicio, una solución.
            </p>
            <p className="text-white/60 text-xs">
              RUC: 20614054108
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", href: "#" },
                { label: "Quiénes Somos", href: "#about" },
                { label: "Servicios", href: "#services" },
                { label: "Nuestra Flota", href: "#fleet" },
                { label: "Tecnología", href: "#technology" },
                { label: "Contacto", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Transporte de Carga Pesada</li>
              <li>Transporte Nacional</li>
              <li>Última Milla</li>
              <li>Cross-Docking</li>
              <li>Almacenamiento</li>
              <li>Logística Integral</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Av. Simón Bolívar 450 - Int. 1002<br />
                  Santa Clara - Ate - Lima
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">contacto@hurianka.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} HURIANKA S.A.C. Todos los derechos reservados para ellos.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
