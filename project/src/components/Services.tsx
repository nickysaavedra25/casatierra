import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Phone,
      title: 'ASESORAMIENTO EN LA BÚSQUEDA DE INMUEBLES',
      description: 'Ofrecemos estrategias personalizadas basadas en los objetivos y requerimientos de nuestros clientes, realizamos un análisis de riesgo del bien inmueble y la identificación de oportunidades de inversión, la gestión de carteras inmobiliarias, así como la planificación a largo plazo.'
    },
    {
      icon: ShieldCheck,
      title: 'COMPRA DE REMATES INMOBILIARIOS',
      description: 'Expande tu portafolio inmobiliario de manera efectiva a precios significativamente reducidos y adquiere bienes por debajo del valor de mercado.'
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-800 dark:text-amber-400 mb-6">
            SERVICIOS
            <br />
            <span className="text-gray-800 dark:text-white">QUE OFRECEMOS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;