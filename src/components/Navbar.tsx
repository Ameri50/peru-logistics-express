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
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          {/* Navegación horizontal con logo en centro */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
            {/* Enlaces izquierda */}
            <nav className="hidden sm:flex items-center gap-2 md:gap-4 text-gray-700">
              {navigation.slice(0, 3).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-sm md:text-base font-medium px-3 md:px-4 py-2 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Logo centrado - MÁS GRANDE */}
            <a href="/" className="flex items-center hover:opacity-80 transition flex-shrink-0 mx-2 sm:mx-4 md:mx-6">
              <img src="/assets/nuevofondo.png" alt="HURIANKA" className="h-50 w-50 sm:h-40 sm:w-45 md:h-56 md:w-64 object-contain" />
            </a>

            {/* Enlaces derecha */}
            <nav className="hidden sm:flex items-center gap-2 md:gap-4 text-gray-700">
              {navigation.slice(3).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-sm md:text-base font-medium px-3 md:px-4 py-2 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Iconos búsqueda y menú móvil */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-700 hover:text-blue-600 transition p-1.5 hidden sm:flex"
                title="Buscar"
              >
                <SearchIcon size={18} />
              </button>

              <button
                className="sm:hidden text-gray-700 p-1.5"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Búsqueda expandible */}
          {searchOpen && (
            <form onSubmit={handleSearch} className="mt-2 pb-1">
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-3 py-1 rounded bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs"
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition text-xs"
                >
                  Buscar
                </button>
              </div>
            </form>
          )}

          {/* Menú móvil */}
          {menuOpen && (
            <div className="sm:hidden bg-gray-50 border-t border-gray-200 px-2 py-2 flex flex-col gap-1 text-gray-700 text-xs mt-2">
              {navigation.map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-left py-1 px-2 hover:text-blue-600 hover:bg-gray-100 rounded transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Espaciador para fixed header */}
      <div className="h-56"></div>

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