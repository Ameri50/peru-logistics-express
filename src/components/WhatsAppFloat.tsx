import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "51923987360";
  const whatsappMessage = encodeURIComponent("Hola, necesito información sobre sus servicios.");

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </span>
      </button>

      {/* Tooltip */}
      <div
        className={`fixed bottom-6 right-24 z-50 transition-all duration-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      >
        <div className="bg-white rounded-lg shadow-xl p-3 max-w-[200px]">
          <p className="text-sm font-semibold text-gray-800 mb-1">
            ¿Necesitas ayuda?
          </p>
          <p className="text-xs text-gray-600">
            Chatea con nosotros por WhatsApp
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;
