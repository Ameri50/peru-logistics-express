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
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b-2 border-blue-600">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          {/* Navegación con logo en el centro */}
          <div className="flex items-center justify-between gap-4">
            {/* Enlaces izquierda */}
            <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-sm font-medium flex-1">
              {navigation.slice(0, 3).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600 pb-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Logo centrado */}
            <a href="/" className="flex items-center hover:opacity-80 transition flex-shrink-0 mx-4">
              <img src="/assets/aqui.png" alt="HURIANKA" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
              <div className="ml-2 hidden sm:block">
                <h1 className="text-base sm:text-lg font-bold text-gray-800">HURIANKA</h1>
                <p className="text-xs text-blue-600 font-semibold">S.A.C.</p>
              </div>
            </a>

            {/* Enlaces derecha */}
            <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-sm font-medium flex-1 justify-end">
              {navigation.slice(3).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600 pb-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Iconos búsqueda y menú móvil */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-700 hover:text-blue-600 transition p-2 hover:bg-gray-100 rounded-lg hidden sm:flex"
                title="Buscar"
              >
                <SearchIcon size={20} />
              </button>

              <button
                className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Búsqueda expandible */}
          {searchOpen && (
            <form onSubmit={handleSearch} className="mt-3 pb-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-sm"
                >
                  Buscar
                </button>
              </div>
            </form>
          )}

          {/* Menú móvil */}
          {menuOpen && (
            <div className="lg:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 flex flex-col gap-2 text-gray-700 text-sm mt-3">
              {navigation.map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-left py-2 px-3 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Espaciador para fixed header */}
      <div className="h-24"></div>

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