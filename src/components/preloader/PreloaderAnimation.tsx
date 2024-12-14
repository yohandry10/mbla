import { useSpring, animated, useTrail } from '@react-spring/web';
import { useEffect, useState } from 'react';

const particles = Array.from({ length: 50 }, (_, i) => i); // Generar partículas

export const PreloaderAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Animación del logo
  const logoSpring = useSpring({
    from: { scale: 0.8, rotateZ: 0, opacity: 0 },
    to: async (next) => {
      while (isLoading) {
        await next({ scale: 1.1, rotateZ: 360, opacity: 1 });
        await next({ scale: 0.9, rotateZ: 0, opacity: 0.8 });
      }
    },
    config: { tension: 200, friction: 20 },
  });

  // Animación de la capa de fondo
  const overlaySpring = useSpring({
    opacity: isLoading ? 1 : 0,
    transform: isLoading ? 'scale(1)' : 'scale(1.2)',
    config: { duration: 1000 },
    onRest: () => {
      if (!isLoading) setIsLoading(false);
    },
  });

  // Animación de partículas
  const trail = useTrail(particles.length, {
    opacity: isLoading ? 1 : 0,
    transform: isLoading
      ? 'translateY(0px)'
      : `translateY(${Math.random() * 100 - 50}px)`,
    config: { tension: 120, friction: 14 },
  });

  // Temporizador para ocultar el preloader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // Tiempo ajustable
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <animated.div
      style={overlaySpring}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-800 to-black"
    >
      {/* Fondo con partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {trail.map((style, index) => (
          <animated.div
            key={index}
            style={{
              ...style, // Combina estilos originales con los adicionales
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
          />
        ))}
      </div>

      {/* Logo con animaciones */}
      <div className="relative z-10">
        <animated.div
          style={logoSpring}
          className="w-28 h-28 rounded-full bg-gradient-to-br from-white to-blue-400 flex items-center justify-center shadow-2xl backdrop-blur-lg"
        >
          <span className="text-gray-800 font-bold text-2xl tracking-wide">
            MIBLA
          </span>
        </animated.div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-white text-lg font-medium animate-pulse">
            Cargando...
          </p>
        </div>
      </div>
    </animated.div>
  );
};
