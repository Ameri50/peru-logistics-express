import { Facebook, Linkedin, MessageCircle, Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import logo from "@/assets/aqui.png";

export default function Footer() {
  const whatsappNumber = "51923987360";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-12 sm:pt-16 md:pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Left Section - Logo and Info */}
          <div>
            {/* Logo Section */}
            <div className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-3 sm:gap-4">
              <img src={logo} alt="HURIANKA Logo" className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain" />
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">HURIANKA</h2>
                <p className="text-yellow-400 text-xs sm:text-sm">S.A.C.</p>
                <p className="text-gray-400 text-xs">Soluciones Logísticas</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Soluciones logísticas y transporte de carga confiables para todo el Perú. Más que un servicio, una solución.
            </p>

            {/* RUC */}
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="text-yellow-400 font-semibold">RUC:</span> 20614054108
            </p>
          </div>

          {/* Middle Section - Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6 md:mb-8">Contacto</h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Phone size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Teléfono</p>
                  <p className="text-gray-300 text-xs sm:text-sm">+51 923 987 360</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <MessageCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Otros contactos</p>
                  <p className="text-gray-300 text-xs sm:text-sm">971 068 409 / 998 179 972</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <Mail size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Email</p>
                  <p className="text-gray-300 text-xs sm:text-sm break-all">presupuestos@transxiomara.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Ubicación</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Av. Simón Bolívar 450 - Int. 1002, Santa Clara - Ate - Lima</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Quick Links & Services */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6 md:mb-8">Enlaces Rápidos</h3>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-10">
              <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs sm:text-sm block">
                Inicio
              </a>
              <a href="/nosotros" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs sm:text-sm block">
                Quiénes Somos
              </a>
              <a href="/servicios" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs sm:text-sm block">
                Servicios
              </a>
              <a href="/flota" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs sm:text-sm block">
                Nuestra Flota
              </a>
              <a href="/tecnologia" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs sm:text-sm block">
                Seguimiento GPS 24/7
              </a>
              <a href="/contacto" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs sm:text-sm block">
                Contacto
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all text-white hover:text-blue-950"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all text-white hover:text-blue-950"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all text-white"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 pb-8 sm:pb-10 md:pb-12 border-b border-white/20">
          <div>
            <h4 className="text-yellow-400 font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Shield size={18} />
              Cobertura de Seguros
            </h4>
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
              <li>✓ Seguro de carga: US$ 300k por evento / US$ 12M anual</li>
              <li>✓ Seguro vehicular completo</li>
              <li>✓ Responsabilidad Civil: US$ 1M</li>
              <li>✓ SCTR para personal</li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Clock size={18} />
              Disponibilidad
            </h4>
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
              <li>✓ Seguimiento GPS 24 x 7 x 365</li>
              <li>✓ Atención personalizada 24/7</li>
              <li>✓ Cross Docking disponible 24/7</li>
              <li>✓ Cumplimiento de Lead Time garantizado</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-4 sm:my-6 md:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3 sm:gap-4 py-6 sm:py-8">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} HURIANKA S.A.C. Todos los derechos reservados.
          </p>

          <p className="text-gray-400 text-xs sm:text-sm">
            Soluciones logísticas confiables para todo el Perú
          </p>

          <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacidad
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}