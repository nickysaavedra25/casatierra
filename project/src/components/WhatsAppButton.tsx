import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=2481771631', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-30"></div>
    </button>
  );
};

export default WhatsAppButton;