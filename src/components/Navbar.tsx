import { useState } from 'react';
import { MessageCircle, Menu, X, Search as SearchIcon } from 'lucide-react';

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
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b-2 border-blue-600">
        <div className="w-full px-6 sm:px-8 lg:px-12 py-6">
          {/* Navegación horizontal con logo en centro */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {/* Enlaces izquierda */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-6 text-gray-700">
              {navigation.slice(0, 3).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-lg lg:text-xl font-semibold px-4 lg:px-6 py-3 hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Logo centrado - GRANDE */}
            <a href="/" className="flex items-center hover:opacity-80 transition flex-shrink-0 mx-4 sm:mx-6">
              <img src="/assets/nuevofondo.png" alt="HURIANKA" className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 object-contain" />
            </a>

            {/* Enlaces derecha */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-6 text-gray-700">
              {navigation.slice(3).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-lg lg:text-xl font-semibold px-4 lg:px-6 py-3 hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Iconos búsqueda y menú móvil */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-700 hover:text-blue-600 transition p-2 hidden md:flex"
                title="Buscar"
              >
                <SearchIcon size={24} />
              </button>

              <button
                className="md:hidden text-gray-700 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Búsqueda expandible */}
          {searchOpen && (
            <form onSubmit={handleSearch} className="mt-4 pb-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-base"
                >
                  Buscar
                </button>
              </div>
            </form>
          )}

          {/* Menú móvil */}
          {menuOpen && (
            <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 flex flex-col gap-2 text-gray-700 text-lg mt-4">
              {navigation.map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-left py-3 px-4 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition font-semibold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Espaciador para fixed header */}
      <div className="h-0"></div>

      {/* WhatsApp flotante */}
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