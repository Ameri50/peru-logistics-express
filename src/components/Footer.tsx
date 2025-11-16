import { Facebook, Linkedin, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/aqui.png";

export default function Footer() {
  const whatsappNumber = "51923987360";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Left Section - Logo and Info */}
          <div>
            {/* Logo Section */}
            <div className="mb-12 flex items-center gap-6">
              <img src={logo} alt="HURIANKA Logo" className="h-20 md:h-32 object-contain" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">HURIANKA</h2>
                <p className="text-yellow-400 text-sm md:text-base">Soluciones Logísticas</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Soluciones logísticas y transporte de carga confiables para todo el Perú. Más que un servicio, una solución.
            </p>

            {/* RUC */}
            <p className="text-gray-400 text-sm">
              <span className="text-yellow-400 font-semibold">RUC:</span> 20614054108
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">+51 923 987 360</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">971068409 / 998179972 / 998179928</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">presupuestos@transxiomara.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Av Simon bolivar 450 - interior 1002, Santa Clara - Ate - Lima</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all text-white hover:text-blue-950"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all text-white hover:text-blue-950"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all text-white"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Enlaces Rápidos</h3>

            <div className="grid grid-cols-1 gap-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Inicio
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Quiénes Somos
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Servicios
              </a>
              <a
                href="#fleet"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Nuestra Flota
              </a>
              <a
                href="#technology"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Tecnología
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} HURIANKA S.A.C. Todos los derechos reservados.
          </p>

          <p className="text-gray-400 text-sm">
            Soluciones logísticas y transporte de carga confiables para todo el Perú
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Privacidad
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}