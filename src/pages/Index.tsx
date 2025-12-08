import { Routes, Route, Link, useNavigate, NavigateFunction } from 'react-router-dom';
import { useState } from 'react';
import { MessageCircle, Menu, X, Heart, Target, Zap, Users, Shield, Truck, Package, Warehouse, MapPin, Clock, CheckCircle, Headphones, Phone, Mail, Facebook, Linkedin, Search as SearchIcon } from 'lucide-react';

// Tipos
interface NavigationItem {
  label: string;
  path: string;
}

interface HomePageProps {
  whatsappNumber: string;
  whatsappMessage: string;
  navigate: NavigateFunction;
  setMenuOpen: (open: boolean) => void;
}

interface ContactPageProps {
  whatsappNumber: string;
}

interface FooterProps {
  navigation: NavigationItem[];
  setMenuOpen: (open: boolean) => void;
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const whatsappNumber = "51923987360";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.");

  const navigation: NavigationItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Flota', path: '/flota' },
    { label: 'Tecnología', path: '/tecnologia' },
    { label: 'Seguro', path: '/seguro' },
    { label: 'Contacto', path: '/contacto' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.includes('servicio')) navigate('/servicios');
    else if (query.includes('flota')) navigate('/flota');
    else if (query.includes('tecnolog')) navigate('/tecnologia');
    else if (query.includes('seguro')) navigate('/seguro');
    else if (query.includes('contacto') || query.includes('contactar')) navigate('/contacto');
    else if (query.includes('nosotros') || query.includes('quiénes')) navigate('/nosotros');
    else navigate('/');
    
    setSearchQuery('');
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-blue-900 font-bold text-xl hover:text-blue-600 transition"
            >
              HURIANKA
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 text-gray-800 text-sm font-medium">
              {navigation.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-1 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Search and Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-800 hover:text-blue-600 transition p-2 hover:bg-gray-100 rounded-lg"
                title="Buscar"
              >
                <SearchIcon size={24} />
              </button>

              <button
                className="md:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <form onSubmit={handleSearch} className="mt-4 mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Buscar servicios, flota, tecnología..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
                >
                  Buscar
                </button>
              </div>
            </form>
          )}

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 flex flex-col gap-3 text-gray-800 text-sm">
              {navigation.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-left py-2 hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} navigate={navigate} setMenuOpen={setMenuOpen} />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/flota" element={<FleetPage />} />
          <Route path="/tecnologia" element={<TechnologyPage />} />
          <Route path="/seguro" element={<InsurancePage />} />
          <Route path="/contacto" element={<ContactPage whatsappNumber={whatsappNumber} />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer navigation={navigation} setMenuOpen={setMenuOpen} />

      {/* WHATSAPP FLOAT BUTTON */}
      <button
        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center group transition-all hover:scale-110"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </button>
    </div>
  );
}

// HOME PAGE
const HomePage = ({ whatsappNumber, whatsappMessage, navigate, setMenuOpen }: HomePageProps) => (
  <div className="pt-16 md:pt-0">
    <section className="relative w-full min-h-screen flex items-center justify-center md:justify-start">
      <img 
        src="/fondo.png" 
        alt="Transporte de carga" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 md:from-black/70 md:via-black/60 md:to-transparent"></div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-16 py-20 md:py-0">
        <div className="w-full max-w-lg md:max-w-2xl space-y-5 md:space-y-6 text-center md:text-left">
          <span className="inline-block text-xs sm:text-sm font-bold text-black bg-yellow-400 px-4 py-2 rounded shadow-md">
            ¡MÁS QUE UN SERVICIO, UNA SOLUCIÓN!
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            Soluciones Logísticas y Transporte de Carga
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-2xl">
            Confiables para todo el Perú
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed">
            Seguridad, puntualidad y tecnología al servicio de tus envíos.
            Monitoreo GPS 24/7 y atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6 justify-center md:justify-start">
            <button
              onClick={() => { navigate('/servicios'); setMenuOpen(false); }}
              className="w-full sm:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-lg transition text-sm sm:text-base"
            >
              Cotizar Servicio
            </button>
            <button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg transition text-sm sm:text-base"
            >
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// ABOUT PAGE
const AboutPage = () => (
  <section className="bg-gray-900 text-white py-16 md:py-20 px-4 sm:px-6 mt-16 md:mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Quiénes Somos</h2>
        <p className="text-gray-300 text-base md:text-lg px-4">Hurianka S.A.C. - Soluciones logísticas y transporte de carga confiables para todo el Perú</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Target size={28} className="text-yellow-400 flex-shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold">Misión</h3>
          </div>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Ofrecer servicios logísticos especializados en el transporte y distribución de carga a nivel nacional, garantizando la calidad y seguridad de las mercancías mediante un equipo de profesionales capacitados y comprometidos con la satisfacción del cliente.
          </p>
        </div>
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={28} className="text-white flex-shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold">Visión 2030</h3>
          </div>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Ser una organización sólida capaz de brindar soluciones operativas a una amplia variedad de clientes. Expandir nuestra flota a 50 unidades equipadas y contar con un almacén especializado.
          </p>
        </div>
      </div>
      <div className="mb-16 md:mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">Nuestros Valores</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Heart, title: 'Integridad', desc: 'Cumplimos con lo que prometemos, defendiendo la propiedad de nuestros clientes con ética y lealtad.' },
            { icon: Users, title: 'Respeto Mutuo', desc: 'Tratamos a nuestros colaboradores y clientes con dignidad y consideración en todo momento.' },
            { icon: Shield, title: 'Compromiso', desc: 'Asumimos la responsabilidad de nuestras acciones, tomando decisiones con cuidado y atención.' }
          ].map((valor, idx) => {
            const Icon = valor.icon;
            return (
              <div key={idx} className="bg-blue-800 rounded-lg p-6 md:p-8 text-center hover:bg-blue-700 transition-all">
                <Icon size={36} className="text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg md:text-xl font-bold mb-3">{valor.title}</h4>
                <p className="text-gray-100 text-sm leading-relaxed">{valor.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-400 text-sm md:text-base"><span className="text-yellow-400 font-bold">RUC:</span> 20614054108</p>
      </div>
    </div>
  </section>
);

// SERVICES PAGE
const ServicesPage = () => (
  <section className="bg-white py-20 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 text-lg">Brindamos soluciones logísticas especializadas en el transporte y distribución de carga a nivel nacional</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Truck, title: 'Transporte de Carga Pesada', desc: 'Soluciones especializadas para cargas pesadas y sobredimensionadas' },
          { icon: Package, title: 'Transporte Primario', desc: 'Servicios desde Lima hacia diversos lugares del país con máxima seguridad' },
          { icon: MapPin, title: 'Reparto - Última Milla', desc: 'Distribución final de mercancías a diferentes zonas del país' },
          { icon: Warehouse, title: 'Almacenaje Transitorio', desc: 'Espacios seguros para almacenamiento temporal de tu carga' },
          { icon: Package, title: 'Cross Docking', desc: 'Transferencia rápida de mercancías entre unidades de transporte' },
          { icon: Shield, title: 'Seguimiento 24/7', desc: 'Tracking GPS en tiempo real con atención personalizada' }
        ].map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// FLEET PAGE
const FleetPage = () => (
  <section className="bg-gray-900 py-20 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Nuestra Flota</h2>
        <p className="text-gray-400 text-lg">Unidades especializadas para cada tipo de carga</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Camión 5 Tn', capacity: '5 Tn', volume: '20-40 M³' },
          { name: 'Camión 7-15 Tn', capacity: '7-15 Tn', volume: '60-95 M³' },
          { name: 'Camión 7-15 Tn XL', capacity: '7-15 Tn', volume: '100-170 M³' },
          { name: 'Camión 15-30 Tn', capacity: '15-30 Tn', volume: '90-120 M³' }
        ].map((truck, idx) => (
          <div key={idx} className="bg-blue-800 rounded-lg p-6 text-center hover:bg-blue-700 transition-all">
            <Truck size={48} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{truck.name}</h3>
            <p className="text-yellow-400 font-bold text-lg">{truck.capacity}</p>
            <p className="text-gray-300 text-sm">{truck.volume}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// TECHNOLOGY PAGE
const TechnologyPage = () => (
  <section className="bg-white py-20 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Tecnología y Control</h2>
        <p className="text-gray-600 text-lg">Sistemas avanzados de seguimiento y gestión para garantizar la seguridad de tu carga</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: Truck, title: 'GPS y Monitoreo 24/7/365', desc: 'Seguimiento en tiempo real de todas nuestras unidades' },
          { icon: Clock, title: 'Cumplimiento de Lead Time', desc: 'Garantizamos el cumplimiento de tiempos de entrega acordados' },
          { icon: CheckCircle, title: 'Cumplimiento Normativo', desc: 'Operamos bajo todas las normativas del MTC' },
          { icon: Headphones, title: 'Atención Constante', desc: 'Equipo disponible 24/7 para resolver consultas' }
        ].map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// INSURANCE PAGE
const InsurancePage = () => (
  <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Seguros y Garantías</h2>
        <p className="text-gray-600 text-lg">Tu carga protegida con las mejores coberturas del mercado</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Seguro de Carga', subtitle: '$300K por evento', coverage: '$12M anual', company: 'RIMAC' },
          { title: 'Seguro Vehicular', subtitle: 'Cobertura Total', coverage: 'Todas las unidades', company: 'RIMAC' },
          { title: 'Responsabilidad Civil', subtitle: '$1M de cobertura', coverage: 'RC Extracontractual', company: 'RIMAC' },
          { title: 'SCTR Personal', subtitle: 'Todo el personal', coverage: 'Cobertura completa', company: 'La Positiva' }
        ].map((ins, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{ins.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{ins.subtitle}</p>
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold mb-4">
              {ins.coverage}
            </div>
            <p className="text-center text-gray-600 font-semibold">{ins.company}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// CONTACT PAGE
const ContactPage = ({ whatsappNumber }: ContactPageProps) => (
  <section className="bg-slate-50 py-20 px-6 mt-20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">Contáctanos</h2>
        <p className="text-xl text-slate-600">Estamos listos para atender tus necesidades logísticas</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
          <div className="space-y-4">
            {[
              { icon: MapPin, title: 'Dirección', content: 'Av. Simón Bolívar 450 - Interior 1002\nSanta Clara - Ate - Lima, Perú' },
              { icon: Phone, title: 'Teléfono', content: '+51 923 987 360' },
              { icon: Mail, title: 'Email', content: 'presupuestos@transxiomara.com' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicita Información</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Nombre completo" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="tel" placeholder="Teléfono" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <textarea placeholder="Tu mensaje..." rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"></textarea>
            <button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={18} /> Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// FOOTER
const Footer = ({ navigation, setMenuOpen }: FooterProps) => (
  <footer className="bg-blue-950 text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">HURIANKA S.A.C.</h2>
          <p className="text-yellow-400 mb-4">Soluciones Logísticas</p>
          <p className="text-gray-300 mb-6">Soluciones logísticas y transporte de carga confiables para todo el Perú.</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><Phone size={16} /> +51 923 987 360</div>
            <div className="flex items-center gap-2"><Mail size={16} /> presupuestos@transxiomara.com</div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition text-white">
              <Facebook size={20} />
            </button>
            <button className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition text-white">
              <Linkedin size={20} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Enlaces Rápidos</h3>
          <div className="grid grid-cols-2 gap-4">
            {navigation.map((item: NavigationItem) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-yellow-400 transition text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
        <p>© 2024 HURIANKA S.A.C. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);