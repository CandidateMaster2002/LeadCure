import React, { useState, useEffect } from "react";
import "../../public/images/Dashboard.JPG";

// Types
interface WhatsAppMessage {
  sender: "patient" | "system" | "tag";
  text: string;
  time: string;
  buttons?: string[];
}

interface Feature {
  id: number;
  title: string;
  description: string;
  benefit: string;
  messages: WhatsAppMessage[];
}

// Reveal Animation Component
const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// WhatsApp Chat Component
const WhatsAppChat: React.FC<{ messages: WhatsAppMessage[] }> = ({
  messages,
}) => {
  const [visibleMessages, setVisibleMessages] = useState<WhatsAppMessage[]>([]);

  useEffect(() => {
    setVisibleMessages([]);
    let index = 0;
    let timeoutId: number;

    const showNext = () => {
      if (index >= messages.length) return;

      const currentMessage = messages[index];
      setVisibleMessages((prev) => [...prev, currentMessage]);

      index++;

      if (index < messages.length) {
        const nextMessage = messages[index];
        const delay =
          nextMessage.sender === "patient"
            ? 800
            : nextMessage.buttons
            ? 1200
            : 1000;
        timeoutId = window.setTimeout(showNext, delay);
      }
    };

    if (messages.length > 0) {
      timeoutId = window.setTimeout(showNext, 500);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [messages]);

  return (
    <div className="bg-[#EFE9E2] rounded-3xl p-4 md:p-8 shadow-2xl min-h-[240px] md:min-h-[320px] flex flex-col justify-center space-y-3 md:space-y-4">
      {visibleMessages.map((msg, idx) => {
        if (msg.sender === "tag") {
          return (
            <div key={idx} className="flex justify-center py-2 md:py-3">
              <span className="bg-slate-900 text-white text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full uppercase tracking-wider shadow-lg">
                {msg.text}
              </span>
            </div>
          );
        }

        return (
          <div
            key={idx}
            className="space-y-2 md:space-y-3 animate-[slideIn_0.4s_ease-out]"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div
              className={`flex ${
                msg.sender === "patient" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] md:max-w-[80%] p-3 md:p-5 rounded-2xl md:rounded-3xl text-sm md:text-base shadow-lg transition-transform hover:scale-[1.02] ${
                  msg.sender === "patient"
                    ? "bg-[#005C4B] text-white rounded-tr-none"
                    : "bg-white text-slate-800 rounded-tl-none"
                }`}
              >
                <p className="whitespace-pre-line leading-relaxed font-light">
                  {msg.text}
                </p>

                <div
                  className={`text-[9px] md:text-[10px] mt-1.5 md:mt-2 flex items-center justify-end space-x-1.5 ${
                    msg.sender === "patient"
                      ? "text-emerald-100"
                      : "text-slate-400"
                  } font-medium`}
                >
                  <span>{msg.time}</span>
                  {msg.sender === "patient" && (
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M4 12l4 4L20 6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {msg.buttons && (
              <div className="flex flex-col space-y-2 pr-2 md:pr-8">
                {msg.buttons.map((btn, bIdx) => (
                  <div
                    key={bIdx}
                    className="bg-white border-2 border-slate-100 text-[#00a884] text-xs md:text-sm font-bold py-2.5 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl text-center shadow-md hover:shadow-xl hover:bg-slate-50 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-95"
                  >
                    {btn}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ================= DATA =================

const PRIMARY_FEATURES: Feature[] = [
  {
    id: 1,
    title: "Instant Auto Replies (24/7)",
    description:
      "Every new inquiry gets an instant reply - even at night or during busy clinic hours. Basic questions and next steps are handled immediately so patients don’t wait or move on.",
    benefit: "You don’t lose patients just because no one replied in time.",
    messages: [
      { sender: "patient", text: "Hi, what's the cost of lip fillers?", time: "11:42 PM" },
      {
        sender: "system",
        text:
          "Lip fillers range from ₹28,000–₹45,000.\n\nMost patients just want a soft, natural look that adds a bit of shape and hydration. You'll see the results instantly! ✨\n\nWant to see our options or chat with a doctor?",
        time: "11:42 PM",
        buttons: ["Explain Options", "Book Consultation"],
      },
    ],
  },
  {
    id: 2,
    title: "90-Second Self-Booking",
    description:
      "Patients can see available slots and book appointments directly inside WhatsApp. No phone calls, no follow-ups, no manual confirmation needed.",
    benefit: "More interested patients actually complete their booking because of easy self-booking.",
    messages: [
      {
        sender: "system",
        text: "Choose a slot with Dr. Ananya:",
        time: "10:15 AM",
        buttons: ["Tomorrow 4:00 PM", "Thursday 11:00 AM", "Saturday 2:30 PM"],
      },
      { sender: "patient", text: "Tomorrow 4:00 PM", time: "10:16 AM" },
      { sender: "system", text: "✔ Consultation confirmed. See you then!", time: "10:16 AM" },
    ],
  },
  {
    id: 3,
    title: "Ghost Inquiry Recovery",
    description:
      "Old inquiries that went silent are followed up gently at the right time. Messages sound human and polite, not automated or pushy.",
    benefit: "Atleast 2 out of 10 such old enquires convert to bookings when followed up.",
    messages: [
      {
        sender: "system",
        text:
          "Hi Anjali! Checking in since you asked about PRP last week. 😊\n\nWe’re actually doing 20% off this week. Would you like the updated pricing?",
        time: "Tuesday 9:00 AM",
        buttons: ["Yes, send it", "Not right now"],
      },
    ],
  },
  {
    id: 4,
    title: "Automated Reminders",
    description:
      "WhatsApp reminders are sent 24 hours and 2 hours before the appointment. Patients can confirm or reschedule with one tap.",
    benefit: "Fewer no-shows. When they don't have such an easy way to reschedule, many just skip their appointment.",
    messages: [
      {
        sender: "system",
        text:
          "Reminder: You're scheduled for tomorrow at 11:00 AM. Confirm or reschedule?",
        time: "9:00 AM",
        buttons: ["Confirm", "Reschedule"],
      },
      { sender: "patient", text: "Confirm", time: "9:05 AM" },
    ],
  },
];

const EXPANDED_FEATURES: Feature[] = [
  {
    id: 5,
    title: "Smart Qualification",
    description:
      "Simple questions help understand how serious and urgent a patient is. This helps your team  give more focus on patients who are ready to book.",
    benefit: "Save 2-4 hrs day of staff, better conversions.",
    messages: [
      {
        sender: "system",
        text:
          "To give you the best advice, how soon were you looking to get this done? 😊",
        time: "2:00 PM",
        buttons: ["Just curious", "In a few weeks", "As soon as possible"],
      },
    ],
  },
  {
    id: 6,
    title: "Unified Pipeline",
    description:
      "All inquires and bookings are visible in one place along with detailed summary & analytics. You can clearly see where patients drop off.",
    benefit: "Better control over your entire conversion flow.",
    messages: [
      { sender: "tag", text: "REAL-TIME DASHBOARD", time: "NOW" },
      {
        sender: "system",
        text: "Visualizing your entire clinic's performance in one view.",
        time: "NOW",
      },
    ],
  },
];

// ================= MAIN =================

export const Protocols: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const renderProtocolItem = (feature: Feature, idx: number) => (
    <Reveal key={feature.id} delay={idx * 100} className="flex flex-col items-start">
      <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
        <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg">
          {feature.id}
        </div>
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
          {feature.title}
        </h3>
      </div>

      <p className="text-sm md:text-lg text-slate-700 leading-relaxed mb-4 md:mb-5">
        {feature.description}
      </p>

      <div className="w-full p-3 md:p-5 bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 rounded-r-2xl shadow-sm mb-4 md:mb-6">
        <p className="text-emerald-900 font-semibold text-sm md:text-base">
          {feature.benefit}
        </p>
      </div>

      <div className="w-full">
        {feature.id === 6 ? (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="../../public/images/Dashboard.JPG"
              alt="Clinical Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          <WhatsAppChat messages={feature.messages} />
        )}
      </div>
    </Reveal>
  );

  return (
    <section
      id="protocols"
      className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl md:rounded-[4rem]"
    >
      <Reveal className="mb-12 md:mb-20 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
          Features
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
          Features that move patients from inquiry to appointment
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {PRIMARY_FEATURES.map(renderProtocolItem)}
        {showAll && EXPANDED_FEATURES.map(renderProtocolItem)}
      </div>

      {!showAll && (
        <Reveal className="flex justify-center mt-16 md:mt-20">
          <button
            onClick={() => setShowAll(true)}
            className="bg-slate-900 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl"
          >
            View Advanced Features
          </button>
        </Reveal>
      )}
    </section>
  );
};

// Animations
const style = document.createElement("style");
style.textContent = `
@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);



export default Protocols;
