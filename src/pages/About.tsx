import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Sobre Nosotros
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-xl shadow-xl relative bg-white"
        >
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          ) : (
            <div className="relative">
              <p className="text-gray-700 text-lg leading-relaxed">
                En <span className="font-semibold">Mibla Servicios Integrales</span>, nos especializamos en soluciones avanzadas de seguridad para transporte y negocios. Ofrecemos servicios confiables como monitoreo en tiempo real, grabación de alta calidad, y sistemas de cámaras para garantizar la seguridad de tus operaciones.
              </p>
              <p className="mt-4 text-gray-700">
                Nuestros servicios incluyen cámaras de monitoreo para puntos ciegos, cabina, retrovisor y frontal. Estas soluciones ayudan a prevenir actos delictivos, realizar seguimiento de mercancías, investigar accidentes, cumplir normativas y proteger contra acusaciones falsas.
              </p>
              <ul className="mt-6 text-gray-700 space-y-2">
                <li>
                  <strong>Beneficios:</strong> Reducción de costos, protección para conductores y pasajeros, y monitoreo en tiempo real.
                </li>
                <li>
                  <strong>Misión:</strong> Brindar tranquilidad a nuestros clientes con tecnología de seguridad confiable y accesible.
                </li>
                <li>
                  <strong>Visión:</strong> Ser líderes nacionales en la implementación de soluciones integrales de seguridad.
                </li>
                <li>
                  <strong>Valores:</strong> Innovación, Excelencia, Compromiso, Confianza.
                </li>
              </ul>
              <div className="mt-6 flex justify-center">
                <motion.img
                  src="https://media.licdn.com/dms/image/v2/D5612AQGlXUqUYA5GzA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676562542981?e=2147483647&v=beta&t=Q_AfJ6EQ98KAg6qtkgIEcgGnDOOfcfelr25K2_PfXQw"
                  alt="Equipo profesional trabajando en soluciones de seguridad"
                  className="w-64 h-64 object-cover rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/51933371159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  ¿Quieres cotizar? ¡Escríbenos!
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
