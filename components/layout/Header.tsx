import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/scroll';
import { WhatsAppContactInfo } from '../../constants';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'protocols' },
  { label: 'Testimonials', id: 'outcomes' },
  { label: 'FAQs', id: 'faq' },
  { label: 'Offer', id: 'offer' },
];

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = WhatsAppContactInfo?.phoneNumber;
    const message = encodeURIComponent(
      WhatsAppContactInfo?.prefilledMessage || 'Hi'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 px-4 md:px-8 shadow-sm">
      <div className="max-w-[1400px] mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
<a
  href="#home"
  onClick={(e) => scrollToSection(e, 'home')}
  className="text-lg md:text-xl font-semibold tracking-wide shrink-0 transition-opacity hover:opacity-90"
>
  <span className="text-slate-900">Lead</span>
  <span className="text-emerald-600">Cure</span>
  <span className="text-slate-500 align-super text-xs ml-0.5">™</span>
</a>



        {/* Desktop Nav */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-emerald-600 py-2 ${
                    activeSection === item.id
                      ? 'text-emerald-600'
                      : 'text-slate-800'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 md:px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg shrink-0 active:scale-95"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM17 16.2C16.82 16.66 16.23 16.97 15.63 17.2C14.78 17.5 13.14 17.87 11.64 17.29C9.56 16.47 7.81 14.43 7.19 12.35C6.73 10.71 7.23 8.71 8.27 7.77C8.85 7.2 9.63 7.2 10.06 7.2C10.29 7.2 10.5 7.3 10.66 7.49L11.64 8.95C11.93 9.33 12.01 9.81 11.85 10.22C11.75 10.5 11.59 10.85 11.43 11.11C11.3 11.32 11.14 11.5 10.99 11.69C10.5 12.43 10.56 12.75 10.78 12.94C11.67 13.74 12.75 14.36 13.89 14.71C14.96 15 15.32 14.84 15.52 14.47L16.41 12.87C16.5 12.69 16.67 12.57 16.87 12.56C17.66 12.87 17.75 13.15 17.68 13.42L17 16.2Z" />
            </svg>

            Start Free
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="py-6 px-4">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={(e) =>
                    scrollToSection(e, item.id, () => setIsMenuOpen(false))
                  }
                  className={`w-full text-left text-sm font-bold uppercase tracking-widest py-3 border-b border-slate-50 ${
                    activeSection === item.id
                      ? 'text-emerald-600'
                      : 'text-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
