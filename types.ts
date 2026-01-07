
export interface WhatsAppMessage {
  sender: 'patient' | 'system' | 'tag';
  text: string;
  time: string;
  buttons?: string[];
}

export interface Feature {
  id: number;
  title: string;
  subheadline: string;
  description: string;
  benefit: string;
  messages: WhatsAppMessage[];
  isDashboard?: boolean;
}

export interface Bonus {
  id: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  impact: string;
  visual: {
    type: 'whatsapp' | 'document' | 'calendar';
    messages?: WhatsAppMessage[];
  };
}

export interface ComparisonRow {
  id: number;
  title: string;
  bad: {
    headline: string;
    explanation: string;
    outcome: string;
  };
  good: {
    headline: string;
    explanation: string;
    outcome: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  clinicName: string;
  clinicInitials: string;
  message: string;
  time: string;
}
