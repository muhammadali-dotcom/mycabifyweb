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
    title: "Complete when you need it. Simple where it matters.",
    intro: "Complete, flexible taxi management technology with hands-on support.",
    gridLabel: "SIX REASONS TO SWITCH",
    gridTitle: "What makes MyCabify different.",
    items: [
      {
        title: "Finally, a calm operation",
        copy: "No more juggling phones, notepads and guesswork. Everything you need to run your day is right where you expect it.",
        icon: "clarity",
      },
      {
        title: "Built to be understood",
        copy: "Your team shouldn't need a manual to feel confident. MyCabify feels familiar from the very first shift.",
        icon: "understand",
      },
      {
        title: "Made for how you actually work",
        copy: "Not a rigid system you have to bend around. MyCabify adapts to the way your operation already runs.",
        icon: "flexible",
      },
      {
        title: "Room to grow, without the fear",
        copy: "Add drivers, branches or new ways to book without worrying your system will buckle under it.",
        icon: "rocket",
      },
      {
        title: "Every part of your day, connected",
        copy: "Dispatch, drivers and passengers moving as one, so nothing slips through the cracks.",
        icon: "connected",
      },
      {
        title: "Peace of mind, shift after shift",
        copy: "Know what's happening across your fleet at a glance, so you can stop firefighting and start planning.",
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
  "cookie-policy": {
    label: "LEGAL",
    title: "Cookie Policy",
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
