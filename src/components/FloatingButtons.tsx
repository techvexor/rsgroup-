import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = '+971501234567'; // Replace with actual phone number
  const whatsappNumber = '971501234567'; // WhatsApp format (no + or spaces)
  const whatsappMessage = 'Hello! I am interested in your services.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-500 hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Call us"
      >
        <Phone size={26} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingButtons;
