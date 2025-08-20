import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScroll } from '../contexts/ScrollContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isScrolled } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-right">
            <Home className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              CASA TIERRA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['inicio', 'servicios', 'contacto', 'ubicacion', 'articulos'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-amber-400 dark:text-gray-300 dark:hover:text-amber-400 font-medium uppercase tracking-wide transition-all duration-300 hover:scale-105 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300 hover:scale-110"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:text-amber-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 rounded-lg mt-2 backdrop-blur-md">
            {['inicio', 'servicios', 'contacto', 'ubicacion', 'articulos'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-gray-900 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium uppercase tracking-wide transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;