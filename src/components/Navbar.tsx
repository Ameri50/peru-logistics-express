import { useState } from 'react';
import { MessageCircle, Menu, X, Search as SearchIcon } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    let targetPath = '/';
    
    if (searchQuery.toLowerCase().includes('servicio')) {
      targetPath = '/servicios';
    } else if (searchQuery.toLowerCase().includes('flota')) {
      targetPath = '/flota';
    } else if (searchQuery.toLowerCase().includes('tecnolog')) {
      targetPath = '/tecnologia';
    } else if (searchQuery.toLowerCase().includes('seguro')) {
      targetPath = '/seguro';
    } else if (searchQuery.toLowerCase().includes('contacto')) {
      targetPath = '/contacto';
    } else if (searchQuery.toLowerCase().includes('nosotros')) {
      targetPath = '/nosotros';
    }
    
    window.location.href = targetPath;
    setSearchQuery('');
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center hover:opacity-80 transition">
              <img src={logo} alt="HURIANKA" className="h-28 w-28 object-contain" />
            </a>

            <nav className="hidden md:flex items-center gap-6 text-gray-800 text-base font-medium">
              {navigation.map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-800 hover:text-blue-600 transition p-2 hover:bg-gray-100 rounded-lg"
                title="Buscar"
              >
                <SearchIcon size={28} />
              </button>

              <button
                className="md:hidden text-gray-800 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {searchOpen && (
            <form onSubmit={handleSearch} className="mt-4 mb-2">
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

          {menuOpen && (
            <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 flex flex-col gap-3 text-gray-800 text-sm">
              {navigation.map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-left py-2 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <a
        href={`https://wa.me/51923987360?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de transporte y logística.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center group transition-all hover:scale-110"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </a>
    </>
  );
}