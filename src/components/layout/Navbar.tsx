import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Índice de la categoría activa
  const activeIndex = navLinks.findIndex(
    (link) => link.to === location.pathname
  );

  // Detectar clics fuera del menú móvil
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Cambiar fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                isActive={location.pathname === link.to}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Indicador Visual Avanzado */}
            {activeIndex !== -1 && (
              <motion.div
                className="absolute bottom-[-4px] h-[3px] bg-blue-600 rounded-full"
                layoutId="active-indicator"
                initial={false}
                animate={{
                  left: `${activeIndex * 100}px`, // Ajusta la posición según las categorías
                  width: "100px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fondo Oscurecido al Abrir Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col items-center space-y-4 z-50 relative"
          >
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.to}
                to={link.to}
                isActive={location.pathname === link.to}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Datos de las rutas del menú
const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

// Componente NavLink para el menú principal
const NavLink = ({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`relative text-lg font-medium transition-all ${
      isActive
        ? "text-blue-600 after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-blue-600 after:content-['']"
        : "text-gray-700 hover:text-blue-600"
    }`}
    tabIndex={0}
  >
    {children}
  </Link>
);

// Componente MobileNavLink para el menú móvil
const MobileNavLink = ({
  to,
  onClick,
  children,
  isActive,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-2 text-lg font-medium rounded-md transition-colors ${
      isActive
        ? "bg-blue-100 text-blue-600"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`}
  >
    {children}
  </Link>
);
