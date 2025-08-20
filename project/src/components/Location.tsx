import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-800 dark:text-amber-400 mb-6">
            NUESTRA UBICACIÓN
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Encuéntranos en nuestras oficinas
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto animate-fade-in-up animation-delay-300">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.921155324788!2d-98.44491322532977!3d19.28579464535389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd48716fc5e8d%3A0x4819af96f5187eae!2sCarril%20San%20Miguel%20208-Int.3%2C%20Col%20San%20Miguel%20Lardizabal%2C%2074078%20San%20Mart%C3%ADn%20Texmelucan%20de%20Labastida%2C%20Pue.!5e0!3m2!1ses!2smx!4v1717271135978!5m2!1ses!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 lg:h-[450px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;