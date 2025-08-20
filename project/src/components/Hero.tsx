import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, image: 'https://images.pexels.com/photos/323774/pexels-photo-323774.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8B4513, #A0522D, #CD853F, #DEB887)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
        {/* Hero Content */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="animate-slide-in-left block">Agencia</span>
            <span className="animate-slide-in-right block text-yellow-300">
              Inmobiliaria
            </span>
            <span className="animate-slide-in-left block">Comercial</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
            Conocer a nuestros clientes para cumplir sus objetivos.
            <br />
            Somos un grupo de expertos en el sector inmobiliario que se preocupan y trabajan para ti.
          </p>

          <div className="animate-fade-in-up animation-delay-600">
            <button
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amber-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Contáctanos
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative animate-fade-in-up animation-delay-900">
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;