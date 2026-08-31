export type Item = { title: string; copy: string; icon?: string; details?: string[] };

export type Basic = {
  label: string;
  title: string;
  intro: string;
  items: Item[];
  gridLabel?: string;
  gridTitle?: string;
};

export const basics: Record<string, Basic> = {
  "why-mycabify": {
    label: "WHY MYCABIFY",
    title: "What makes MyCabify the right choice for your taxi business?",
    intro:
      "Because running a taxi company is already demanding. MyCabify brings your bookings, dispatch, drivers, customers and payments together in one simple system, helping you reduce daily stress, stay in control and grow with confidence.",
    gridLabel: "SIX REASONS TO SWITCH",
    gridTitle: "What makes MyCabify different.",
    items: [
      {
        title: "Finally, a calmer operation",
        copy: "No more juggling phones, notepads and guesswork. Everything you need to run your day is in one place, exactly where you need it.",
        icon: "clarity",
      },
      {
        title: "Easy from the very first day",
        copy: "Your team shouldn't need hours of training to get started. MyCabify is simple, familiar and easy to use from the very first shift.",
        icon: "understand",
      },
      {
        title: "Works the way you do",
        copy: "Your business shouldn't have to change to fit your software. MyCabify adapts to your operation, your team and the way you already work.",
        icon: "flexible",
      },
      {
        title: "Grow without the growing pains",
        copy: "Add more drivers, more bookings or even new locations without adding unnecessary complexity to your operation.",
        icon: "rocket",
      },
      {
        title: "Everything working together",
        copy: "Keep dispatch, drivers and passengers connected in one place, so your team always knows what's happening and nothing gets missed.",
        icon: "connected",
      },
      {
        title: "Peace of mind, shift after shift",
        copy: "See what's happening across your operation at a glance. Spend less time firefighting and more time planning what comes next.",
        icon: "clock247",
      },
    ],
  },
  about: {
    label: "ABOUT MYCABIFY",
    title: "Practical technology for UK taxi companies.",
    intro: "We make complete taxi management easier and more accessible.",
    items: [],
  },
  contact: {
    label: "CONTACT MYCABIFY",
    title: "Let’s make your taxi operation simpler.",
    intro: "Contact our team for a demo, quote, implementation discussion or support.",
    items: [],
  },
  "privacy-policy": {
    label: "LEGAL",
    title: "Privacy Policy",
    intro: "Reserved for reviewed legal content before launch.",
    items: [],
  },
  terms: {
    label: "LEGAL",
    title: "Terms and Conditions",
    intro: "Reserved for reviewed legal content before launch.",
    items: [],
  },
};
