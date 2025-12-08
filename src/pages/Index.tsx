import { BrowserRouter as Router, Routes, Route, Link, useNavigate, NavigateFunction } from 'react-router-dom';
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
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const whatsappNumber = "51923987360";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.");

  const navigation = [
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
  <div>
    <section className="relative w-full min-h-screen flex items-center justify-center md:justify-start">
      <img 
        src="/fondo.png" 
        alt="Transporte de carga" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent md:from-black/70"></div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-16 py-32 sm:py-40">
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
            <button
              onClick={() => { navigate('/servicios'); setMenuOpen(false); }}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-md transition text-sm sm:text-base"
            >
              Cotizar Servicio
            </button>
            <button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-md transition text-sm sm:text-base"
            >
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Resto de los componentes sin cambios...
const AboutPage = () => (
  <section className="bg-gray-900 text-white py-20 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Quiénes Somos</h2>
        <p className="text-gray-300 text-lg">Hurianka S.A.C. - Soluciones logísticas y transporte de carga confiables para todo el Perú</p>
      </div>
      {/* Resto del contenido... */}
    </div>
  </section>
);

const ServicesPage = () => (
  <section className="bg-white py-20 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 text-lg">Brindamos soluciones logísticas especializadas</p>
      </div>
      {/* Resto del contenido... */}
    </div>
  </section>
);

const FleetPage = () => (<section className="bg-gray-900 py-20 px-6 mt-20"><div className="max-w-7xl mx-auto">...</div></section>);
const TechnologyPage = () => (<section className="bg-white py-20 px-6 mt-20"><div className="max-w-7xl mx-auto">...</div></section>);
const InsurancePage = () => (<section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 mt-20"><div className="max-w-7xl mx-auto">...</div></section>);
const ContactPage = ({ whatsappNumber }: ContactPageProps) => (<section className="bg-slate-50 py-20 px-6 mt-20"><div className="max-w-6xl mx-auto">...</div></section>);

const Footer = ({ navigation, setMenuOpen }: FooterProps) => (
  <footer className="bg-blue-950 text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">HURIANKA S.A.C.</h2>
          <p className="text-yellow-400 mb-4">Soluciones Logísticas</p>
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