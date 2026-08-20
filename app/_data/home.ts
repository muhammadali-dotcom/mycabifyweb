export type HomeSolution = {
  no: string;
  name: string;
  role: string;
  href: string;
  time: string;
  title: string;
  copy: string;
  type: string;
  image?: string;
};

export const solutions: HomeSolution[] = [
  {
    no: "01",
    name: "Dispatch System",
    role: "DISPATCH SYSTEM",
    href: "/dispatch-system",
    time: "01:30",
    title: "A booking enters. The whole operation moves.",
    copy: "Create, price, allocate and follow every journey from one clear operational view.",
    type: "desktop",
    image: "/dispatch-system/dispatch-light.png",
  },
  {
    no: "02",
    name: "Driver App",
    role: "DRIVER",
    href: "/driver-app",
    time: "00:60",
    title: "Every instruction, exactly when it matters.",
    copy: "Keep drivers connected from job offer through pickup, journey and completion.",
    type: "phone",
    image: "/driver-app/front.jpeg",
  },
  {
    no: "03",
    name: "Passenger App",
    role: "PASSENGER",
    href: "/passenger-app",
    time: "00:60",
    title: "Your service. Their easiest booking yet.",
    copy: "Give passengers a simple branded way to book, manage and follow their rides.",
    type: "passenger",
    image: "/passenger-app/front.png",
  },
  {
    no: "04",
    name: "Web Booker",
    role: "WEB BOOKER",
    href: "/web-booker",
    time: "01:30",
    title: "Your website becomes a booking channel.",
    copy: "Send online bookings straight into dispatch, ready for your team to manage.",
    type: "browser",
    image: "/web-booker/screen-1.png",
  },
];

export type HomeCustomer = {
  name: string;
  detail: string;
  logo: string;
  quote: string;
  theme: string;
};

export const customers: HomeCustomer[] = [
  {
    name: "Bittacy Cars",
    detail: "Taxi service in London, England",
    logo: "https://mycabify.com/assets/images/testimonial/testmonial1.jpg",
    quote:
      "MyCabify has made my daily booking and dispatch so much easier. Managing invoices and commissions is simple, and I can see everything going on at a glance.",
    theme: "clarity",
  },
  {
    name: "A2B Cars",
    detail: "Long Crendon Taxis",
    logo: "https://mycabify.com/assets/images/testimonial/testmonial2.jpg",
    quote:
      "MyCabify is really easy to use, and the support team has been great. Booking and dispatch feel much simpler now.",
    theme: "simplicity",
  },
  {
    name: "London Cars",
    detail: "UK taxi operator",
    logo: "https://mycabify.com/assets/images/testimonial/testmonial3.jpg",
    quote:
      "I've been using MyCabify for a couple of years now. It's fast, easy to use, and keeps accurate records of every driver and customer journey.",
    theme: "confidence",
  },
];
