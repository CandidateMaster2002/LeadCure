
import { Feature, Bonus, ComparisonRow, FAQItem, Testimonial } from './types';

export const WhatsAppContactInfo = {
  phoneNumber: '+919528523430',
  prefilledMessage: 'Hi, I am interested in 30 days free LEADCURE™ for my clinic. Please share next steps.'
};


export const BONUSES: Bonus[] = [
  {
    id: 'b1',
    title: "WhatsApp Analytics",
    summary: "Performance summaries.",
    description: "Receive concise conversion health reports every Sunday directly on WhatsApp.",
    bullets: ["Inquiries vs Bookings", "Revenue Pipeline Estimates"],
    impact: "Owner visibility in under 30 seconds.",
    visual: {
      type: 'whatsapp',
      messages: [
        { sender: 'tag', text: "WEEKLY SUMMARY", time: "SUN 9:00 AM" },
        { sender: 'system', text: "Inquiries: 84\nBookings: 22\nValue: ₹3,40,000", time: "9:01 AM" }
      ]
    }
  },
  {
    id: 'b2',
    title: "Staff Training & SOPs",
    summary: "Staff mastery.",
    description: "Full handover with walkthrough videos and workflows to ensure your team is ready day one.",
    bullets: ["Step-by-step SOP PDF", "Staff training video"],
    impact: "Reduces staff dependency by 60%.",
    visual: { type: 'document' }
  },
  {
    id: 'b3',
    title: "Upsell Sequences",
    summary: "LTV Automation.",
    description: "Automated suggestions for complementary treatments based on patient history.",
    bullets: ["Botox → Filler suggestions", "Smart timing logic"],
    impact: "Increases order value by up to 40%.",
    visual: {
      type: 'whatsapp',
      messages: [
        { sender: 'system', text: "Hi Sarah, patients who enjoy Botox often combine it with our Skin Booster. Interested?", time: "10:00 AM", buttons: ["Show Bundle", "Later"] }
      ]
    }
  },
  {
    id: 'b4',
    title: "Monthly Optimization",
    summary: "System growth.",
    description: "Continuous optimization of flows based on your specific patient interaction data.",
    bullets: ["Performance review calls", "A/B tested flows"],
    impact: "Continuous ROI improvement.",
    visual: { type: 'calendar' }
  }
];

export const FAQ_DATA = [
  {
    id: 1,
    question: "What exactly does LEADCURE™ do for my clinic?",
    answer: "LEADCURE™ turns WhatsApp inquiries into booked consultations automatically.\n\nIt replies instantly, qualifies patients, books appointments, sends reminders, and follows up on missed inquiries, so conversions happen even when your team is busy or offline.\n\nThis is not marketing. It’s conversion infrastructure."
  },
 // Correct usage in your data array:
{
  id: 2,
  question: "Is this just a chatbot?",
  answer: "No.\n\nChatbots answer questions. LEADCURE™ runs a booking system.\nIt handles:\n• Instant replies\n• Qualification\n• Appointment booking\n• Follow-ups\n• Reminders\n• Human handoff\n\nThink of it as a digital front desk that never sleeps, not a bot."
},
  {
    id: 3,
    question: "Will this replace my front-desk or coordinators?",
    answer: "No and that’s important.\n\nLEADLOCK™ removes repetitive work (pricing, availability, FAQs).\n\nYour staff focuses only on serious, ready-to-book patients.\nClinics usually see less stress, not job replacement."
  },
  {
    id: 4,
    question: "What if this doesn’t work for my clinic?",
    answer: "We remove the risk completely.\n\n• If the system is not live and working within 30 days, we continue working for free.\n• If there’s no measurable improvement within 90 days, you get a full refund.\n\nYou keep the system."
  },
  {
    id: 5,
    question: "Who is this system best suited for?",
    answer: "Premium skin, hair, and aesthetic clinics that:\n\n• Get consistent inquiries (organic or paid)\n• Offer ₹30K+ treatments\n• Want predictable bookings without chaos\n• Don’t want to depend on one staff member"
  },
  {
    id: 6,
    question: "How does the system know which inquiries are serious?",
    answer: "It asks smart, natural questions like:\n\n• Which treatment are you considering?\n• When are you planning to start?\n• Budget range (softly phrased)\n\nOnly high-intent inquiries reach your staff."
  },
  {
    id: 7,
    question: "What happens if a patient asks only for price and disappears?",
    answer: "Those inquiries are automatically followed up.\nLEADLOCK™ runs polite, non-pushy follow-ups over time.\n\nOn average, 1 in 20 ghosted inquiries converts without extra ad spend."
  },
  {
    id: 8,
    question: "Will patients feel like they are talking to a robot?",
    answer: "No.\nMessages are written in a human, clinic-style tone, and patients mostly tap buttons instead of typing.\n\nMost clinics report patients saying: “Your responses are very professional.”"
  },
  {
    id: 9,
    question: "Does this reduce no-shows?",
    answer: "Yes.\nAutomated reminders allow patients to confirm, reschedule, or cancel easily.\n\nClinics typically see 30–40% fewer no-shows."
  },
  {
    id: 10,
    question: "Can the system explain different treatments properly?",
    answer: "Yes.\nEach treatment has its own conversation flow-Botox, fillers, PRP, hair transplant, etc.\n\nThis avoids generic replies and builds trust early."
  },
  {
    id: 11,
    question: "Will my staff need heavy training?",
    answer: "No.\nWe provide:\n• A simple SOP PDF\n• A short video walkthrough\n• Clear handoff rules\n\nMost teams understand the system in one session."
  },
  {
    id: 12,
    question: "Why do you take only a limited number of clinics?",
    answer: "Because this is done-for-you infrastructure, not software.\nEach clinic requires:\n• Custom flows\n• Brand tone alignment\n• Testing & monitoring\n\nWe limit volume to protect results."
  }
];

