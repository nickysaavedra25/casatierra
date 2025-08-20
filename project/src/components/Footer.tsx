import React from 'react';
import { Home, Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-amber-900 to-amber-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Home className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">CASA TIERRA</span>
            </div>
            <p className="text-gray-300 mb-6">
              © 2024 CasaTierra.
              <br />
              Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/Mv3o7WsSgzNGN1EG/?mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/casa_tierra_inmobiliaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <p className="text-gray-300 flex items-start space-x-3">
                <span className="text-amber-400 flex-shrink-0 mt-1">📍</span>
                <span>Carril San Miguel 208 Int.3 Col Alvaro Obregón San Martín Texmelucan</span>
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a 
                  href="mailto:casa.tierra.inmobiliaria@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  casa.tierra.inmobiliaria@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a 
                  href="tel:+5212481771631" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +52 1 248 177 1631
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              {['inicio', 'servicios', 'contacto', 'ubicacion', 'articulos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Additional Info */}
          <div className="animate-fade-in-up animation-delay-600">
            <h4 className="text-xl font-bold mb-6">Más Información</h4>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-white transition-colors duration-300 mb-4 block"
            >
              Sobre Nosotros
            </button>
            <p className="text-gray-300 text-sm leading-relaxed">
              Expertos en bienes raíces con años de experiencia en el mercado inmobiliario mexicano.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Desarrollado con ❤️ para Casa Tierra Inmobiliaria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;