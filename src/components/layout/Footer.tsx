import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <img 
              src="/src/assets/img/mibla.jpg" 
              alt="Mibla Logo" 
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Mibla Servicios Integrales</h3>
            <p className="text-gray-400">
              Expertos en instalación y mantenimiento de sistemas de seguridad y vigilancia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop} 
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 group hover:text-blue-500 transition-all duration-300">
                <Phone size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+51933371159" className="hover:underline">
                  +51 933-37-11-59
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 group hover:text-blue-500 transition-all duration-300">
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@mibla.com" className="hover:underline">
                  info@mibla.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 group hover:text-blue-500 transition-all duration-300">
                <MapPin size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Urb Santa Cruz Mz I, Lte 6, Perú</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/miblaperu?locale=id_ID"
                className="group relative text-gray-400 hover:text-blue-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Facebook size={24} className="relative z-10 group-hover:fill-current transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/miblaperu?igsh=MW9jcTFlZGZ6MmE3Zw%3D%3D"
                className="group relative text-gray-400 hover:text-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Instagram size={24} className="relative z-10 group-hover:fill-current transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mibla Servicios Integrales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
