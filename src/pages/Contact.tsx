import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const whatsappNumber = '51933371159'; // Número del cliente en formato internacional
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hola, soy ${name}. Mi correo es ${email}. Tengo la siguiente consulta: ${message}`
    )}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappLink, '_blank');
  };

  const handleDirectionsClick = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=Urb+Santa+Cruz+Mz+I,+Lte+6,+Per%C3%BA`;
    window.open(mapsUrl, '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 py-20">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Contáctanos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl shadow-2xl glass-card p-8 bg-white"
        >
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          ) : (
            <div>
              <form className="space-y-6 mb-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-800 font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-1">Mensaje</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-shadow shadow hover:shadow-lg"
                >
                  Enviar Mensaje por WhatsApp
                </motion.button>
              </form>

              {/* Mapa Embebido */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3901.9785913799774!2d-77.11551292374281!3d-12.044993888191739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUrb%20Santa%20Cruz%20Mz%20I,%20Lte%206,%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1734131283799!5m2!1ses-419!2spe"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Botón de ¿Cómo llegar? */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDirectionsClick}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-shadow shadow hover:shadow-lg"
              >
                ¿Cómo llegar?
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
