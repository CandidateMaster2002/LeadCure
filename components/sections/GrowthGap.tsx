import React from "react";
import { WhatsAppCTAButton } from "../ui/WaCTAButton";
import { Reveal } from "../ui/Reveal";

const GrowthGap: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
           Inquiry Handling Gap
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Same ads. Same treatments. Same city.  
            The only difference is how fast patients are handled.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manual Clinics */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Manual Clinics
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Replies hours later
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Patients drift away silently
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Staff chases, forgets, repeats
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Empty slots & missed follow-ups
              </li>
            </ul>
          </div>

          {/* LeadCure Clinics */}
          <div className="border border-gray-900 rounded-2xl p-8 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              LeadCure™ Clinics
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex gap-3">
                <span className="text-green-600">✓</span>
                Replies in seconds
              </li>
              <li className="flex gap-3">
                <span className="text-green-600">✓</span>
                Patients book instantly
              </li>
              <li className="flex gap-3">
                <span className="text-green-600">✓</span>
                System handles follow-ups
              </li>
              <li className="flex gap-3">
                <span className="text-green-600">✓</span>
                Calendar stays full
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-lg font-medium text-gray-900 mb-4">
            This isn’t a marketing problem.  
            It’s an infrastructure gap.
          </p>

        <Reveal
               delay={500}
               className="w-full max-w-md mx-auto"
             >
               <WhatsAppCTAButton />
               
             </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GrowthGap;
