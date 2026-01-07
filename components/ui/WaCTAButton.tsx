import React from 'react';
import { WhatsAppContactInfo } from '../../constants';

interface WhatsAppCTAButtonProps {
  onClick: () => void;
  text?: string;
  fullWidth?: boolean;
}


export const WhatsAppCTAButton: React.FC<WhatsAppCTAButtonProps> = ({
  text = 'Get FREE for 30 days',
  fullWidth = true,
}) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = WhatsAppContactInfo?.phoneNumber; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(WhatsAppContactInfo?.prefilledMessage || 'Hi');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <button
      onClick={handleWhatsAppClick}
      className={`${
        fullWidth ? 'w-full' : ''
      } flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl`}
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM17 16.2C16.82 16.66 16.23 16.97 15.63 17.2C14.78 17.5 13.14 17.87 11.64 17.29C9.56 16.47 7.81 14.43 7.19 12.35C6.73 10.71 7.23 8.71 8.27 7.77C8.85 7.2 9.63 7.2 10.06 7.2C10.29 7.2 10.5 7.3 10.66 7.49L11.64 8.95C11.93 9.33 12.01 9.81 11.85 10.22C11.75 10.5 11.59 10.85 11.43 11.11C11.3 11.32 11.14 11.5 10.99 11.69C10.91 11.8 10.84 11.91 10.77 12.02C10.73 12.07 10.7 12.13 10.67 12.18C10.5 12.43 10.56 12.75 10.78 12.94C11.67 13.74 12.75 14.36 13.89 14.71C14.12 14.78 14.33 14.85 14.54 14.9C14.96 15 15.32 14.84 15.52 14.47L16.41 12.87C16.5 12.69 16.67 12.57 16.87 12.56C17.04 12.56 17.31 12.6 17.45 12.71C17.66 12.87 17.75 13.15 17.68 13.42L17 16.2Z" />
      </svg>

      {text}
    </button>
  );
};
