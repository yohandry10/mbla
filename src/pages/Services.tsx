import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const servicesData = [
  {
    title: 'Instalación de Intercomunicadores',
    description: 'Soluciones completas para edificios, condominios y oficinas. Sistemas de última generación con video y control de acceso integrado. Instalación profesional y servicio post-venta garantizado.',
    imageUrl: 'https://promart.vteximg.com.br/arquivos/ids/7495660-1000-1000/13423.jpg?v=638313701516870000',
  },
  {
    title: 'Servicios Eléctricos',
    description: 'Mantenimiento y mejora de sistemas eléctricos residenciales y comerciales. Instalaciones seguras y certificadas. Diagnóstico, reparación y modernización de instalaciones existentes.',
    imageUrl: 'https://reformasramal.com/gallery_gen/c45c3cddd0559225dba6752ff0f9b752_2400x1600_fit.jpg?ts=1727337672',
  },
  {
    title: 'Circuito Cerrado (CCTV)',
    description: 'Cámaras de seguridad de última generación, instalación y soporte. Monitoreo 24/7 y acceso remoto desde dispositivos móviles. Sistemas inteligentes con detección de movimiento y análisis de video.',
    imageUrl: 'https://ingenieriayeficiencia.com/wp-content/uploads/2017/04/circuito-cerrado-de-television-featured-696x385.jpg',
  },
  {
    title: 'Automatización de Puertas',
    description: 'Sistemas de apertura automática para puertas y portones. Control remoto y opciones de seguridad avanzadas. Instalación profesional y mantenimiento preventivo para garantizar un funcionamiento óptimo.',
    imageUrl: 'https://img.archiexpo.es/images_ae/photo-m2/3823-7344385.jpg',
  },
  {
    title: 'Sistemas de Alarma',
    description: 'Instalación de alarmas inteligentes con notificaciones en tiempo real y conexión a central de monitoreo. Protección avanzada contra intrusos, incendios y otras emergencias. Integración con sistemas domóticos.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920',
  },
  {
    title: 'Domótica',
    description: 'Integración de sistemas inteligentes para el hogar y oficina. Control de iluminación, clima, seguridad y entretenimiento desde tu smartphone. Automatización completa de espacios para mayor confort y eficiencia energética.',
    imageUrl: 'https://www.bbva.com/wp-content/uploads/2021/12/casa-domotica-ahorro-control-eficiencia-energetico-consumo-BBVA-sostenibilidad.jpg',
  },
];

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center bg-white py-20"
    >
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16"
          ref={ref}
        >
          Nuestros Servicios
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {loading ? (
                <div className="animate-pulse p-6 space-y-4">
                  <div className="w-full h-48 bg-gray-300 rounded-2xl"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ) : (
                <div className="relative h-full flex flex-col">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative p-6 flex-grow flex flex-col justify-between z-10">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-500 transition-colors duration-300">{service.title}</h3>
                    <AnimatePresence>
                      {expandedIndex === index ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-700 mt-2"
                        >
                          {service.description}
                        </motion.p>
                      ) : (
                        <p className="text-gray-500 line-clamp-2">{service.description}</p>
                      )}
                    </AnimatePresence>
                    <motion.button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 flex items-center justify-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 self-start group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{expandedIndex === index ? 'Leer menos' : 'Leer más'}</span>
                      {expandedIndex === index ? (
                        <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                      )}
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
