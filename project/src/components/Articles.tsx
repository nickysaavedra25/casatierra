import React from 'react';
import { ExternalLink } from 'lucide-react';

const Articles: React.FC = () => {
  const articles = [
    {
      title: 'Ventajas confiar agencia inmobiliaria con experiencia',
      description: 'Escatimar gastos en tu próximo hogar no es una opción, porque sabes lo que quieres y lo que no, ahora necesitas asesoría profesional para tomar la mejor decisión.',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://blog.quierocasa.com.mx/4-ventajas-confiar-agencia-inmobiliaria-con-experiencia?hs_amp=true'
    },
    {
      title: 'Estos son los impuestos que de deben pagar en la compraventa de una casa',
      description: 'Conocer toda la carga tributaria y las obligaciones que están detrás de una operación de compraventa puede ayudarte a evitar perder dinero o algún otro recurso.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://www.forbes.com.mx/estos-son-los-impuestos-que-de-deben-pagar-en-la-compraventa-de-una-casa/'
    },
    {
      title: 'Por que tiene que constar en escritura publica',
      description: 'Este artículo tiene como objetivo orientar a los lectores sobre los aspectos jurídicos a cuidar en la compra de una casa. Enseñar las razones por las cuales se debe otorgar este contrato en escritura pública.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://www.bufetejuridicogratuito.org.mx/2021/06/03/por-que-tiene-que-constar-en-escritura-publica/'
    }
  ];

  return (
    <section id="articulos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-amber-600 dark:text-amber-400 font-bold text-lg mb-4 uppercase tracking-wide">
            ARTÍCULOS DE INTERÉS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Te mostramos algunos artículos que podrían servirte
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {article.description}
                </p>
                
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-all duration-300 hover:scale-105 group"
                >
                  <span>Leer Artículo</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;