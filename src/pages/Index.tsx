import Navbar from '@/components/Navbar';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32">
        <section className="relative w-full min-h-screen pt-20 sm:pt-24 md:pt-0 md:h-screen overflow-hidden flex items-center justify-center md:justify-start">
          <img 
            src="/fondo.png" 
            alt="Transporte de carga" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent md:from-black/70"></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-0">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
              <span className="inline-block text-xs sm:text-sm font-bold text-black bg-yellow-400 px-3 sm:px-4 py-1.5 rounded shadow-md">
                ¡MÁS QUE UN SERVICIO, UNA SOLUCIÓN!
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl">
                Soluciones Logísticas y Transporte de Carga
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-xl">
                Confiables para todo el Perú
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Seguridad, puntualidad y tecnología al servicio de tus envíos.
                Monitoreo GPS 24/7 y atención personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6">
                <a
                  href="/services"
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-md transition text-sm sm:text-base text-center"
                >
                  Cotizar Servicio
                </a>
                <a
                  href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-md transition text-sm sm:text-base"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">HURIANKA S.A.C.</h2>
              <p className="text-yellow-400 mb-4">Soluciones Logísticas</p>
              <p className="text-gray-300 mb-6">Soluciones logísticas y transporte de carga confiables para todo el Perú.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><span>📞</span> +51 923 987 360</div>
                <div className="flex items-center gap-2"><span>📧</span> presupuestos@transxiomara.com</div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition text-white">
                  f
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition text-white">
                  in
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-8">Enlaces Rápidos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Inicio', path: '/' },
                  { label: 'Nosotros', path: '/about' },
                  { label: 'Servicios', path: '/services' },
                  { label: 'Flota', path: '/fleet' },
                  { label: 'Tecnología', path: '/technology' },
                  { label: 'Seguro', path: '/insurance' },
                  { label: 'Contacto', path: '/contact' }
                ].map(item => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="text-gray-300 hover:text-yellow-400 transition text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 HURIANKA S.A.C. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}