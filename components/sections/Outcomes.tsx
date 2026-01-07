import React from 'react';
import { Reveal } from '../ui/Reveal';

const TESTIMONIAL_IMAGES = [
  '/images/wasc1.png',
  '/images/wasc2.png',
  '/images/wasc3.png',
  '/images/instasc1.png',
  '/images/instasc2.png',
];

export const Outcomes: React.FC = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

  return (
    <section id="outcomes" className="bg-white py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <Reveal className="mb-12">
    <h2 className="text-4xl md:text-6xl font-serif italic font-bold text-slate-900">
      Trusted by Doctors
    </h2>
  </Reveal>

        {/* Desktop: Single Row */}
        <div className="hidden md:block relative">
          <div className="flex gap-6 animate-scroll-desktop">
            {duplicatedImages.map((img, idx) => (
              <div
                key={idx}
                className="w-[380px] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt="Clinic WhatsApp testimonial"
                  className="w-full h-auto rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Two Rows */}
        <div className="md:hidden space-y-6">
          {/* First Row - Scroll Right */}
          <div className="relative">
            <div className="flex gap-4 animate-scroll-mobile">
              {duplicatedImages.slice(0, 6).map((img, idx) => (
                <div
                  key={idx}
                  className="w-[280px] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={img}
                    alt="Clinic WhatsApp testimonial"
                    className="w-full h-auto rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Left */}
          <div className="relative">
            <div className="flex gap-4 animate-scroll-mobile-reverse">
              {duplicatedImages.slice(0, 6).reverse().map((img, idx) => (
                <div
                  key={idx}
                  className="w-[280px] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={img}
                    alt="Clinic WhatsApp testimonial"
                    className="w-full h-auto rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-desktop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-mobile-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-desktop {
            animation: scroll-desktop 30s linear infinite;
          }

          .animate-scroll-mobile {
            animation: scroll-mobile 20s linear infinite;
          }

          .animate-scroll-mobile-reverse {
            animation: scroll-mobile-reverse 20s linear infinite;
          }

          /* Pause on hover */
          .animate-scroll-desktop:hover,
          .animate-scroll-mobile:hover,
          .animate-scroll-mobile-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};