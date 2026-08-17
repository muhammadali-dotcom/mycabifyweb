export type HomeSolution = {
  no: string;
  name: string;
  role: string;
  href: string;
  time: string;
  title: string;
  copy: string;
  type: string;
};

export const solutions: HomeSolution[] = [
  {
    no: "01",
    name: "Dispatch System",
    role: "CONTROL",
    href: "/dispatch-system",
    time: "01:30",
    title: "A booking enters. The whole operation moves.",
    copy: "Create, price, allocate and follow every journey from one clear operational view.",
    type: "desktop",
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
      "MyCabify LTD has significantly streamlined my everyday booking and dispatching operations. The platform makes it incredibly easy to manage invoices and commissions, while providing a clear and comprehensive overview of all activities.",
    theme: "clarity",
  },
  {
    name: "A2B Cars",
    detail: "Long Crendon Taxis",
    logo: "https://mycabify.com/assets/images/testimonial/testmonial2.jpg",
    quote:
      "I found MyCabify LTD incredibly user-friendly, and the support team has been fantastic throughout my experience. MyCabify has significantly simplified my booking and dispatch processes.",
    theme: "simplicity",
  },
  {
    name: "London Cars",
    detail: "UK taxi operator",
    logo: "https://mycabify.com/assets/images/testimonial/testmonial3.jpg",
    quote:
      "I have been successfully using MyCabify LTD for the past couple of years. I find it highly efficient and user-friendly. It reliably tracks all my driver and customer journeys, ensuring accurate daily income records.",
    theme: "confidence",
  },
];
