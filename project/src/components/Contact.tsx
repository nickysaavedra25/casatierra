import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  return (
    <section 
      id="contacto" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-amber-900/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              CONTACTO
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg">+52 248 177 1631</span>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">casa.tierra.inmobiliaria@gmail.com</span>
              </div>
              
              <div className="flex items-start space-x-4 text-white">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg leading-relaxed">
                  Carril San Miguel 208 Int.3 Col Alvaro Obregón San Martín Texmelucan
                </span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/Mv3o7WsSgzNGN1EG/?mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/casa_tierra_inmobiliaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border-2 border-transparent text-white placeholder-gray-300 px-4 py-4 rounded-lg focus:border-amber-500 focus:outline-none transition-all duration-300 pr-12"
                />
                <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border-2 border-transparent text-white placeholder-gray-300 px-4 py-4 rounded-lg focus:border-amber-500 focus:outline-none transition-all duration-300 pr-12"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Celular"
                  className="w-full bg-white/10 backdrop-blur-sm border-2 border-transparent text-white placeholder-gray-300 px-4 py-4 rounded-lg focus:border-amber-500 focus:outline-none transition-all duration-300 pr-12"
                />
                <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje..."
                  rows={6}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border-2 border-transparent text-white placeholder-gray-300 px-4 py-4 rounded-lg focus:border-amber-500 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
            
            {submitMessage && (
              <div className="mt-6 p-4 bg-green-600 text-white rounded-lg animate-fade-in">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;