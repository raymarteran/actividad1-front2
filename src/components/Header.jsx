import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menú toggled:', !isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log('Búsqueda toggled:', !isSearchOpen);
  };

  return (
    <header className="bg-crema-suave shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-tierra-rosada">
              Get Up & Glow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <div className='w-full flex flex-row justify-between'>
              <div className='mr-4'>
                <a href="#home" className="text-gray-700 hover:text-tierra-rosada transition-colors">
                  Inicio
                </a>
              </div>
              <div className='mr-4'>
                <a href="#articles" className="text-gray-700 hover:text-tierra-rosada transition-colors">
                  Artículos
                </a>
              </div>
              <div className='mr-4'>
                <a href="#recommendations" className="text-gray-700 hover:text-tierra-rosada transition-colors">
                  Recomendaciones
                </a>
              </div>
              <div className='mr-4'>
                <a href="#products" className="text-gray-700 hover:text-tierra-rosada transition-colors">
                  Productos Top
                </a>
              </div>
              <div className='mr-4'>
                <a href="#about" className="text-gray-700 hover:text-tierra-rosada transition-colors">
                  Acerca de
                </a>
              </div>
            </div>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-700 hover:text-tierra-rosada transition-colors"
            >
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-tierra-rosada transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-tierra-rosada transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-rosa-empolvado rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-tierra-rosada">
                Inicio
              </a>
              <a href="#articles" className="block px-3 py-2 text-gray-700 hover:text-tierra-rosada">
                Artículos
              </a>
              <a href="#recommendations" className="block px-3 py-2 text-gray-700 hover:text-tierra-rosada">
                Recomendaciones
              </a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-tierra-rosada">
                Productos Top
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-tierra-rosada">
                Acerca de
              </a>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar artículos, productos..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-rosa-empolvado rounded-lg focus:outline-none focus:ring-2 focus:ring-tierra-rosada"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
